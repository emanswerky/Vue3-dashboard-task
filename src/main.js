import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/main.css'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css'

const app = createApp(App)
import Chart from 'primevue/chart'
app.component('Chart', Chart)

import { Chart as ChartJS } from 'chart.js/auto'
void ChartJS

app.use(createPinia())
app.use(router)

app.use(PrimeVue, {
  theme: { preset: Aura },
  pt: {
    apply: true,
  },
  ptOptions: { mergeSections: true, mergeProps: true },
})

app.mount('#app')
