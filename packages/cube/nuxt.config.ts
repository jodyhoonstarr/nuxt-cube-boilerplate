// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  telemetry: false,
  devtools: { enabled: false },
  postcss: {
    plugins: {
      "postcss-import-ext-glob": {},
      "postcss-import": {},
      "tailwindcss": {},
    },
  },
  modules: ['@nuxtjs/tailwindcss'],
})