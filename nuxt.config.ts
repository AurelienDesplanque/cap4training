// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    '@vueuse/nuxt',
    'nuxt-icon'
  ],
  css: ["@/assets/scss/main.scss"],
  app: {
    buildAssetsDir: '/public/',
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: "/public/ressource/favicon/favicon-32x32.png" }]

    },
  },
  router: {
    options: {
      strict: true,
    },
  },



  postcss: {
    plugins: {
      autoprefixer: {},
    },
  }
});
