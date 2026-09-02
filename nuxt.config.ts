export default defineNuxtConfig({
  compatibilityDate: '2026-09-02',
  devtools: { enabled: false },
  nitro: {
    compressPublicAssets: true,
  },
  typescript: {
    typeCheck: true,
  },
})
