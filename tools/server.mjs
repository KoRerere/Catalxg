import { createReadStream, existsSync } from 'node:fs';
import { stat } from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..', 'site');
const types = { '.css': 'text/css', '.js': 'text/javascript', '.html': 'text/html', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.gif': 'image/gif', '.mp4': 'video/mp4' };
const server = http.createServer(async (request, response) => {
  const requestPath = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  const safePath = path.normalize(requestPath).replace(/^\.\.(?:\/|\\|$)/, '');
  let file = path.join(root, safePath);
  try {
    if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html');
  } catch {
    file = path.join(root, safePath, 'index.html');
  }
  if (!existsSync(file)) {
    response.writeHead(404, { 'content-type': 'text/plain' });
    return response.end('Not found');
  }
  response.writeHead(200, { 'content-type': `${types[path.extname(file)] || 'application/octet-stream'}; charset=utf-8` });
  createReadStream(file).pipe(response);
});
server.listen(process.env.PORT || 4175, () => console.log(`http://localhost:${process.env.PORT || 4175}`));
