import fs from 'node:fs'
import path from 'node:path'

// Genuine Nuxt generator v1 (faithful DOM). Serves as the pixel-consistent baseline.
// Produces one self-contained .vue page per route reproducing the exact site DOM.
const siteDir = 'site'
const pagesDir = 'app/pages'
fs.mkdirSync(pagesDir, { recursive: true })

const routes = []
function walk(dir, routeBase) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, routeBase + entry.name + '/')
    else if (entry.name === 'index.html') routes.push({ file: full, route: '/' + routeBase })
  }
}
walk(siteDir, '')

function pageOut(file) {
  const slug = file.replace(/^site\//, '').replace(/index\.html$/, '').replace(/\/$/, '')
  return slug === '' || slug === 'index' ? 'index.vue' : slug + '.vue'
}
function extractBodyClass(html) {
  const m = html.match(/<body[^>]*class="([^"]*)"/); return m ? m[1] : ''
}
function extractBodyAttrs(html) {
  const m = html.match(/<body([^>]*)>/); if (!m) return ''
  return m[1].replace(/\bclass="[^"]*"/, '').trim()
}
function extractHtmlAttrs(html) {
  const m = html.match(/<html([^>]*)>/); return m ? m[1].trim() : ''
}
function extractBodyInner(html) {
  const open = html.indexOf('<body'); const openEnd = html.indexOf('>', open) + 1; const close = html.lastIndexOf('</body>')
  return html.slice(openEnd, close)
}

