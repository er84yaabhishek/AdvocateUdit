<template>
  <div class="flex min-h-dvh flex-col">
    <SiteHeader />
    <main class="flex-1">
      <section class="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <p class="eyebrow">Error {{ error?.statusCode || 404 }}</p>
        <h1 class="display mt-4 text-3xl text-ink sm:text-4xl">
          {{ error?.statusCode === 404 ? t.error.notFoundTitle : t.error.genericTitle }}
        </h1>
        <p class="mt-4 text-sm leading-relaxed text-slate-ink">{{ t.error.body }}</p>
        <NuxtLink
          to="/"
          class="mt-8 inline-flex rounded-sm bg-ink px-5 py-3 text-sm font-semibold text-cream transition hover:bg-ink-soft"
        >
          {{ t.error.home }}
        </NuxtLink>
      </section>
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()

const { t } = useLocale()

useSeoMeta({ title: t.value.error.metaTitle })
</script>
