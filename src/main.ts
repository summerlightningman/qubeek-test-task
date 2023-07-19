import { createApp } from 'vue'
import { createPinia } from "pinia"

import App from './App.vue'
import router from './routing/router'
import i18n from './i18n/i18n'

import './style.css'

const pinia = createPinia()

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(i18n)

app.mount('#app')