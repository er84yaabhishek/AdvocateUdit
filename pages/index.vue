<script setup lang="ts">
import { site } from '~/data/site'
import { MapPin, ArrowRight, ShieldCheck, Clock, Languages, Landmark } from '@lucide/vue'

useSeoMeta({
  title: 'Criminal Defence Lawyer in Meerut',
  description:
    'Advocate Udit Chaurasia practises criminal law at District & Sessions Court, Meerut — bail, anticipatory bail, criminal trials, FIR quashing, cheque bounce and cyber crime matters.',
})

const stats = [
  { icon: Landmark, label: 'Court', value: 'District & Sessions, Meerut' },
  { icon: Clock, label: 'Experience', value: site.experience },
  { icon: Languages, label: 'Languages', value: site.languages },
  { icon: ShieldCheck, label: 'Enrolment', value: site.enrolment },
]

const creds = [
  'Criminal defence practice before Magistrate and Sessions courts',
  'Bail and anticipatory bail applications on short notice',
  'Drafting and filing of criminal petitions, replies and applications',
  'Client briefing in plain Hindi so decisions stay informed',
]
</script>

<template>
  <main>
    <PageHero
      eyebrow="Advocate · Criminal Defence · Meerut"
      title="Criminal cases me clear, practical legal representation."
      intro="Main Udit Chaurasia hoon — Meerut District & Sessions Court me criminal side par practice. Bail se lekar trial tak, har stage par case ki position simple bhasha me samjhata hoon, taaki aap sahi waqt par sahi decision le sakein."
    >
      <div class="flex flex-wrap items-center gap-3">
        <NuxtLink
          to="/contact"
          class="inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-3.5 text-sm font-semibold text-cream transition hover:bg-ink-soft"
        >
          Consult kaise karein
          <ArrowRight :size="16" aria-hidden="true" />
        </NuxtLink>
        <NuxtLink
          to="/practice-areas"
          class="inline-flex items-center gap-2 rounded-sm border border-ink/20 px-5 py-3.5 text-sm font-semibold text-ink transition hover:border-ink/40 hover:bg-white/60"
        >
          Practice areas dekhein
        </NuxtLink>
      </div>
    </PageHero>

    <!-- Stats -->
    <section class="border-b border-ink/10 bg-white/50">
      <dl
        class="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-ink/10 px-4 sm:grid-cols-2 sm:divide-y-0 sm:px-6 lg:grid-cols-4 lg:divide-x"
      >
        <div
          v-for="s in stats"
          :key="s.label"
          class="px-0 py-6 sm:px-5 sm:first:pl-0 lg:px-6"
        >
          <dt class="flex items-center gap-2 text-[0.7rem] tracking-[0.14em] text-slate-ink uppercase">
            <component :is="s.icon" :size="14" :stroke-width="1.8" aria-hidden="true" />
            {{ s.label }}
          </dt>
          <dd class="mt-2 font-serif text-[1.05rem] font-semibold text-ink">{{ s.value }}</dd>
        </div>
      </dl>
    </section>

    <!-- About strip -->
    <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
      <div class="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p class="eyebrow">About the practice</p>
          <h2 class="display mt-4 text-3xl text-ink sm:text-4xl">
            Defence work jahan detail aur timing dono matter karte hain.
          </h2>
          <div class="prose-law mt-6">
            <p>
              Criminal matters me sirf law nahi, procedure aur record ka har chhota detail decide
              karta hai — summoning, evidence, witness statements, aur filing ki dates. Main har
              file ko isi tarah padhta hoon jaise woh trial me argue honi hai.
            </p>
            <p>
              Aapko har hearing ke baad batata hoon ki kya hua, aage kya hona hai, aur aapko kya
              karna hai. Koi jargon nahi — seedhi baat.
            </p>
          </div>

          <ul class="mt-8 space-y-3">
            <li v-for="c in creds" :key="c" class="flex gap-3 text-sm leading-relaxed text-ink">
              <span class="mt-1.5 size-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
              {{ c }}
            </li>
          </ul>

          <NuxtLink
            to="/about"
            class="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brass hover:text-ink"
          >
            Poora profile
            <ArrowRight :size="15" aria-hidden="true" />
          </NuxtLink>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <PracticeCard
            v-for="area in site.practiceAreas.slice(0, 4)"
            :key="area.title"
            v-bind="area"
          />
        </div>
      </div>
    </section>

    <section class="border-y border-ink/10 bg-sand/40">
      <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="eyebrow">Practice areas</p>
            <h2 class="display mt-3 text-2xl text-ink sm:text-3xl">Kaun se matters lete hain</h2>
          </div>
          <NuxtLink
            to="/practice-areas"
            class="inline-flex items-center gap-2 text-sm font-semibold text-brass hover:text-ink"
          >
            Sab dekhein
            <ArrowRight :size="15" aria-hidden="true" />
          </NuxtLink>
        </div>

        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <PracticeCard v-for="area in site.practiceAreas" :key="area.title" v-bind="area" />
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:py-24">
      <p class="eyebrow">Common questions</p>
      <h2 class="display mt-3 text-3xl text-ink sm:text-4xl">Aksar poochhi jaane wali baatein</h2>
      <div class="mt-8 divide-y divide-ink/10 border-y border-ink/10">
        <details v-for="faq in site.faqs" :key="faq.q" class="group py-5">
          <summary
            class="flex cursor-pointer list-none items-start justify-between gap-4 text-[0.98rem] font-semibold text-ink"
          >
            {{ faq.q }}
            <span
              class="mt-1 shrink-0 text-brass transition group-open:rotate-45"
              aria-hidden="true"
            >
              +
            </span>
          </summary>
          <p class="mt-3 pr-6 text-sm leading-relaxed text-slate-ink">{{ faq.a }}</p>
        </details>
      </div>
      <p class="mt-6 text-xs leading-relaxed text-slate-ink/80">
        Upar di gayi jaankari general hai, kisi bhi case ke facts par legal advice nahi. Apne matter
        ke liye consultation lein.
      </p>
    </section>

    <div class="relative isolate overflow-hidden">
      <CtaBand />
    </div>

    <!-- Local -->
    <section class="border-t border-ink/10 bg-white/50">
      <div class="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p class="eyebrow">Chamber</p>
            <h2 class="display mt-3 text-2xl text-ink">Meerut District Court</h2>
            <p class="mt-2 flex items-start gap-2 text-sm text-slate-ink">
              <MapPin :size="16" class="mt-0.5 shrink-0 text-brass" aria-hidden="true" />
              <span>{{ site.address.line1 }}, {{ site.address.line2 }}</span>
            </p>
          </div>
          <NuxtLink
            to="/contact"
            class="inline-flex shrink-0 items-center gap-2 rounded-sm border border-ink/20 px-5 py-3 text-sm font-semibold text-ink transition hover:border-ink/40"
          >
            Map aur timings
            <ArrowRight :size="15" aria-hidden="true" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>
