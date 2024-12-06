// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    'nuxt-particles',
    'vue3-carousel-nuxt',
    '@vue-final-modal/nuxt',
    '@nuxt/image'
  ]
})