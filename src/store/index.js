import { createStore } from 'vuex'
import { login, getOrders, getMonths, getStatus, getOrderStatus, getOrdersByMonth, setAuthToken } from '../services/api'

export default createStore({
  state: {
    token: '',
    orders: [],
    months: [],
    statuses: [],
    error: ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    clearToken(state) {
      state.token = ''
    },
    setOrders(state, orders) {
      state.orders = orders
    },
    setMonths(state, months) {
      state.months = months
    },
    setStatuses(state, statuses) {
      state.statuses = statuses
    },
    setError(state, error) {
      state.error = error
    }
  },
  actions: {
    saveToken({ commit }, token) {
      commit('setToken', token)
    },
    async login({ commit }, credentials) {
      try {
        const response = await login(credentials)
        const token = response.data.token
        commit('setToken', token)
        setAuthToken(token)
      } catch (error) {
        commit('setError', 'Login failed. Please check your credentials.')
      }
    },
    async fetchOrders({ commit }) {
      try {
        if (this.state.token) {
          setAuthToken(this.state.token)
        }
        const response = await getOrders()
        commit('setOrders', response.data)
      } catch (error) {
        commit('setError', 'Failed to fetch orders.')
      }
    },
    async fetchMonths({ commit }) {
      try {
        const response = await getMonths()
        commit('setMonths', response.data)
      } catch (error) {
        commit('setError', 'Failed to fetch months.')
      }
    },
    async fetchStatuses({ commit }) {
      try {
        const response = await getStatus()
        commit('setStatuses', response.data)
      } catch (error) {
        commit('setError', 'Failed to fetch statuses.')
      }
    },
    async fetchOrderStatus({ commit }, id) {
      try {
        const response = await getOrderStatus(id)
        commit('setOrders', response.data)
      } catch (error) {
        commit('setError', `Failed to fetch status for order ${id}.`)
      }
    },
    async fetchOrdersByMonth({ commit }, month) {
      try {
        const response = await getOrdersByMonth(month)
        commit('setOrders', response.data)
      } catch (error) {
        commit('setError', `Failed to fetch orders for month ${month}.`)
      }
    },
    logout({ commit }) {
      commit('clearToken')
      setAuthToken(null)
    }
  },
  getters: {
    getToken: state => state.token,
    isAuthenticated: state => !!state.token,
    getOrders: state => state.orders,
    getMonths: state => state.months,
    getStatuses: state => state.statuses,
    getError: state => state.error
  }
})
