import axios from 'axios'

// Crea una instancia de Axios
const api = axios.create({
  baseURL: import.meta.env.VITE_ENDPOINT, // Cambia esto a la URL base de tu API
  headers: {
    'Content-Type': 'application/json'
  }
})

// Función para establecer el token de autenticación
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete api.defaults.headers.common['Authorization']
  }
}

// Peticiones a la API
export const login = (credentials) => api.post('/login', credentials)
export const getOrders = () => api.get('/orders')
export const getMonths = () => api.get('/months')
export const getStatus = () => api.get('/status')
export const getOrderStatus = (id) => api.get(`/orders/status/${id}`)
export const getOrdersByMonth = (month) => api.get(`/orders/month/${month}`)

// Exporta la instancia de Axios para su uso en otros archivos
export default api
