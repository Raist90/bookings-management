// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  googleFonts: {
    families: {
      Montserrat: [400, 700],
    },
  },
  imports: {
    dirs: ["assets", "constants", "mocks", "types"],
  },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
  ],
  tailwindcss: {
    cssPath: ["/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
  },
})
