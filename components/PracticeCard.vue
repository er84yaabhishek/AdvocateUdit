<script setup lang="ts">
import {
  Shield,
  Gavel,
  FileX,
  Receipt,
  Monitor,
  Scale,
  type LucideIcon,
} from '@lucide/vue'

const props = defineProps<{
  title: string
  desc: string
  icon: string
}>()

const map: Record<string, LucideIcon> = {
  shield: Shield,
  gavel: Gavel,
  'file-x': FileX,
  receipt: Receipt,
  monitor: Monitor,
  scale: Scale,
}

const Icon = computed<LucideIcon>(() => map[props.icon] ?? Scale)
</script>

<template>
  <article
    class="group relative rounded-sm border border-ink/10 bg-white/70 p-6 shadow-card transition duration-300 hover:-translate-y-0.5 hover:border-brass/40 hover:bg-white"
  >
    <span
      class="grid size-11 place-items-center rounded-sm bg-sand text-ink transition group-hover:bg-brass/15 group-hover:text-brass"
      aria-hidden="true"
    >
      <component :is="Icon" :size="20" :stroke-width="1.7" />
    </span>
    <h3 class="mt-5 font-serif text-xl font-semibold text-ink">{{ title }}</h3>
    <p class="mt-2.5 text-sm leading-relaxed text-slate-ink">{{ desc }}</p>
  </article>
</template>
