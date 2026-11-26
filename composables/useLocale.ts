import { content, type Locale } from '~/data/content'

const STORAGE_KEY = 'uc-locale'

export function useLocale() {
  // useState -> SSR/prerender aur client ke beech share hota hai
  const locale = useState<Locale>('locale', () => 'en')

  const t = computed(() => content[locale.value])
  const isHindi = computed(() => locale.value === 'hi')

  function setLocale(next: Locale) {
    locale.value = next
    if (import.meta.client) {
      document.documentElement.lang = next === 'hi' ? 'hi' : 'en'
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        /* storage blocked — ignore */
      }
    }
  }

  function toggle() {
    setLocale(locale.value === 'en' ? 'hi' : 'en')
  }

  // Pehli baar page load par saved language apply karo
  function initLocale() {
    if (!import.meta.client) return
    let saved: string | null = null
    try {
      saved = localStorage.getItem(STORAGE_KEY)
    } catch {
      /* ignore */
    }
    const next: Locale = saved === 'hi' ? 'hi' : 'en'
    if (next !== locale.value) setLocale(next)
  }

  return { locale, t, isHindi, setLocale, toggle, initLocale }
}
