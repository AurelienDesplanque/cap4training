// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    '@vueuse/nuxt',
    'nuxt-icon'
  ],
  css: ["vuetify/lib/styles/main.sass"

  ],
  build: {
    transpile: ["vuetify"],
  },
  app: {
    buildAssetsDir: '/public/',
    head: {
      htmlAttrs: { dir: 'rtl', lang: 'fa' },
      link: [{ rel: 'icon', type: 'image/png', href: "/public/ressource/favicon/favicon-32x32.png" }]
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
