import assert from 'node:assert/strict'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import pixelmatch from 'pixelmatch'
import { chromium } from 'playwright'
import { PNG } from 'pngjs'

// Compares a genuine Nuxt build against the ORIGINAL static WordPress/Avada site by
// rendered pixels (the Nuxt build is a real Vue SSR render, so its HTML bytes differ
// from the WordPress output even when the rendering is identical). Interactions are
// compared separately in record-interactions.mjs.
const originalUrl = process.env.ORIGINAL_URL || 'http://localhost:5173'
const nuxtUrl = process.env.NUXT_URL || 'http://localhost:5174'
const outputDir = path.resolve('artifacts/verification')
const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

const cases = [
  { name: 'home-desktop', route: '/', width: 1440, height: 1000 },
  { name: 'shop-desktop', route: '/shop-2/', width: 1440, height: 1000 },
  { name: 'product-desktop', route: '/product/retatrutide-20mg-rd-only/', width: 1440, height: 1000 },
  { name: 'home-mobile', route: '/', width: 390, height: 844 },
  { name: 'shop-mobile', route: '/shop-2/', width: 390, height: 844 },
]

const pageRoutes = [
  '/', '/about/', '/cart-2/', '/checkout-2/', '/contact/', '/contact-2/', '/shop-2/',
  '/product/bpc-157-and-tb-500/', '/product/glow-70mg/', '/product/nad-1000mg/',
  '/product/retatrutide-20mg-rd-only/', '/product/tirzepatide/',
  '/product/where-to-buy-retatrutide/',
]

async function settle(page) {
  await page.waitForLoadState('domcontentloaded')
  await page.evaluate(async () => {
    await document.fonts.ready
    let previousHeight = 0
    for (let pass = 0; pass < 3; pass += 1) {
      const height = document.documentElement.scrollHeight
      for (let y = 0; y < height; y += Math.max(600, window.innerHeight * 0.8)) {
        window.scrollTo(0, y)
        await new Promise(resolve => setTimeout(resolve, 200))
      }
      window.scrollTo(0, 0)
      await new Promise(resolve => setTimeout(resolve, 500))
      if (height === previousHeight) break
      previousHeight = height
    }
  })
  await page.waitForFunction(
    () => {
      const localImages = [...document.images].filter((image) => {
        const source = image.currentSrc || image.src
        return !source || new URL(source, location.href).origin === location.origin
      })
      return (
        localImages.every(image => image.complete && image.naturalWidth > 0) &&
        !document.querySelector('.lazyloading')
      )
    },
    undefined,
    { timeout: 15000 },
  )
  // Freeze CSS animations/transitions so the marquee, sliders and hover states land
  // on the identical frame for both the original and Nuxt captures. Without this the
  // marquee/hero updates non-deterministically (a harness flakiness, not a render diff).
  await page.addStyleTag({ content: `
    *, *::before, *::after {
      animation-play-state: paused !important;
      transition: none !important;
      caret-color: transparent !important;
    }
  ` })
  await page.evaluate(() => new Promise(r => {
    // force a paint after freezing
    requestAnimationFrame(() => requestAnimationFrame(r))
  }))
  await page.waitForTimeout(800)
}

async function capture(browser, baseUrl, testCase, suffix) {
  const context = await browser.newContext({
    viewport: { width: testCase.width, height: testCase.height },
    deviceScaleFactor: 1,
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
  await page.goto(`${baseUrl}${testCase.route}`, { waitUntil: 'domcontentloaded' })
  await settle(page)
  const file = path.join(outputDir, `${testCase.name}-${suffix}.png`)
  await page.screenshot({ path: file, fullPage: true, animations: 'disabled' })
  await context.close()
  return file
}

async function comparePng(originalFile, nuxtFile, diffFile) {
  const [originalBuffer, nuxtBuffer] = await Promise.all([
    readFile(originalFile),
    readFile(nuxtFile),
  ])
  const original = PNG.sync.read(originalBuffer)
  const nuxt = PNG.sync.read(nuxtBuffer)
  assert.equal(nuxt.width, original.width, `Width differs for ${originalFile}`)
  assert.equal(nuxt.height, original.height, `Height differs for ${originalFile}`)

  const diff = new PNG({ width: original.width, height: original.height })
  const mismatchedPixels = pixelmatch(
    original.data,
    nuxt.data,
    diff.data,
    original.width,
    original.height,
    { threshold: 0 },
  )
  await writeFile(diffFile, PNG.sync.write(diff))
  return {
    width: original.width,
    height: original.height,
    mismatchedPixels,
    mismatchRatio: mismatchedPixels / (original.width * original.height),
  }
}

await mkdir(outputDir, { recursive: true })

const responseChecks = []
for (const route of pageRoutes) {
  const [originalResponse, nuxtResponse] = await Promise.all([
    fetch(`${originalUrl}${route}`),
    fetch(`${nuxtUrl}${route}`),
  ])
  responseChecks.push({
    route,
    originalStatus: originalResponse.status,
    nuxtStatus: nuxtResponse.status,
    statusMatch: originalResponse.status === nuxtResponse.status,
  })
}

const browser = await chromium.launch({ executablePath: chromePath, headless: true })
const screenshots = []
try {
  for (const testCase of cases) {
    const originalFile = await capture(browser, originalUrl, testCase, 'original')
    const nuxtFile = await capture(browser, nuxtUrl, testCase, 'nuxt')
    const diffFile = path.join(outputDir, `${testCase.name}-diff.png`)
    screenshots.push({
      name: testCase.name,
      route: testCase.route,
      ...(await comparePng(originalFile, nuxtFile, diffFile)),
      originalFile,
      nuxtFile,
      diffFile,
    })
  }
} finally {
  await browser.close()
}

const report = {
  generatedAt: new Date().toISOString(),
  originalUrl,
  nuxtUrl,
  method: 'pixel-perfect rendering (genuine Nuxt SSR; HTML bytes are not compared)',
  responseChecks,
  screenshots,
  passed:
    responseChecks.every(check => check.statusMatch) &&
    screenshots.every(screenshot => screenshot.mismatchedPixels === 0),
}

await writeFile(path.join(outputDir, 'report.json'), `${JSON.stringify(report, null, 2)}\n`)
console.log(JSON.stringify(report, null, 2))

if (!report.passed) process.exitCode = 1
