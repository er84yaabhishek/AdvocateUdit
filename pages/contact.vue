<script setup lang="ts">
import { site, waLink } from '~/data/site'
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowUpRight } from '@lucide/vue'

const { t } = useLocale()

useSeoMeta({
  title: 'Contact',
  description:
    'Contact Advocate Udit Chaurasia, criminal lawyer at District & Sessions Court, Meerut. Phone, WhatsApp, email and chamber address for consultation.',
})

const mapSrc = computed(
  () => `https://www.google.com/maps?q=${encodeURIComponent(site.address.mapQuery)}&output=embed`,
)

const rows = computed(() => [
  {
    icon: Phone,
    label: t.value.contact.labels.phone,
    value: site.phoneDisplay,
    href: `tel:+${site.phone}`,
  },
  { icon: Mail, label: t.value.contact.labels.email, value: site.email, href: `mailto:${site.email}` },
  {
    icon: MessageCircle,
    label: t.value.contact.labels.whatsapp,
    value: t.value.contact.whatsappValue,
    href: waLink,
    external: true,
  },
])
</script>

<template>
  <main>
    <PageHero
      :eyebrow="t.contact.eyebrow"
      :title="t.contact.title"
      :intro="t.contact.intro"
    />

    <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <!-- Details -->
        <div>
          <div class="rounded-sm border border-ink/10 bg-white/70 p-6 shadow-card sm:p-8">
            <h2 class="eyebrow">{{ t.contact.directHeading }}</h2>
            <ul class="mt-5 divide-y divide-ink/10">
              <li v-for="r in rows" :key="r.label">
                <a
                  :href="r.href"
                  :target="r.external ? '_blank' : undefined"
                  :rel="r.external ? 'noopener' : undefined"
                  class="group flex items-center gap-4 py-4"
                >
                  <span
                    class="grid size-10 shrink-0 place-items-center rounded-sm bg-sand text-ink transition group-hover:bg-brass/15 group-hover:text-brass"
                    aria-hidden="true"
                  >
                    <component :is="r.icon" :size="18" :stroke-width="1.7" />
                  </span>
                  <span class="min-w-0">
                    <span class="block text-[0.68rem] tracking-[0.14em] text-slate-ink uppercase">
                      {{ r.label }}
                    </span>
                    <span class="block truncate font-medium text-ink">{{ r.value }}</span>
                  </span>
                  <ArrowUpRight
                    :size="16"
                    class="ml-auto shrink-0 text-slate-ink/40 transition group-hover:text-brass"
                    aria-hidden="true"
                  />
                </a>
              </li>
            </ul>

            <div class="mt-6 space-y-4 border-t border-ink/10 pt-6">
              <div class="flex gap-3">
                <MapPin :size="17" class="mt-0.5 shrink-0 text-brass" aria-hidden="true" />
                <div>
                  <p class="text-[0.68rem] tracking-[0.14em] text-slate-ink uppercase">
                    {{ t.contact.chamberLabel }}
                  </p>
                  <p class="mt-1 text-sm leading-relaxed text-ink">
                    {{ site.address.line1 }}<br />{{ site.address.line2 }}
                  </p>
                </div>
              </div>
              <div class="flex gap-3">
                <Clock :size="17" class="mt-0.5 shrink-0 text-brass" aria-hidden="true" />
                <div>
                  <p class="text-[0.68rem] tracking-[0.14em] text-slate-ink uppercase">
                    {{ t.contact.timingsLabel }}
                  </p>
                  <p class="mt-1 text-sm text-ink">{{ site.consultation }}</p>
                  <p class="mt-1 text-xs text-slate-ink">{{ t.contact.timingsNote }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-4 rounded-sm border border-brass/30 bg-sand/40 p-5">
            <p class="text-sm leading-relaxed text-ink">
              <strong class="font-semibold">{{ t.contact.emergencyLabel }}</strong>
              {{ t.contact.emergencyText }}
            </p>
          </div>
        </div>

        <!-- Map -->
        <div>
          <div class="overflow-hidden rounded-sm border border-ink/10 bg-white/70 shadow-card">
            <iframe
              :src="mapSrc"
              :title="t.contact.mapTitle"
              class="h-[320px] w-full border-0 sm:h-[420px]"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
            <div class="flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 p-4">
              <p class="text-sm text-slate-ink">{{ t.contact.mapCaption }}</p>
              <a
                :href="`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.mapQuery)}`"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-1.5 text-sm font-semibold text-brass hover:text-ink"
              >
                {{ t.contact.directions }}
                <ArrowUpRight :size="14" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div class="mt-4 rounded-sm border border-ink/10 bg-white/70 p-6">
            <h2 class="font-serif text-lg font-semibold text-ink">
              {{ t.contact.bringTitle }}
            </h2>
            <ul class="mt-3 space-y-2 text-sm leading-relaxed text-slate-ink">
              <li v-for="b in t.contact.bring" :key="b">{{ b }}</li>
            </ul>
            <p class="mt-4 text-xs leading-relaxed text-slate-ink/80">
              {{ t.contact.formNote }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <CtaBand />
  </main>
</template>
