// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    {
      path: "@/components",
      pathPrefix: false,
    },
  ],
  devtools: { enabled: true },
  googleFonts: {
    families: {
      Montserrat: [400, 700],
    },
  },
  headlessui: {
    prefix: "Headless",
  },
  imports: {
    dirs: ["assets", "constants", "mocks", "schemas", "types"],
    presets: [
      {
        from: "zod",
        imports: ["z"],
      },
      {
        from: "clsx",
        imports: ["clsx"],
      },
    ],
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
    "nuxt-headlessui",
  ],
  runtimeConfig: {
    APP_URL: process.env.APP_URL,
  },
  tailwindcss: {
    cssPath: ["assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
  },
})
