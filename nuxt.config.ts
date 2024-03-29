// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    '@vueuse/nuxt',
    'nuxt-icon'
  ],
  css: ["@/assets/scss/main.scss"],
  build: {
    transpile: ["vuetify"],
  },
  app: {
    buildAssetsDir: '/public/',
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: "/public/ressource/favicon/favicon-32x32.png" }]

    },
  },
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  }
});
