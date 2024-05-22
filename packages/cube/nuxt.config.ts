// https://nuxt.com/docs/api/configuration/nuxt-config
const glob = require('glob');
const path = require('path');


const relativeCss = (relativePath) => {
  const d = path.resolve(__dirname, relativePath);
  return glob.sync(path.join(d, '**/*.css'));
}

const absoluteCss = (absolutePath) => {
  return glob.sync(path.join(absolutePath, '**/*.css'));
}

const findCss = (path) => {
  if (path.startsWith('/')) {
    return absoluteCss(path);
  } else {
    return relativeCss(path);
  }
}



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
  css: findCss('src/css/'),
  modules: ['@nuxtjs/tailwindcss'],
})