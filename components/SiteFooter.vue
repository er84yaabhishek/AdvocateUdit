<script setup lang="ts">
import { site, waLink } from '~/data/site'
import { MapPin, Phone, Mail, Clock, Scale, ArrowUpRight } from '@lucide/vue'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="mt-24 border-t border-ink/10 bg-ink text-cream/80">
    <div class="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
      <div>
        <div class="flex items-center gap-3">
          <span class="grid size-10 place-items-center rounded-sm bg-cream/10 text-cream">
            <Scale :size="20" :stroke-width="1.6" aria-hidden="true" />
          </span>
          <span class="font-serif text-lg text-cream">{{ site.name }}</span>
        </div>
        <p class="mt-4 max-w-sm text-sm leading-relaxed text-cream/65">
          {{ site.tagline }} — {{ site.court }}. Criminal defence, bail aur trial matters.
        </p>
        <p class="mt-4 text-xs leading-relaxed text-cream/45">
          Bar Council enrolment: {{ site.enrolment }}
        </p>
      </div>

      <div>
        <h2 class="text-xs font-semibold tracking-[0.16em] text-cream/50 uppercase">Pages</h2>
        <ul class="mt-4 space-y-2.5 text-sm">
          <li><NuxtLink to="/" class="hover:text-cream">Home</NuxtLink></li>
          <li><NuxtLink to="/about" class="hover:text-cream">About</NuxtLink></li>
          <li>
            <NuxtLink to="/practice-areas" class="hover:text-cream">Practice Areas</NuxtLink>
          </li>
          <li><NuxtLink to="/contact" class="hover:text-cream">Contact</NuxtLink></li>
        </ul>
      </div>

      <div>
        <h2 class="text-xs font-semibold tracking-[0.16em] text-cream/50 uppercase">Contact</h2>
        <ul class="mt-4 space-y-3 text-sm">
          <li class="flex gap-2.5">
            <Phone :size="16" class="mt-0.5 shrink-0 text-brass-soft" aria-hidden="true" />
            <a :href="`tel:+${site.phone}`" class="hover:text-cream">{{ site.phoneDisplay }}</a>
          </li>
          <li class="flex gap-2.5">
            <Mail :size="16" class="mt-0.5 shrink-0 text-brass-soft" aria-hidden="true" />
            <a :href="`mailto:${site.email}`" class="break-all hover:text-cream">{{
              site.email
            }}</a>
          </li>
          <li class="flex gap-2.5">
            <MapPin :size="16" class="mt-0.5 shrink-0 text-brass-soft" aria-hidden="true" />
            <span>{{ site.address.line1 }}, {{ site.address.line2 }}</span>
          </li>
          <li class="flex gap-2.5">
            <Clock :size="16" class="mt-0.5 shrink-0 text-brass-soft" aria-hidden="true" />
            <span>{{ site.consultation }}</span>
          </li>
          <li>
            <a
              :href="waLink"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-1 text-brass-soft hover:text-cream"
            >
              WhatsApp <ArrowUpRight :size="14" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-cream/10">
      <div
        class="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-cream/45 sm:px-6 md:flex-row md:items-center md:justify-between"
      >
        <p>© {{ year }} {{ site.name }}, Advocate. All rights reserved.</p>
        <p>
          This website is for informational purposes only and does not constitute legal advice or
          solicitation.
        </p>
      </div>
    </div>
  </footer>
</template>
