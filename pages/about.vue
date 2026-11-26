<script setup lang="ts">
import { site } from '~/data/site'

const { t } = useLocale()

useSeoMeta({
  title: 'About',
  description:
    'About Advocate Udit Chaurasia — criminal defence lawyer at District & Sessions Court, Meerut. Practice approach, areas of work and professional details.',
})

const details = computed(() => [
  { label: t.value.about.labels.court, value: site.court },
  { label: t.value.about.labels.city, value: site.city },
  { label: t.value.about.labels.enrolment, value: site.enrolment },
  { label: t.value.about.labels.languages, value: site.languages },
  { label: t.value.about.labels.consultation, value: site.consultation },
])
</script>

<template>
  <main>
    <PageHero :eyebrow="t.about.eyebrow" :title="t.about.title" :intro="t.about.intro" />

    <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <div class="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div class="prose-law">
          <h2 class="display text-2xl text-ink sm:text-3xl">{{ t.about.practiceHeading }}</h2>
          <p class="mt-4">{{ t.about.p1 }}</p>
          <p>{{ t.about.p2 }}</p>

          <h2 class="display mt-10 text-2xl text-ink sm:text-3xl">{{ t.about.approachHeading }}</h2>
          <div class="mt-5 grid gap-4 sm:grid-cols-1">
            <div
              v-for="(a, i) in t.about.approach"
              :key="a.title"
              class="rounded-sm border border-ink/10 bg-white/70 p-5"
            >
              <p class="font-serif text-lg font-semibold text-ink">
                <span class="mr-2 text-brass">0{{ i + 1 }}</span>{{ a.title }}
              </p>
              <p class="mt-1.5 text-sm leading-relaxed text-slate-ink">{{ a.desc }}</p>
            </div>
          </div>

          <h2 class="display mt-10 text-2xl text-ink sm:text-3xl">
            {{ t.about.backgroundHeading }}
          </h2>
          <p class="mt-4">{{ t.about.b1 }}</p>
          <p class="mt-4 text-xs text-slate-ink/80">{{ t.about.b2 }}</p>
        </div>

        <aside class="space-y-4">
          <div class="rounded-sm border border-ink/10 bg-white/70 p-6 shadow-card">
            <h2 class="eyebrow">{{ t.about.detailsHeading }}</h2>
            <dl class="mt-4 space-y-4 text-sm">
              <div v-for="d in details" :key="d.label">
                <dt class="text-[0.7rem] tracking-[0.12em] text-slate-ink uppercase">
                  {{ d.label }}
                </dt>
                <dd class="mt-1 font-medium text-ink">{{ d.value }}</dd>
              </div>
            </dl>
          </div>

          <div class="rounded-sm border border-brass/30 bg-sand/40 p-6">
            <p class="text-sm leading-relaxed text-ink">{{ t.about.boxText }}</p>
            <NuxtLink
              to="/contact"
              class="mt-4 inline-flex text-sm font-semibold text-brass hover:text-ink"
            >
              {{ t.about.boxLink }} →
            </NuxtLink>
          </div>
        </aside>
      </div>
    </section>

    <CtaBand />
  </main>
</template>
