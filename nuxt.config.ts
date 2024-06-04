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
  lucide: {
    namePrefix: "Icon",
  },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "nuxt-lucide-icons",
  ],
  tailwindcss: {
    cssPath: ["/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
  },
})
