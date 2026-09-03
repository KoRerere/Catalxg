import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'

const siteDir = 'site'
const routes = []
function walk(dir, base) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const f = path.join(dir, e.name)
    if (e.isDirectory()) walk(f, base + e.name + '/')
    else if (e.name === 'index.html') routes.push({ file: f, route: '/' + base })
  }
}
walk(siteDir, '')

function bodyInner(h) { const o = h.indexOf('<body'); const oe = h.indexOf('>', o) + 1; const c = h.lastIndexOf('</body>'); return h.slice(oe, c) }
function strip(s) {
  return s.replace(/<script\b[\s\S]*?<\/script>/gi, '').replace(/<style\b[\s\S]*?<\/style>/gi, '').replace(/<!--[\s\S]*?-->/g, '')
}
// Normalize the numbered builder suffixes that only exist for CSS targeting, so two
// pages whose footer differs ONLY by row/column numbering hash the same.
function normalize(s) {
  return s
    .replace(/fusion-builder-row(-[0-9]+)?/g, 'fusion-builder-row')
    .replace(/fusion-builder-column(-|_)[0-9]+/g, 'fusion-builder-columnN')
    .replace(/fusion-post-cards(-|_)[0-9]+/g, 'fusion-post-cardsN')
    .replace(/fusion-title(-[0-9]+)?/g, 'fusion-titleN')
    .replace(/imageframe-[0-9]+/g, 'imageframeN')
    .replace(/fusion-builder-nested-column-[0-9]+/g, 'fusion-builder-nested-columnN')
    .replace(/fusion-column-?-?[0-9]+/g, 'fusion-columnN')
    .replace(/fusion-text-[0-9]+/g, 'fusion-textN')
    .replace(/fusion-meta-tb-[0-9]+/g, 'fusion-meta-tbN')
    .replace(/fusion-woo-price-tb-[0-9]+/g, 'fusion-woo-price-tbN')
    .replace(/fusion-content-tb-[0-9]+/g, 'fusion-content-tbN')
    .replace(/fusion-image-element-[0-9]+/g, 'fusion-image-elementN')
    .replace(/fb-icon-element-[0-9]+/g, 'fb-icon-elementN')
    .replace(/fusion-woo-cart-[0-9]+/g, 'fusion-woo-cartN')
    .replace(/fusion-rollover-[0-9]+/g, 'fusion-rolloverN')
    .replace(/fusion-classic-product-image-[0-9]+/g, 'fusion-classic-product-imageN')
    .replace(/fusion-product-badges-[0-9]+/g, 'fusion-product-badgesN')
    .replace(/fusion-woo-product-images-[0-9]+/g, 'fusion-woo-product-imagesN')
    .replace(/fusion-sep-[0-9]+/g, 'fusion-sepN')
    .replace(/fusion-builder-column(-|_)[0-9]+/g, 'fusion-builder-columnN')
    .replace(/\s+/g, '')
}
const sig = (s) => crypto.createHash('sha1').update(s || '').digest('hex').slice(0, 8)

const foot = {}, head = {}, ocn = {}, waa = {}, tt = {}
for (const r of routes) {
  const h = fs.readFileSync(r.file, 'utf8')
  const b = strip(bodyInner(h))
  const cm = b.lastIndexOf('</main>')
  const footer = cm >= 0 ? b.slice(b.indexOf('<div class="fusion-tb-footer', cm), b.indexOf('<section class="to-top-container', cm)) : null
  const header = b.slice(b.indexOf('<div class="fusion-tb-header'), b.indexOf('<div id="sliders-container'))
  const oc = b.slice(b.indexOf('<div id="awb-oc-1436'), b.indexOf('<div id="boxed-wrapper'))
  const wa = b.slice(b.indexOf('ht-ctc'), b.indexOf('<section class="to-top-container'))
  const top = b.slice(b.indexOf('<section class="to-top-container'), b.indexOf('</section>') + 9)
  if (footer) foot[r.route] = sig(normalize(footer))
  if (header) head[r.route] = sig(normalize(header))
  if (oc && oc.length > 10) ocn[r.route] = sig(normalize(oc))
  if (wa && wa.length > 10) waa[r.route] = sig(normalize(wa))
  if (top && top.length > 10) tt[r.route] = sig(normalize(top))
}
function group(map, label) {
  const g = {}
  for (const [k, v] of Object.entries(map)) { (g[v] = g[v] || []).push(k) }
  console.log(`\n=== ${label}: ${new Set(Object.values(map)).size} 种(去编号后) ===`)
  for (const [s, ks] of Object.entries(g)) console.log(`  [${s}] ${ks.length} 页: ${ks.slice(0,12).join(', ')}${ks.length>12?'…':''}`)
}
group(foot, 'FOOTER')
group(head, 'HEADER')
group(ocn, 'OFF-CANVAS')
group(waa, 'WHATSAPP')
group(tt, 'TO-TOP')
console.log('\noff-canvas 出现页数:', Object.keys(ocn).length, '| whatsapp:', Object.keys(waa).length, '| to-top:', Object.keys(tt).length)
