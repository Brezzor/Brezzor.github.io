import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNavStore = defineStore('navStore', () => {
  const show = ref(false)
  const closeNavbar = () => {
    show.value = false
  }
  const toggleNavbar = () => {
    show.value = !show.value
  }

  return {
    show,
    closeNavbar,
    toggleNavbar
  }
})
