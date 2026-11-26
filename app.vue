<script setup lang="ts">
import { site } from '~/data/site'

const config = useRuntimeConfig()
const route = useRoute()
const canonical = new URL(route.path, config.public.siteUrl).toString()

useHead({
  link: [{ rel: 'canonical', href: canonical }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Attorney',
        name: `${site.name}, Advocate`,
        description: `${site.tagline} at ${site.court}`,
        telephone: `+${site.phone}`,
        email: site.email,
        url: config.public.siteUrl,
        address: {
          '@type': 'PostalAddress',
          streetAddress: site.address.line1,
          addressLocality: 'Meerut',
          addressRegion: 'Uttar Pradesh',
          postalCode: '250001',
          addressCountry: 'IN',
        },
        areaServed: { '@type': 'City', name: 'Meerut' },
        knowsLanguage: ['hi', 'en'],
      }),
    },
  ],
})
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <SiteHeader />
    <div class="flex-1">
      <NuxtPage />
    </div>
    <SiteFooter />
  </div>
</template>
