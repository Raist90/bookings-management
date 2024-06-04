// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: {
    dirs: ["constants", "mocks", "types"],
  },
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss"],
})
