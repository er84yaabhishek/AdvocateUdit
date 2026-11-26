<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    intro?: string
  }>(),
  { eyebrow: undefined, intro: undefined },
)
</script>

<template>
  <section class="relative overflow-hidden border-b border-ink/10 bg-cream">
    <div
      class="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-linear-to-l from-sand/80 to-transparent lg:block"
      aria-hidden="true"
    />
    <div class="relative mx-auto max-w-6xl px-4 pt-16 pb-14 sm:px-6 lg:pt-24 lg:pb-20">
      <p v-if="eyebrow" class="eyebrow rise">{{ eyebrow }}</p>
      <h1
        class="display rise mt-4 max-w-3xl text-[2.1rem] text-ink sm:text-5xl lg:text-[3.4rem]"
        style="animation-delay: 60ms"
      >
        {{ title }}
      </h1>
      <p
        v-if="intro"
        class="rise mt-5 max-w-2xl text-[0.98rem] leading-relaxed text-slate-ink sm:text-lg"
        style="animation-delay: 120ms"
      >
        {{ intro }}
      </p>
      <div v-if="$slots.default" class="rise mt-8" style="animation-delay: 180ms">
        <slot />
      </div>
    </div>
  </section>
</template>
