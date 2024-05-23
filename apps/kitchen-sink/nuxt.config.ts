// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  telemetry: false,
  devtools: {
    enabled: true,
  },
  extends: ['@test-monorepo/cube'],
  modules: [
    '@nuxtjs/tailwindcss',
  ],
})