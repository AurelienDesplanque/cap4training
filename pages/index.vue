<template>
  <html :lang="locale">
    <head>
      <title>Cap4 Learning</title>

    </head>
    <body>

      <v-container>
        <v-list>
          <v-list-item class="mb-2" v-for="(item, key) in items" :key="key">
            <NuxtLink :to="item.to">
              {{ item.title }}
            </NuxtLink>
          </v-list-item>
        </v-list>
      </v-container>
    </body>
  </html>
</template>

<script setup lang="ts">

const locale = process.client ? navigator.language : '';

const items = ref([
  {
    title: "Liste des formations",
    to: "/blog"
  },
]);

useHead({
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],
});

</script>

<style scoped>
/* Styles CSS du composant */
</style>
