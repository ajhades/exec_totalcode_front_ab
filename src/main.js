import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import select from '@/components/global/SelectFilter.vue'
import MyLogin from '@/components/MyLogin.vue'
import TableOrders from '@/components/TableOrders.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const app = createApp(App)

app.use(router)
app.use(store)
app.component('v-select', select)
app.component('MyLogin', MyLogin)
app.component('TableOrders', TableOrders)

app.config.globalProperties.$filters = {
  currencyCOP(value) {
    return '$' + new Intl.NumberFormat('es-CO').format(value)
  }
}
axios.interceptors.request.use(
  (config) => {
    const token = store.getters.getToken
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

app.mount('#app')
