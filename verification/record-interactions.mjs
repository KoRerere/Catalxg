import { copyFile, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import pixelmatch from 'pixelmatch'
import { chromium } from 'playwright'
import { PNG } from 'pngjs'

const originalUrl = process.env.ORIGINAL_URL || 'http://localhost:5173'
const nuxtUrl = process.env.NUXT_URL || 'http://localhost:5174'
const outputDir = path.resolve('artifacts/verification')
const recordingDir = path.join(outputDir, 'recordings')
const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

async function record(baseUrl, name) {
  const directory = path.join(recordingDir, name)
  await rm(directory, { recursive: true, force: true })
  await mkdir(directory, { recursive: true })

  const browser = await chromium.launch({ executablePath: chromePath, headless: true })
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    recordVideo: { dir: directory, size: { width: 1280, height: 720 } },
    locale: 'en-GB',
    timezoneId: 'Europe/London',
  })
  await context.route('**/*', async (route) => {
    const url = new URL(route.request().url())
    if (url.hostname === 'localhost' || url.hostname === '127.0.0.1') {
      await route.continue()
    } else {
      await route.abort()
    }
  })

  const page = await context.newPage()
  const states = []
  const captureState = async (state) => {
    const file = path.join(outputDir, `${state}-${name}.png`)
    await page.screenshot({ path: file, animations: 'disabled' })
    states.push({ state, file })
  }

  await page.goto(`${baseUrl}/`, { waitUntil: 'domcontentloaded' })
  await page.waitForTimeout(1200)
  await page.locator('a[href="#awb-open-oc__1436"]').first().click()
  await page.waitForTimeout(1000)
  await captureState('search-open')
  await page.locator('#awb-oc-1436 .off-canvas-close').click()
  await page.waitForTimeout(900)
  await page.mouse.wheel(0, 560)
  await page.waitForTimeout(900)
  await page.mouse.wheel(0, -560)
  await page.waitForTimeout(700)

  await page.goto(`${baseUrl}/shop-2/`, { waitUntil: 'domcontentloaded' })
  await page.waitForTimeout(1200)
  await page.locator('.fusion-list-view').click()
  await page.waitForTimeout(1100)
  await captureState('shop-list')
  await page.locator('.fusion-grid-view').click()
  await page.waitForTimeout(900)
  await captureState('shop-grid')
  await page.locator('.add_to_cart_button').first().click()
  await page.waitForTimeout(900)
  await page.locator('.fusion-menu-cart > a').first().click()
  await page.waitForLoadState('domcontentloaded')
  await page.waitForTimeout(1200)
  await captureState('cart-after-add')

  await page.goto(`${baseUrl}/product/retatrutide-20mg-rd-only/`, {
    waitUntil: 'domcontentloaded',
  })
  await page.waitForTimeout(1200)
  const quantity = page.locator('.qty').first()
  if (await quantity.isVisible()) {
    await quantity.fill('2')
    await quantity.press('Tab')
  }
  await page.waitForTimeout(500)
  await captureState('product-quantity')
  await page.locator('.single_add_to_cart_button').click()
  await page.waitForTimeout(1200)

  const video = page.video()
  await context.close()
  await browser.close()
  const source = await video.path()
  const target = path.join(outputDir, `${name}-interactions.webm`)
  await copyFile(source, target)
  return { video: target, states }
}

async function compareStates(originalStates, nuxtStates) {
  const comparisons = []
  for (const originalState of originalStates) {
    const nuxtState = nuxtStates.find(candidate => candidate.state === originalState.state)
    if (!nuxtState) throw new Error(`Missing Nuxt state: ${originalState.state}`)
    const [originalBuffer, nuxtBuffer] = await Promise.all([
      readFile(originalState.file),
      readFile(nuxtState.file),
    ])
    const original = PNG.sync.read(originalBuffer)
    const nuxt = PNG.sync.read(nuxtBuffer)
    if (original.width !== nuxt.width || original.height !== nuxt.height) {
      comparisons.push({
        state: originalState.state,
        identical: false,
        reason: `Dimensions differ: ${original.width}x${original.height} vs ${nuxt.width}x${nuxt.height}`,
      })
      continue
    }
    const diff = new PNG({ width: original.width, height: original.height })
    const mismatchedPixels = pixelmatch(
      original.data,
      nuxt.data,
      diff.data,
      original.width,
      original.height,
      { threshold: 0 },
    )
    const diffFile = path.join(outputDir, `${originalState.state}-diff.png`)
    await writeFile(diffFile, PNG.sync.write(diff))
    comparisons.push({
      state: originalState.state,
      width: original.width,
      height: original.height,
      mismatchedPixels,
      mismatchRatio: mismatchedPixels / (original.width * original.height),
      identical: mismatchedPixels === 0,
      originalFile: originalState.file,
      nuxtFile: nuxtState.file,
      diffFile,
    })
  }
  return comparisons
}

await mkdir(recordingDir, { recursive: true })
const original = await record(originalUrl, 'original')
const nuxt = await record(nuxtUrl, 'nuxt')
const stateComparisons = await compareStates(original.states, nuxt.states)
const originalVideo = original.video
const nuxtVideo = nuxt.video
const comparisonVideo = path.join(outputDir, 'interaction-comparison.mp4')

const ffmpeg = spawnSync(
  'ffmpeg',
  [
    '-y',
    '-i', originalVideo,
    '-i', nuxtVideo,
    '-filter_complex',
    '[0:v]setpts=PTS-STARTPTS,scale=960:540:force_original_aspect_ratio=decrease,pad=960:540:(ow-iw)/2:(oh-ih)/2[left];[1:v]setpts=PTS-STARTPTS,scale=960:540:force_original_aspect_ratio=decrease,pad=960:540:(ow-iw)/2:(oh-ih)/2[right];[left][right]hstack=inputs=2[v]',
    '-map', '[v]',
    '-an',
    '-c:v', 'libx264',
    '-crf', '20',
    '-preset', 'medium',
    '-pix_fmt', 'yuv420p',
    '-shortest',
    comparisonVideo,
  ],
  { encoding: 'utf8' },
)

if (ffmpeg.status !== 0) {
  console.error(ffmpeg.stderr)
  process.exit(1)
}

const report = {
  generatedAt: new Date().toISOString(),
  originalUrl,
  nuxtUrl,
  originalVideo,
  nuxtVideo,
  comparisonVideo,
  comparisonLayout: 'Original on the left; Nuxt 4 on the right',
  stateComparisons,
  passed: stateComparisons.every(comparison => comparison.identical),
}
await writeFile(
  path.join(outputDir, 'interaction-report.json'),
  `${JSON.stringify(report, null, 2)}\n`,
)
console.log(JSON.stringify(report, null, 2))

if (!report.passed) process.exitCode = 1
