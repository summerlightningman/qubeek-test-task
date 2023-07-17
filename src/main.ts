import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routing/router.ts'

const app = createApp(App)
app.mount('#app')

app.use(router)