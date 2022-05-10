import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    typescript: {
        shim: false
    },
    buildModules: ['@nuxtjs/tailwindcss'],
    build: {
        transpile: ['@headlessui/vue']
    }
})
