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

const findCssInPath = (path) => {
  if (path.startsWith('/')) {
    return absoluteCss(path);
  } else {
    return relativeCss(path);
  }
}

const relativeCssFile = (relativePath) => {
  return path.resolve(__dirname, relativePath);
}

const globalCssFile = relativeCssFile('./src/css/global.css');


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
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       postcss: {
  //         additionalData: `@use "${globalCssFile}" as *\n`
  //       }
  //     }
  //   }
  // }
  
})