<script setup lang="ts">
import { site } from '~/data/site'

useSeoMeta({
  title: 'Practice Areas',
  description:
    'Criminal law practice areas at Meerut District Court — bail and anticipatory bail, criminal trials, FIR quashing, cheque bounce under Section 138, cyber crime and matrimonial criminal matters.',
})

const notes = [
  'FIR, arrest ya notice — turant legal salah lein',
  'Har hearing ke baad case status ka update',
  'Documents ki checklist consultation me milti hai',
]
</script>

<template>
  <main>
    <PageHero
      eyebrow="Practice areas"
      title="Criminal law matters handled."
      intro="Meerut District & Sessions Court me criminal side ki practice. Neeche diye gaye areas me representation aur drafting — har matter ke facts alag hote hain, isliye pehle consultation."
    />

    <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <PracticeCard v-for="area in site.practiceAreas" :key="area.title" v-bind="area" />
      </div>

      <div class="mt-14 grid gap-8 rounded-sm border border-ink/10 bg-white/60 p-6 sm:p-8 lg:grid-cols-2">
        <div>
          <p class="eyebrow">Before you call</p>
          <h2 class="display mt-3 text-2xl text-ink">Ye cheezein ready rakhein</h2>
          <p class="mt-3 text-sm leading-relaxed text-slate-ink">
            Pehli baat-cheet jitni clear hogi, salah utni jaldi milegi. Ho sake to ye documents
            paas rakhein:
          </p>
        </div>
        <ul class="space-y-3 text-sm leading-relaxed text-ink">
          <li v-for="n in notes" :key="n" class="flex gap-3">
            <span class="mt-1.5 size-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
            {{ n }}
          </li>
          <li class="flex gap-3">
            <span class="mt-1.5 size-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
            FIR copy, court notices, summons ya previous orders (photo/PDF)
          </li>
          <li class="flex gap-3">
            <span class="mt-1.5 size-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
            Aadhaar ya koi ID, aur relevant agreements / cheques / messages
          </li>
        </ul>
      </div>

      <p class="mt-8 max-w-3xl text-xs leading-relaxed text-slate-ink/80">
        Note: Is page ki jaankari general information ke liye hai. Koi bhi matter facts aur documents
        dekhne ke baad hi assess kiya ja sakta hai.
      </p>
    </section>

    <CtaBand />
  </main>
</template>
