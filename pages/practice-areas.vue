<script setup lang="ts">
const { t } = useLocale()

useSeoMeta({
  title: 'Practice Areas',
  description:
    'Criminal law practice areas at Meerut District Court — bail and anticipatory bail, criminal trials, FIR quashing, cheque bounce under Section 138, cyber crime and matrimonial criminal matters.',
})
</script>

<template>
  <main>
    <PageHero :eyebrow="t.practice.eyebrow" :title="t.practice.title" :intro="t.practice.intro" />

    <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <PracticeCard v-for="area in t.practiceAreas" :key="area.title" v-bind="area" />
      </div>

      <div
        class="mt-14 grid gap-8 rounded-sm border border-ink/10 bg-white/60 p-6 sm:p-8 lg:grid-cols-2"
      >
        <div>
          <p class="eyebrow">{{ t.practice.beforeEyebrow }}</p>
          <h2 class="display mt-3 text-2xl text-ink">{{ t.practice.beforeTitle }}</h2>
          <p class="mt-3 text-sm leading-relaxed text-slate-ink">
            {{ t.practice.beforeIntro }}
          </p>
        </div>
        <ul class="space-y-3 text-sm leading-relaxed text-ink">
          <li v-for="n in t.practice.notes" :key="n" class="flex gap-3">
            <span class="mt-1.5 size-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
            {{ n }}
          </li>
        </ul>
      </div>

      <p class="mt-8 max-w-3xl text-xs leading-relaxed text-slate-ink/80">
        {{ t.practice.disclaimer }}
      </p>
    </section>

    <CtaBand />
  </main>
</template>
