import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ui from '@nuxt/ui/vue-plugin'

const app = createApp(App);
app.use(ui);
app.mount('#app');