import fs from 'node:fs'

// Builds app/components/layout/SiteFooter.vue from the Avada <footer> element.
// Footer menus/links/phone are shared; only the Cloudflare email-protection hash differs.
function bodyInner(h) {
  const o = h.indexOf('<body'); const oe = h.indexOf('>', o) + 1; const c = h.lastIndexOf('</body>')
  return h.slice(oe, c)
}
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
function clean(s) {
  let c = s.replace(/<script\b[\s\S]*?<\/script>/gi, '').replace(/<style\b[\s\S]*?<\/style>/gi, '').replace(/<!--[\s\S]*?-->/g, '')
  c = c.replace(/<[a-zA-Z][^>]*?>/g, (tag) => {
    if (/^<\/|^<![a-zA-Z]|^<!DOCTYPE/i.test(tag)) return tag
    const m = tag.match(/^<([a-zA-Z][^\s/>]*)([\s\S]*?)(\/?)>$/); if (!m) return tag
    const name = m[1], ba = m[2], cl = m[3]
    const seen = new Set(); const out = []; const re = /([a-zA-Z_:][\w:.-]*)(\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?/g
    let am
    while ((am = re.exec(ba))) { if (!am[1] || seen.has(am[1])) continue; seen.add(am[1]); out.push(am[0].trim()) }
    return `<${name}${out.length ? ' ' + out.join(' ') : ''}${cl}>`
  })
  return autoClose(c).trim()
}

const raw = fs.readFileSync('site/index.html', 'utf8')
const b = bodyInner(raw)
const cm = b.lastIndexOf('</main>')
const fStart = b.indexOf('<div class="fusion-tb-footer', cm)
const footer = clean(grabBalanced(b, fStart))
const defaultHash = footer.match(/email-protection#([a-f0-9]+)/i)?.[1] || ''

const lines = []
lines.push('<script setup lang="ts">')
lines.push('// SiteFooter: reusable Avada footer. Structure and link menus are shared;')
lines.push('// the Cloudflare email-protection hash is the only per-page difference.')
lines.push("const props = withDefaults(defineProps<{ emailHash?: string }>(), { emailHash: '" + defaultHash + "' })")
lines.push('')
lines.push('function decodeCfEmail(h) {')
lines.push("  let r = parseInt(h.slice(0, 2), 16), o = h.slice(2), s = ''")
lines.push("  for (let i = 0; i < o.length; i += 2) s += String.fromCharCode(parseInt(o.slice(i, i + 2), 16) ^ r)")
lines.push('  return s')
lines.push('}')
lines.push('function initEmail() {')
lines.push("  if (typeof window === 'undefined') return")
lines.push("  const hash = props.emailHash")
lines.push("  if (!hash || !/^[a-f0-9]+$/i.test(hash)) return")
lines.push("  const mail = decodeCfEmail(hash)")
lines.push("  document.querySelectorAll('a[href*=\\'/cdn-cgi/l/email-protection\\']').forEach((a) => {")
lines.push("    a.href = 'mailto:' + mail")
lines.push("    a.textContent = mail")
lines.push('  })')
lines.push('}')
lines.push('onMounted(initEmail)')
lines.push('</script>')
lines.push('')
lines.push('<template>')
lines.push(footer)
lines.push('</template>')

fs.writeFileSync('app/components/layout/SiteFooter.vue', lines.join('\n'))
console.log('SiteFooter.vue written:', lines.join('\n').length, 'bytes, defaultHash:', defaultHash)
