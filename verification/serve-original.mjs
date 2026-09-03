// Static server for the ORIGINAL WordPress/Avada site (the `site/` mirror).
// Used as the pixel/interaction reference when the Nuxt rewrite no longer produces
// byte-identical HTML (a genuine Vue SSR render never will), so verification is
// based on rendered pixels + behavior, not response hashes.
import { createServer } from 'node:http'
import { createReadStream, existsSync, statSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(here, '..', 'site')
const port = Number(process.env.ORIGINAL_PORT || 5173)
const contentTypes = {
  '.css':'text/css','.html':'text/html','.js':'text/javascript','.json':'application/json',
  '.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml',
  '.gif':'image/gif','.ico':'image/x-icon','.woff':'font/woff','.woff2':'font/woff2','.ttf':'font/ttf',
  '.eot':'application/vnd.ms-fontobject','.mp4':'video/mp4','.webm':'video/webm','.cur':'application/octet-stream'
}
const textTypes = new Set(['.css','.html','.js','.json','.svg'])

createServer((req, res) => {
  let url = decodeURIComponent((req.url || '/').split('?')[0])
  if (url.endsWith('/')) url += 'index.html'
  let filePath = path.resolve(root, url.replace(/^\/+/, ''))
  if (filePath !== root && !filePath.startsWith(root + path.sep)) { res.statusCode = 404; res.end('Not found'); return }
  if (!existsSync(filePath) || !statSync(filePath).isFile()) {
    const alt = path.join(filePath, 'index.html')
    if (!existsSync(alt)) { res.statusCode = 404; res.end('Not found'); return }
    filePath = alt
  }
  const ext = path.extname(filePath).toLowerCase()
  const ct = contentTypes[ext] || 'application/octet-stream'
  res.setHeader('content-type', textTypes.has(ext) ? `${ct}; charset=utf-8` : ct)
  createReadStream(filePath).pipe(res)
}).listen(port, () => console.log('Original site on http://localhost:' + port))
