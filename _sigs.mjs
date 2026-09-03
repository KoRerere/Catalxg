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

function bodyInner(h) {
  const o = h.indexOf('<body'); const oe = h.indexOf('>', o) + 1; const c = h.lastIndexOf('</body>')
  return h.slice(oe, c)
}
function strip(s) {
  return s.replace(/<script\b[\s\S]*?<\/script>/gi, '').replace(/<style\b[\s\S]*?<\/style>/gi, '').replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<[a-zA-Z][^>]*?>/g, (tag) => {
      if (/^<\/|^<![a-zA-Z]|^<!DOCTYPE/i.test(tag)) return tag
      const m = tag.match(/^<([a-zA-Z][^\s/>]*)([\s\S]*?)(\/?)>$/); if (!m) return tag
      const name = m[1], ba = m[2], cl = m[3]
      const seen = new Set(); const out = []; const re = /([a-zA-Z_:][\w:.-]*)(\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?/g
      let am
      while ((am = re.exec(ba))) { if (!am[1] || seen.has(am[1])) continue; seen.add(am[1]); out.push(am[0].trim()) }
      return `<${name}${out.length ? ' ' + out.join(' ') : ''}${cl}>`
    })
    .replace(/\s+/g, ' ')
}
// extract a block by start marker to end marker, then structurally hash (class/id keys)
function block(htmlBody, startRe, endRe) {
  const s = htmlBody.search(startRe)
  if (s < 0) return null
  const e = htmlBody.search(endRe, s + 1)
  return e < 0 ? null : htmlBody.slice(s, e)
}
const sig = (s) => crypto.createHash('sha1').update(s || '').digest('hex').slice(0, 8)

const footerSigs = {}, headerSigs = {}, ocSigs = {}, waSigs = {}, totopSigs = {}
for (const r of routes) {
  const h = fs.readFileSync(r.file, 'utf8')
  const b = strip(bodyInner(h))
  const cm = b.lastIndexOf('</main>')
  // footer: <div class="fusion-tb-footer ... to to-top container
  const footer = cm >= 0 ? block(b, /<div class="fusion-tb-footer/i, /<section class="to-top-container/i) : null
  // header: fusion-tb-header to sliders-container
  const header = block(b, /<div class="fusion-tb-header/i, /<div id="sliders-container/i)
  // off-canvas: id="awb-oc-... 
  const oc = block(b, /<div id="awb-oc-1436"/i, /<div id="boxed-wrapper"/i)
  // whatsapp ht-ctc
  const wa = block(b, /ht-ctc/i, /<section class="to-top-container/i)
  // to-top
  const tt = block(b, /<section class="to-top-container/i, /<\/section>/i)

  if (footer) footerSigs[r.route] = sig(footer)
  if (header) headerSigs[r.route] = sig(header)
  if (oc) ocSigs[r.route] = sig(oc)
  if (wa) waSigs[r.route] = sig(wa)
  if (tt) totopSigs[r.route] = sig(tt)
}

function group(map, label) {
  const g = {}
  for (const [k, v] of Object.entries(map)) { (g[v] = g[v] || []).push(k) }
  console.log(`\n=== ${label}: ${new Set(Object.values(map)).size} 种结构 ===`)
  for (const [s, ks] of Object.entries(g)) console.log(`  [${s}] ${ks.length} 页: ${ks.join(', ')}`)
}
group(footerSigs, 'FOOTER (fusion-tb-footer)')
group(headerSigs, 'HEADER (fusion-tb-header)')
group(ocSigs, 'OFF-CANVAS (awb-oc-1436)')
group(waSigs, 'WHATSAPP (ht-ctc)')
group(totopSigs, 'TO-TOP')
