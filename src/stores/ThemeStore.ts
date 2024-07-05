import { defineStore } from 'pinia'
import { onMounted, ref, watch } from 'vue'

export const useThemeStore = defineStore('themeStore', () => {
  const mode = ref<Boolean>(true)

  watch(mode, () => {
    if (mode.value) {
      document.getElementsByTagName('html')[0].setAttribute('data-bs-theme', 'light')
    } else {
      document.getElementsByTagName('html')[0].setAttribute('data-bs-theme', 'dark')
    }
  })

  onMounted(() => {
    const hasDarkPref = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (hasDarkPref) {
      mode.value = false
    } else {
      mode.value = true
    }
  })

  return { mode }
})
