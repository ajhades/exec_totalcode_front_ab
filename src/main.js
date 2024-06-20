import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import select from '@/components/global/Select.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const app = createApp(App)

app.use(router)
app.component('v-select', select)

app.config.globalProperties.$filters = {
  currencyCOP(value) {
    return '$' + new Intl.NumberFormat('es-CO').format(value)
  }
}

app.mount('#app')