function parseAttrs(str) {
  const out = {}
  const re = /([\w:-]+)(?:\s*=\s*("([^"]*)"|'([^']*)'|([^\s>"']+)))?\s*/g
  let m
  while ((m = re.exec(str))) {
    if (!m[1] || m[1] === '/') continue
    out[m[1]] = m[3] !== undefined ? m[3] : (m[4] !== undefined ? m[4] : (m[5] !== undefined ? m[5] : ''))
  }
  return out
}
function parseHead(html) {
  const s = html.indexOf('<head>'); const e = html.indexOf('</head>')
  const rawHead = s < 0 ? '' : html.slice(s + '<head>'.length, e)
  const title = (rawHead.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || ''
  const metas = [], links = [], styles = [], headScripts = []
  let m
  const styleRe = /<style\b[^>]*>([\s\S]*?)<\/style>/gi
  while ((m = styleRe.exec(rawHead))) styles.push(m[1].replace(/<!--[\s\S]*?-->/g, '').trim())
  const linkRe = /<link\b([^>]*)>/gi
  while ((m = linkRe.exec(rawHead))) { const a = parseAttrs(m[1]); if (a.href || a.rel) links.push(a) }
  const metaRe = /<meta\b([^>]*)>/gi
  while ((m = metaRe.exec(rawHead))) metas.push(parseAttrs(m[1]))
  const scriptRe = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi
  while ((m = scriptRe.exec(rawHead))) {
    const a = parseAttrs(m[1])
    if (a.src) headScripts.push({ src: a.src, defer: a.defer, async: a.async })
    else if (m[2].trim()) headScripts.push({ innerHTML: m[2] })
  }
  return { title, metas, links, styles, headScripts }
}
function parseBodyScripts(bodyInner) {
  const scripts = [], styles = []
  let m
  const styleRe = /<style\b[^>]*>([\s\S]*?)<\/style>/gi
  while ((m = styleRe.exec(bodyInner))) styles.push(m[1].replace(/<!--[\s\S]*?-->/g, '').trim())
  const scriptRe = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi
  while ((m = scriptRe.exec(bodyInner))) {
    const a = parseAttrs(m[1])
    if (a.src) scripts.push({ src: a.src, defer: a.defer, async: a.async })
    else if (m[2].trim()) scripts.push({ innerHTML: m[2] })
  }
  return { scripts, styles }
}
const VOID_TAGS = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'])
function autoClose(html) {
  const re = /<(\/?)([a-zA-Z][a-zA-Z0-9-]*)((?:"[^"]*"|'[^']*'|[^>"'])*?)\s*(\/?)>/g
  const stack = []; let out = ''; let last = 0; let m
  while ((m = re.exec(html))) {
    out += html.slice(last, m.index); last = m.index + m[0].length
    const close = m[1], name = m[2].toLowerCase(), self = m[4] === '/'
    if (close) { for (let i = stack.length - 1; i >= 0; i--) { if (stack[i] === name) { out += '</' + name + '>'; stack.length = i; break } } }
    else if (self || VOID_TAGS.has(name)) { out += m[0] }
    else { out += m[0]; stack.push(name) }
  }
  out += html.slice(last)
  for (let i = stack.length - 1; i >= 0; i--) out += '</' + stack[i] + '>'
  return out
}
function stripForTemplate(bodyInner) {
  let s = bodyInner
    .replace(/<script\b[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[\s\S]*?<\/style>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
  const deckStart = s.search(/<!DOCTYPE[\s\S]*?<body\b/i)
  if (deckStart >= 0) { const vis = s.slice(deckStart).match(/<div class="wp-die-message">[\s\S]*?<\/div>/); s = s.slice(0, deckStart) + (vis ? vis[0] : '') }
  s = s.replace(/<[a-zA-Z][^>]*?>/g, (tag) => {
    if (/^<\/|^<![a-zA-Z]|^<!DOCTYPE/i.test(tag)) return tag
    const m = tag.match(/^<([a-zA-Z][^\s/>]*)([\s\S]*?)(\/?)>$/); if (!m) return tag
    const name = m[1], ba = m[2], cl = m[3]
    const seen = new Set(); const out = []; const re = /([a-zA-Z_:][\w:.-]*)(\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?/g
    let am
    while ((am = re.exec(ba))) { if (!am[1] || seen.has(am[1])) continue; seen.add(am[1]); out.push(am[0].trim()) }
    return `<${name}${out.length ? ' ' + out.join(' ') : ''}${cl}>`
  })
  return autoClose(s)
}

// Replace the truly page-independent shared chrome with genuine Nuxt component
// references. These blocks (-to-top, -whatsapp, -off-canvas) are structurally
// identical across every page (no numbered Avada classes), so they are safe to
// become real reusable components without touching the CSS.
function grabBalanced(html, startIdx) {
  let depth = 0
  const re = /<\/?(div|section)\b[^>]*>/gi
  let m
  while ((m = re.exec(html))) {
    if (m.index < startIdx) continue
    const tag = m[0]
    if (tag.startsWith('</')) depth--
    else depth++
    if (depth === 0) return html.slice(startIdx, m.index + m[0].length)
  }
  return null
}
function componentize(s, products = []) {
  // 1) to-top container
  s = s.replace(/<section class="to-top-container[^>]*>[\s\S]*?<\/section>/i, '  <SiteToTop/>')
  // 2) header: <div class="fusion-tb-header">...</div> -> <SiteHeader/>
  const hStart = s.indexOf('<div class="fusion-tb-header"')
  if (hStart >= 0) {
    const hd = grabBalanced(s, hStart)
    if (hd) {
      // home uses the short header (no CATEGORIES mega menu / phone column)
      const isShort = !hd.includes('CATEGORIES') && !hd.includes('Order by phone')
      s = s.slice(0, hStart) + `  <SiteHeader${isShort ? ' variant="short"' : ''}/>` + s.slice(hStart + hd.length)
    }
  }
  // 3) whatsapp click-to-chat widget (balanced div) + its trailing data-source span.
  //    The data-settings <span> carries the page_id; replace both with <SiteWhatsApp/>.
  const waStart = s.indexOf('<div class="ht-ctc')
  if (waStart >= 0) {
    const wa = grabBalanced(s, waStart)
    if (wa) {
      const pid = (wa.match(/page_id(?:&quot;|\\):?\s*"?(\d+)/) || s.match(/page_id(?:&quot;|")\s*:\s*"?(\d+)/))?.[1]
      let end = waStart + wa.length
      let after = s.slice(end)
      const spanStart = after.indexOf('<span class="ht_ctc_chat_data"')
      if (spanStart >= 0) {
        const spanOpen = after.indexOf('<span class="ht_ctc_chat_data"')
        const nextEl = after.slice(spanOpen).search(/<\/?div\b/gi)
        end = end + spanOpen + (nextEl >= 0 ? nextEl : after.length)
      }
      s = s.slice(0, waStart) + `  <SiteWhatsApp :page-id="${pid || 1012}"/>` + s.slice(end)
    }
  }
  // 4) footer: <div class="fusion-tb-footer...">...</div> -> <SiteFooter :email-hash/>
  const fStart = s.indexOf('<div class="fusion-tb-footer')
  if (fStart >= 0) {
    const f = grabBalanced(s, fStart)
    if (f) {
      const hash = f.match(/email-protection#([a-f0-9]+)/i)?.[1] || ''
      // The copyright bar has per-page padding; extract --awb-padding-top/bottom.
      const copyFull = [...f.matchAll(/<div class="fusion-fullwidth[^"]*"[^>]*style="([^"]*)"/g)].map(m => m[1])
      const last = copyFull[copyFull.length - 1] || ''
      const pt = (last.match(/--awb-padding-top:\s*([^;]+)/) || [])[1]
      const pb = (last.match(/--awb-padding-bottom:\s*([^;]+)/) || [])[1]
      const copyrightStyle = pt || pb ? `padding-top:${pt || '0px'};padding-bottom:${pb || '0px'};` : ''
      s = s.slice(0, fStart) + `  <SiteFooter${hash ? ` :email-hash="'${hash}'"` : ''}${copyrightStyle ? ` :copyright-style="'${copyrightStyle}'"` : ''}/>` + s.slice(fStart + f.length)
    }
  }
  // 5) off-canvas panels: <div id="awb-oc-N" class="awb-off-canvas-wrap..."> -> <SiteOffCanvas/>
  s = replaceOffCanvas(s)
  // 6) product card <li> in product grids -> <ProductCard v-for> (per-grid slice)
  const pr = replaceProductCards(s, products)
  _gridVars = pr.gridVars
  s = pr.s
  return s
}
let _gridVars = []

// Replace the product-card <li>s inside EVERY product grid <ul> with a per-grid
// <ProductCard v-for>, slicing the shared products array by how many product <li>s
// that grid originally contained. This preserves multi-grid layouts (e.g. the home
// best-sellers splits 5 cards across two grids: 3 + 2) without duplicating cards.
function replaceProductCards(s, products) {
  if (!products.length) return { s, gridVars: [] }
  // Collect (start,end,productCount) for every product grid ul that has cards.
  const grids = []
  const ulRe = /<ul\b[^>]*>/g
  let um
  while ((um = ulRe.exec(s))) {
    let depth = 0
    const pRe = /<\/?ul\b[^>]*>/g
    let mm
    let end = -1
    pRe.lastIndex = um.index
    while ((mm = pRe.exec(s))) {
      if (mm.index < um.index) continue
      if (mm[0].startsWith('</ul')) depth--
      else depth++
      if (depth === 0) { end = mm.index + mm[0].length; break }
    }
    if (end < 0) continue
    const block = s.slice(um.index, end)
    if (!/<li\b[^>]*class="[^"]*product[^"]*"/.test(block)) { ulRe.lastIndex = um.index + 1; continue }
    const prodCount = (block.match(/<li\b[^>]*class="[^"]*product[^"]*"[^>]*>/g) || []).length
    // Only treat as a product-card grid when it has several full standard cards
    // (>= 3). Single-card compact grids (e.g. the related-product spot in a product
    // page) keep their original markup to avoid height/layout drift.
    if (!prodCount || prodCount < 3) { ulRe.lastIndex = um.index + 1; continue }
    grids.push({ start: um.index, end, count: prodCount })
    ulRe.lastIndex = end
  }
  if (!grids.length) return { s, gridVars: [] }
  // Slice products across grids in order and expose each slice as a named variable.
  let idx = 0
  const gridVars = []
  for (let gi = 0; gi < grids.length; gi++) {
    const slice = products.slice(idx, idx + grids[gi].count)
    idx += grids[gi].count
    const name = `productsGrid${gi + 1}`
    gridVars.push({ name, arr: slice })
    grids[gi].varName = name
  }
  const vforFor = (name) => (name ? `  <ProductCard
    v-for="p in ${name}"
    :key="p.pid"
    :title="p.title"
    :price="p.price"
    :image="p.image"
    :href="p.href"
    :product-id="p.pid"
  />` : '')
  for (let gi = grids.length - 1; gi >= 0; gi--) {
    const { start, end, varName } = grids[gi]
    const openTag = s.slice(start, s.indexOf('>', start) + 1)
    const innerStart = start + openTag.length
    const innerEnd = end - '</ul>'.length
    const inner = s.slice(innerStart, innerEnd)
    const cleanedInner = inner.replace(/<li\b[^>]*class="[^"]*product[^"]*"[^>]*>[\s\S]*?<\/li>/g, '')
    s = s.slice(0, start) + openTag + cleanedInner + '\n' + vforFor(varName) + '\n</ul>' + s.slice(end)
  }
  return { s, gridVars }
}

// Decode the handful of HTML entities Avada emits in product titles/categories.
function decodeEntities(s) {
  return s
    .replace(/&#0?38;/g, '&')
    .replace(/&#0?39;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, '-')
    .replace(/&#8212;/g, '-')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&rsquo;/g, "'")
    .replace(/&ldquo;/g, '\u201c')
    .replace(/&rdquo;/g, '\u201d')
    .replace(/&nbsp;/g, ' ')
}

// Extract product-card data (title/price/image/href/productId) from the raw source.
function extractProducts(file) {
  const h = fs.readFileSync(file, 'utf8')
  const b = h.slice(h.indexOf('<body'))
  function grabLi(html, start) {
    let depth = 0
    const re = /<\/?li\b[^>]*>/g
    let m
    while ((m = re.exec(html))) {
      if (m.index < start) continue
      if (m[0].startsWith('</li')) depth--
      else depth++
      if (depth === 0) return html.slice(start, m.index + m[0].length)
    }
    return null
  }
  const re = /<li\b[^>]*class="[^"]*product[^"]*"/g
  let m
  const products = []
  while ((m = re.exec(b))) {
    const c = grabLi(b, m.index)
    if (!c || c.length < 3000 || !c.includes('title-heading')) continue
    const title = decodeEntities((c.match(/title-heading[^>]*>\s*<a[^>]*>([^<]*)<\/a>/) || [])[1]?.trim() || '')
    const price = (c.match(/woocommerce-Price-amount[^>]*>\s*<bdi>[\s\S]*?>([0-9][0-9.,]*)/) || [])[1] || ''
    const href = (c.match(/href="([^"]*\/product\/[^"]*)"/) || [])[1] || ''
    const pid = (c.match(/data-product_id="(\d+)"/) || [])[1] || ''
    const img = (c.match(/data-orig-src="([^"]*)"|src="([^"]*wp-content[^"]*\.(?:png|jpg|jpeg|webp))"/) || [])[1]
      || (c.match(/src="([^"]*wp-content[^"]*\.(?:png|jpg|jpeg|webp))"/) || [])[1] || ''
    products.push({ title, price, href, pid, image: img.split('/').pop() })
  }
  return products
}

// Replace each Awada off-canvas wrap with a reusable <SiteOffCanvas> and put the
// per-instance inner content in the default slot, so Avada off-canvas JS still works.
function replaceOffCanvas(s) {
  const ocRe = /<div\s+id="awb-oc-(\d+)"\s+class="awb-off-canvas-wrap\s+([^"]*)"(\s+style="([^"]*)")?/g
  let m
  while ((m = ocRe.exec(s))) {
    const id = m[1]
    const cls = m[2]
    const style = m[4] || ''
    const type = cls.includes('type-popup') ? 'popup' : 'sliding-bar'
    const openIdx = s.indexOf('>', m.index) + 1
    const end = (() => {
      let depth = 0
      const re = /<\/?div\b[^>]*>/g
      let mm
      while ((mm = re.exec(s))) {
        if (mm.index < m.index) continue
        const tag = mm[0]
        if (tag.startsWith('</div')) depth--
        else depth++
        if (depth === 0) return mm.index + mm[0].length
      }
      return -1
    })()
    if (end < 0) { ocRe.lastIndex = m.index + 1; continue }
    const inner = s.slice(openIdx, end - '</div>'.length)
    const comp = `<SiteOffCanvas :id="${id}" type="${type}"${style ? ` style-vars="${style}"` : ''}>${inner}</SiteOffCanvas>`
    s = s.slice(0, m.index) + comp + s.slice(end)
    ocRe.lastIndex = m.index + comp.length
  }
  return s
}

function useHeadPayload({ title, metas, links, allStyles, headScripts, bodyScripts, bodyClass, htmlAttrs }) {
  const p = {}
  if (title) p.title = title
  if (metas.length) p.meta = metas
  if (links.length) p.link = links
  if (allStyles.length) p.style = allStyles
  if (htmlAttrs) p.htmlAttrs = htmlAttrs
  if (bodyClass) p.bodyAttrs = { class: bodyClass }
  const scripts = []
  for (const s of headScripts) scripts.push(s.src ? { src: s.src, defer: s.defer ? true : undefined, async: s.async ? true : undefined } : { innerHTML: s.innerHTML })
  for (const s of bodyScripts) scripts.push(s.src ? { src: s.src, tagPosition: 'bodyClose' } : { innerHTML: s.innerHTML, tagPosition: 'bodyClose' })
  if (scripts.length) p.script = scripts
  return p
}

function buildPageSfc(file, route) {
  const html = fs.readFileSync(file, 'utf8')
  const bodyClass = extractBodyClass(html)
  const bodyAttrs = extractBodyAttrs(html)
  const htmlAttrs = extractHtmlAttrs(html)
  const bodyInner = extractBodyInner(html)
  const { title, metas, links, styles, headScripts } = parseHead(html)
  const { scripts: bodyScripts, styles: bodyStyles } = parseBodyScripts(bodyInner)
  const products = extractProducts(file)
  let template = stripForTemplate(bodyInner).trim()
  template = componentize(template, products)
  const allStyles = [...styles, ...bodyStyles]
  let bodyAttrsObj = null
  if (bodyAttrs) { bodyAttrsObj = parseAttrs(bodyAttrs); delete bodyAttrsObj['']; delete bodyAttrsObj['/'] }
  let htmlAttrsObj = htmlAttrs ? parseAttrs(htmlAttrs) : null
  if (htmlAttrsObj) { delete htmlAttrsObj['']; delete htmlAttrsObj['/'] }
  const payload = useHeadPayload({ title, metas, links, allStyles, headScripts, bodyScripts, bodyClass, htmlAttrs: htmlAttrsObj })
  const payloadStr = JSON.stringify(payload, null, 2)
  let extraBodyAttrs = ''
  if (bodyAttrsObj && Object.keys(bodyAttrsObj).length) {
    const rest = Object.keys(bodyAttrsObj).reduce((acc, k) => { acc[k] = bodyAttrsObj[k]; return acc }, {})
    extraBodyAttrs = `const _ba = ${JSON.stringify(rest)}; payload.bodyAttrs = Object.assign({ class: ${JSON.stringify(bodyClass)} }, _ba);`
  }
  // Explicit component imports (Nuxt auto-import prefixes sub-directory components).
  const imports = []
  if (template.includes('<SiteToTop')) imports.push(`import SiteToTop from '~/components/layout/SiteToTop.vue'`)
  if (template.includes('<SiteWhatsApp')) imports.push(`import SiteWhatsApp from '~/components/layout/SiteWhatsApp.vue'`)
  if (template.includes('<SiteHeader')) imports.push(`import SiteHeader from '~/components/layout/SiteHeader.vue'`)
  if (template.includes('<SiteFooter')) imports.push(`import SiteFooter from '~/components/layout/SiteFooter.vue'`)
  if (template.includes('<SiteOffCanvas')) imports.push(`import SiteOffCanvas from '~/components/layout/SiteOffCanvas.vue'`)
  if (template.includes('<ProductCard')) imports.push(`import ProductCard from '~/components/product/ProductCard.vue'`)
  const productsStr = products.length ? `const products = ${JSON.stringify(products)}` : ''
  const gridVarsStr = _gridVars.map(gv => `const ${gv.name} = ${JSON.stringify(gv.arr)}`).join('\n')
  return `<script setup lang="ts">
${imports.join('\n')}
${productsStr}
${gridVarsStr}
const payload = ${payloadStr}
${extraBodyAttrs}
useHead(payload)
</script>

<template>
${template}
</template>
`
}

for (const r of routes) {
  const out = path.join(pagesDir, pageOut(r.file))
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, buildPageSfc(r.file, r.route))
}
console.log('rebuilt', routes.length, 'pages')
