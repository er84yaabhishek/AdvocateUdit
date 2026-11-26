<script setup lang="ts">
import { site, waLink } from '~/data/site'
import { Phone, Menu, X, Scale } from '@lucide/vue'

const open = ref(false)
const route = useRoute()

const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Practice Areas', to: '/practice-areas' },
  { label: 'Contact', to: '/contact' },
]

watch(() => route.fullPath, () => (open.value = false))
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-ink/10 bg-cream/90 backdrop-blur">
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20">
      <NuxtLink to="/" class="flex items-center gap-3" aria-label="Home">
        <span
          class="grid size-10 place-items-center rounded-sm bg-ink text-cream lg:size-11"
          aria-hidden="true"
        >
          <Scale :size="20" :stroke-width="1.6" />
        </span>
        <span class="leading-tight">
          <span class="block font-serif text-[1.05rem] font-semibold tracking-tight lg:text-lg">
            {{ site.name }}
          </span>
          <span class="block text-[0.68rem] tracking-[0.16em] text-slate-ink uppercase">
            Advocate · Meerut
          </span>
        </span>
      </NuxtLink>

      <nav class="hidden items-center gap-1 md:flex" aria-label="Main">
        <NuxtLink
          v-for="item in nav"
          :key="item.to"
          :to="item.to"
          class="rounded-sm px-3 py-2 text-sm font-medium text-slate-ink transition hover:bg-sand/70 hover:text-ink"
          active-class="text-ink"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-2">
        <a
          :href="`tel:+${site.phone}`"
          class="hidden items-center gap-2 rounded-sm bg-ink px-4 py-2.5 text-sm font-semibold text-cream transition hover:bg-ink-soft sm:inline-flex"
        >
          <Phone :size="16" :stroke-width="1.8" aria-hidden="true" />
          Call
        </a>
        <button
          type="button"
          class="grid size-10 place-items-center rounded-sm border border-ink/15 text-ink md:hidden"
          :aria-expanded="open"
          aria-controls="mobile-nav"
          :aria-label="open ? 'Close menu' : 'Open menu'"
          @click="open = !open"
        >
          <X v-if="open" :size="20" aria-hidden="true" />
          <Menu v-else :size="20" aria-hidden="true" />
        </button>
      </div>
    </div>

    <div v-show="open" id="mobile-nav" class="border-t border-ink/10 bg-cream md:hidden">
      <nav class="mx-auto grid max-w-6xl gap-1 px-4 py-3" aria-label="Mobile">
        <NuxtLink
          v-for="item in nav"
          :key="item.to"
          :to="item.to"
          class="rounded-sm px-3 py-3 text-[0.95rem] font-medium text-slate-ink"
          active-class="bg-sand/70 text-ink"
        >
          {{ item.label }}
        </NuxtLink>
        <a
          :href="waLink"
          target="_blank"
          rel="noopener"
          class="mt-1 rounded-sm border border-brass/40 px-3 py-3 text-center text-[0.95rem] font-semibold text-brass"
        >
          WhatsApp par message karein
        </a>
      </nav>
    </div>
  </header>
</template>
