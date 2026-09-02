import { createReadStream, existsSync } from 'node:fs'
import { stat } from 'node:fs/promises'
import path from 'node:path'
import {
  defineEventHandler,
  getRequestURL,
  sendStream,
  setResponseHeader,
  setResponseStatus,
} from 'h3'

const siteRoot = path.resolve(process.cwd(), 'site')

const contentTypes: Record<string, string> = {
  '.css': 'text/css',
  '.eot': 'application/vnd.ms-fontobject',
  '.gif': 'image/gif',
  '.html': 'text/html',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.mp4': 'video/mp4',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ttf': 'font/ttf',
  '.webm': 'video/webm',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

const textTypes = new Set(['.css', '.html', '.js', '.json', '.svg'])

function notFound(event: Parameters<typeof setResponseStatus>[0]) {
  setResponseStatus(event, 404)
  setResponseHeader(event, 'content-type', 'text/plain; charset=utf-8')
  return 'Not found'
}

export default defineEventHandler(async (event) => {
  const pathname = decodeURIComponent(getRequestURL(event).pathname)

  if (pathname.startsWith('/_nuxt/')) return

  const relativePath = pathname.replace(/^\/+/, '')
  let filePath = path.resolve(siteRoot, relativePath)

  if (filePath !== siteRoot && !filePath.startsWith(`${siteRoot}${path.sep}`)) {
    return notFound(event)
  }

  try {
    if ((await stat(filePath)).isDirectory()) {
      filePath = path.join(filePath, 'index.html')
    }
  } catch {
    filePath = path.join(filePath, 'index.html')
  }

  if (!existsSync(filePath)) return notFound(event)

  const extension = path.extname(filePath).toLowerCase()
  const contentType = contentTypes[extension] || 'application/octet-stream'
  setResponseHeader(
    event,
    'content-type',
    textTypes.has(extension) ? `${contentType}; charset=utf-8` : contentType,
  )

  return sendStream(event, createReadStream(filePath))
})
