// Copies the WordPress/Avada static assets from site/ into the Nuxt public/ dir
// (excluding the per-page index.html files, which are now real Nuxt route pages).
// Runs automatically before build/start so the asset tree is always in sync.
import { cpSync, rmSync, mkdirSync, readdirSync, statSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(here, '..')
const src = path.join(root, 'site')
const dest = path.join(root, 'public')

rmSync(dest, { recursive: true, force: true })
mkdirSync(dest, { recursive: true })

function walk(dir, rel = '') {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    const target = path.join(dest, rel, entry.name)
    if (entry.isDirectory()) {
      mkdirSync(target, { recursive: true })
      walk(full, path.join(rel, entry.name))
    } else if (entry.name !== 'index.html') {
      cpSync(full, target)
    }
  }
}
walk(src)

console.log('[sync:assets] copied site/ -> public/ (excluding page index.html files)')
