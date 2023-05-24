// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
    css: [
        '~/assets/scss/global.scss',
    ],
    vite: {
        css: {
          preprocessorOptions: {
            scss: {
              additionalData: '@use "@/assets/scss/_colors.scss" as *;'
            }
          }
        }
    },
})
