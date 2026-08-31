import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const origin = 'https://teruicare.com';
const assetHosts = new Set(['teruicare.com']);
const root = path.resolve(import.meta.dirname, '..', 'site');
const sitemaps = ['page-sitemap.xml', 'product-sitemap.xml', 'post-sitemap.xml'];
const visited = new Set();
const pageUrls = new Set();
const pause = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

async function request(url) {
  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      return await fetch(url, {
        headers: { 'user-agent': 'Mozilla/5.0 Local mirror' },
        signal: AbortSignal.timeout(20_000),
      });
    }
    catch (error) {
      if (attempt === 2) console.warn('Network error', url, error.cause?.code || error.message);
      else await pause(600 * (attempt + 1));
    }
  }
  return null;
}

function outputPath(url, page = false) {
  const parsed = new URL(url, origin);
  const clean = decodeURIComponent(parsed.pathname).replace(/^\/+/, '');
  if (page) return path.join(root, clean || '.', 'index.html');
  // WordPress uses query strings only for cache versions. The local server
  // resolves them to the same pathname, so preserve the filename itself.
  return path.join(root, clean || 'index.html');
}

async function save(file, content) {
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, content);
}

function absolute(value, base) {
  try {
    const url = new URL(value.replaceAll('&amp;', '&'), base);
    return url.protocol === 'https:' && assetHosts.has(url.hostname) ? url.href : null;
  } catch { return null; }
}

function references(html, base) {
  const found = new Set();
  const attributes = /(?:src|href|data-src|data-lazy-src|data-orig-src|data-bg|data-large_image)\s*=\s*["']([^"']+)["']/gi;
  const srcsets = /(?:srcset|data-srcset|data-lazy-srcset)\s*=\s*["']([^"']+)["']/gi;
  const cssUrls = /url\(\s*["']?([^"')]+)["']?\s*\)/gi;
  const add = value => {
    const url = absolute(value, base);
    if (!url) return;
    const isAsset = /\.(?:css|js|mjs|map|png|jpe?g|webp|gif|svg|ico|woff2?|ttf|eot|mp4|webm|pdf)(?:$|\?)/i.test(url) || url.includes('/wp-content/');
    if (isAsset && !url.includes('/wp-json/') && !url.includes('/wp-admin/')) found.add(url);
  };

  for (const expression of [attributes, cssUrls]) {
    let match;
    while ((match = expression.exec(html))) {
      add(match[1]);
    }
  }

  // Responsive and lazy-loaded images commonly omit `src` until the page
  // script runs. Download every advertised candidate so local rendering can
  // select the same size the original browser would have used.
  let match;
  while ((match = srcsets.exec(html))) {
    for (const candidate of match[1].split(',')) add(candidate.trim().split(/\s+/)[0]);
  }
  return found;
}

function localize(text) {
  return text
    .replaceAll('https://teruicare.com/', '/')
    .replaceAll('http://teruicare.com/', '/')
    .replaceAll('//teruicare.com/', '/')
    // The source's older shop template points at a removed third-party logo.
    // Use the current Terui asset, which is present in this local mirror.
    .replaceAll('https://saddlebrown-chinchilla-978528.hostingersite.com/wp-content/uploads/2023/12/logo-avada-vegan-store.png', '/wp-content/uploads/2025/11/68922e37fb646dfb29e9689f_Terui_20logo_20black-p-500.webp')
    .replaceAll('/wp-content/uploads/2023/12/logo-avada-vegan-store.png', '/wp-content/uploads/2025/11/68922e37fb646dfb29e9689f_Terui_20logo_20black-p-500.webp')
    .replaceAll('https:\\/\\/teruicare.com\\/', '\\/');
}

async function fetchResource(url) {
  if (visited.has(url)) return;
  visited.add(url);
  const response = await request(url);
  if (!response || !response.ok) {
    console.warn('Skipped', response?.status || 'network', url);
    return;
  }
  const type = response.headers.get('content-type') || '';
  let body = Buffer.from(await response.arrayBuffer());
  if (/text\/css|javascript|json|svg|text\//.test(type)) {
    const text = localize(body.toString('utf8'));
    body = Buffer.from(text);
    if (/text\/css/.test(type)) {
      await Promise.all([...references(text, url)].map(fetchResource));
    }
  }
  await save(outputPath(url), body);
}

async function fetchPage(url) {
  const response = await request(url);
  if (!response) {
    console.warn('Skipped page network', url);
    return;
  }
  const source = await response.text();
  if (!response.ok && !source.includes('<html')) {
    console.warn('Skipped page', response.status, url);
    return;
  }
  if (!response.ok) console.warn('Saved public error page', response.status, url);
  const html = localize(source).replace(
    '</head>',
    `  <link rel="stylesheet" href="/local-commerce.css">
  <script defer src="/local-commerce.js"></script>
</head>`
  );
  await save(outputPath(url, true), html);
  await Promise.all([...references(source, url)].map(fetchResource));
  console.log('Saved page', new URL(url).pathname);
}

for (const sitemap of sitemaps) {
  const xml = await (await request(`${origin}/${sitemap}`)).text();
  for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) pageUrls.add(match[1]);
}
pageUrls.add(`${origin}/`);

for (const url of pageUrls) {
  await fetchPage(url);
  await pause(350);
}

console.log(`Mirror complete: ${pageUrls.size} pages, ${visited.size} local resources.`);
