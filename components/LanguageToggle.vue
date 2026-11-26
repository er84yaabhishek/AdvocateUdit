<script setup lang="ts">
import { Languages } from '@lucide/vue'

const { locale, isHindi, setLocale, t } = useLocale()

const options = [
  { code: 'en' as const, label: 'EN' },
  { code: 'hi' as const, label: 'हिं' },
]
</script>

<template>
  <div
    class="inline-flex items-center gap-0.5 rounded-sm border border-ink/15 bg-white/60 p-0.5"
    role="group"
    :aria-label="t.header.langLabel"
  >
    <Languages :size="14" class="ml-1.5 mr-0.5 text-slate-ink" aria-hidden="true" />
    <button
      v-for="o in options"
      :key="o.code"
      type="button"
      class="rounded-xs px-2 py-1 text-xs font-semibold transition"
      :class="
        locale === o.code
          ? 'bg-ink text-cream'
          : 'text-slate-ink hover:bg-sand/70 hover:text-ink'
      "
      :aria-pressed="locale === o.code"
      :lang="o.code"
      @click="setLocale(o.code)"
    >
      {{ o.label }}
    </button>
  </div>
</template>
