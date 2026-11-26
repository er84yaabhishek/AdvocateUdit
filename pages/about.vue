<script setup lang="ts">
import { site } from '~/data/site'

useSeoMeta({
  title: 'About',
  description:
    'About Advocate Udit Chaurasia — criminal defence lawyer at District & Sessions Court, Meerut. Practice approach, areas of work and professional details.',
})

const approach = [
  {
    title: 'Pehle facts, phir opinion',
    desc: 'FIR copy, notices, statements aur previous orders padhne ke baad hi rukh saaf karta hoon — bina record dekhe koi bada wada nahi.',
  },
  {
    title: 'Har step par update',
    desc: 'Hearing ki date, kya hua, aage kya hoga — sab simple Hindi me. Aap andhere me nahi rehte.',
  },
  {
    title: 'Realistic expectations',
    desc: 'Bail milne ki sambhavna, timelines aur risk — sab saaf batata hoon. Guarantee ka dava kisi bhi case me nahi karta.',
  },
]
</script>

<template>
  <main>
    <PageHero
      eyebrow="Profile"
      title="Udit Chaurasia, Advocate"
      intro="Criminal defence practice at the District & Sessions Court, Meerut. Bail, trials aur related criminal matters me representation."
    />

    <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <div class="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div class="prose-law">
          <h2 class="display text-2xl text-ink sm:text-3xl">Practice</h2>
          <p class="mt-4">
            Meri practice ka focus criminal law hai — Magistrate aur Sessions courts me trials, bail
            aur anticipatory bail applications, FIR quashing petitions, cheque bounce matters aur
            cyber crime cases.
          </p>
          <p>
            Criminal proceedings ka stress client aur uske parivaar par sabse zyada hota hai. Isliye
            main har case me do cheezein pehle clear karta hoon: aaj case kis stage par hai, aur
            agle 30 din me kya hona chahiye. Uske baad drafting, filing aur arguments — record ke
            hisaab se.
          </p>

          <h2 class="display mt-10 text-2xl text-ink sm:text-3xl">Approach</h2>
          <div class="mt-5 grid gap-4 sm:grid-cols-1">
            <div
              v-for="(a, i) in approach"
              :key="a.title"
              class="rounded-sm border border-ink/10 bg-white/70 p-5"
            >
              <p class="font-serif text-lg font-semibold text-ink">
                <span class="mr-2 text-brass">0{{ i + 1 }}</span>{{ a.title }}
              </p>
              <p class="mt-1.5 text-sm leading-relaxed text-slate-ink">{{ a.desc }}</p>
            </div>
          </div>

          <h2 class="display mt-10 text-2xl text-ink sm:text-3xl">Background</h2>
          <p class="mt-4">
            {{ site.experience }} ke criminal practice experience ke saath, Meerut District Court me
            regular appearances. Client briefings Hindi aur English dono me.
          </p>
          <p class="mt-4 text-xs text-slate-ink/80">
            Educational details, law college aur enrolment timeline yahan add karein — apni asli
            jaankari ke saath.
          </p>
        </div>

        <aside class="space-y-4">
          <div class="rounded-sm border border-ink/10 bg-white/70 p-6 shadow-card">
            <h2 class="eyebrow">Details</h2>
            <dl class="mt-4 space-y-4 text-sm">
              <div>
                <dt class="text-[0.7rem] tracking-[0.12em] text-slate-ink uppercase">Court</dt>
                <dd class="mt-1 font-medium text-ink">{{ site.court }}</dd>
              </div>
              <div>
                <dt class="text-[0.7rem] tracking-[0.12em] text-slate-ink uppercase">City</dt>
                <dd class="mt-1 font-medium text-ink">{{ site.city }}</dd>
              </div>
              <div>
                <dt class="text-[0.7rem] tracking-[0.12em] text-slate-ink uppercase">
                  Bar enrolment
                </dt>
                <dd class="mt-1 font-medium text-ink">{{ site.enrolment }}</dd>
              </div>
              <div>
                <dt class="text-[0.7rem] tracking-[0.12em] text-slate-ink uppercase">Languages</dt>
                <dd class="mt-1 font-medium text-ink">{{ site.languages }}</dd>
              </div>
              <div>
                <dt class="text-[0.7rem] tracking-[0.12em] text-slate-ink uppercase">
                  Consultation
                </dt>
                <dd class="mt-1 font-medium text-ink">{{ site.consultation }}</dd>
              </div>
            </dl>
          </div>

          <div class="rounded-sm border border-brass/30 bg-sand/40 p-6">
            <p class="text-sm leading-relaxed text-ink">
              Kisi case ke facts par Legal advice ke liye consultation book karein — phone, WhatsApp
              ya chamber visit.
            </p>
            <NuxtLink
              to="/contact"
              class="mt-4 inline-flex text-sm font-semibold text-brass hover:text-ink"
            >
              Contact details →
            </NuxtLink>
          </div>
        </aside>
      </div>
    </section>

    <CtaBand />
  </main>
</template>
