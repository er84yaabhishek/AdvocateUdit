<script setup lang="ts">
import { site, waLink } from '~/data/site'
import { Phone, MessageCircle } from '@lucide/vue'
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
    <div
      class="relative overflow-hidden rounded-sm border border-ink/10 bg-ink px-6 py-12 text-cream sm:px-12 lg:px-14 lg:py-16"
    >
      <div
        class="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-brass/20 blur-3xl"
        aria-hidden="true"
      />
      <div class="relative max-w-2xl">
        <p class="eyebrow text-brass-soft">Consultation</p>
        <h2 class="display mt-3 text-3xl sm:text-4xl">
          Criminal matter me ek sahi salah, waqt se pehle.
        </h2>
        <p class="mt-4 text-[0.95rem] leading-relaxed text-cream/70 sm:text-base">
          FIR, arrest, notice ya court summons — har din important hota hai. Phone ya WhatsApp par
          situation bata kar pehli salah le sakte hain, aur documents ke saath chamber me milne ka
          time fix kar sakte hain.
        </p>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            :href="`tel:+${site.phone}`"
            class="inline-flex items-center justify-center gap-2 rounded-sm bg-cream px-5 py-3.5 text-sm font-semibold text-ink transition hover:bg-white"
          >
            <Phone :size="17" :stroke-width="1.8" aria-hidden="true" />
            {{ site.phoneDisplay }}
          </a>
          <a
            :href="waLink"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center gap-2 rounded-sm border border-cream/25 px-5 py-3.5 text-sm font-semibold text-cream transition hover:bg-cream/10"
          >
            <MessageCircle :size="17" :stroke-width="1.8" aria-hidden="true" />
            WhatsApp
          </a>
        </div>

        <p class="mt-6 text-xs leading-relaxed text-cream/45">
          {{ site.consultation }} · {{ site.address.line1 }}, {{ site.address.line2 }}
        </p>
      </div>
    </div>
  </section>
</template>
