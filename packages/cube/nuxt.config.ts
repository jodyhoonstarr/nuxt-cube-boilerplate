// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  telemetry: false,
  devtools: { enabled: false },
  postcss: {
    plugins: {
      "postcss-import": {},
      "tailwindcss": {},
    },
  },
  modules: ['@nuxtjs/tailwindcss'],
  alias: { '~cube': resolve('./') },
  components: [
    { path: '~cube/components', prefix: 'Cube' }
  ]
})