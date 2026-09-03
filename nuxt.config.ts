export default defineNuxtConfig({
  compatibilityDate: '2026-09-02',
  devtools: { enabled: false },
  ssr: true,
  typescript: {
    typeCheck: false,
  },
  nitro: {
    compressPublicAssets: true,
  },
  vite: {
    vue: {
      template: {
        // The site is a WordPress/Avada export whose markup uses root-relative
        // asset URLs (/wp-content/... , /terui_logo.svg). Keep them as plain
        // string URLs (served from public/ or nitro public assets) instead of
        // letting the compiler try to import them as build assets.
        transformAssetUrls: false,
      },
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en-GB' },
    },
  },
})
