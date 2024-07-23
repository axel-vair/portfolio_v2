// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  app: {
      head: {
          charset: 'utf-8',
          viewport: 'width=device-width, initial-scale=1',
          htmlAttrs: {
              lang: 'fr'
          },
          link: [
              {
                  rel: "icon",
                  type: "image/x-icon",
                  href: "/favicon.ico"
              }
          ],
          meta: [
              {name: 'robots', content: 'index, follow'},
              {property: 'og:image', content: 'public/ogimage.svg'},


          ]
      }
  },

  devtools: {enabled: true},
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "nuxt-icon"],

  tailwindcss: {
      cssPath: ['~/assets/css/tailwind.css', {injectPosition: "first"}],
      configPath: 'tailwind.config',
      exposeConfig: {
          level: 2
      },
      config: {},
      viewer: true,
  },

  compatibilityDate: '2024-07-23',
})
