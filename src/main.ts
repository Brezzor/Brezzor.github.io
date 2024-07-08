import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '~bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'
import en from './locales/EN.json'
import da from './locales/DA.json'

import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
}

initializeApp(firebaseConfig)

const lang = () => {
  if (navigator.language === 'da') {
    return 'da'
  } else {
    return 'en'
  }
}

const i18n = createI18n({
  locale: lang(),
  messages: {
    en: en,
    da: da
  }
})

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(i18n)
app.mount('#app')
