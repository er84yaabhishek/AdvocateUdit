import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  css: [
    '@fontsource-variable/inter',
    '@fontsource-variable/fraunces',
    '~/assets/css/main.css',
  ],

  runtimeConfig: {
    public: {
      // GitHub Pages URL. Workflow me override hota hai.
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.github.io/advocate/',
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    // GitHub Pages subfolder support. Workflow isme value set karta hai.
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      htmlAttrs: { lang: 'en' },
      titleTemplate: '%s · Udit Chaurasia, Advocate',
      meta: [
        {
          name: 'description',
          content:
            'Udit Chaurasia, Advocate — criminal defence lawyer at District & Sessions Court, Meerut. Bail, criminal trials, FIR quashing, cheque bounce and cyber crime matters.',
        },
        { name: 'theme-color', content: '#0f1a26' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Udit Chaurasia, Advocate' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },

  nitro: {
    prerender: {
      routes: ['/', '/about', '/practice-areas', '/contact'],
    },
  },

  typescript: {
    strict: true,
  },
})
