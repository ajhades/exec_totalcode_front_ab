import { createStore } from 'vuex'

export default createStore({
  state: {
    token: ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    clearToken(state) {
      state.token = ''
    }
  },
  actions: {
    saveToken({ commit }, token) {
      commit('setToken', token)
    },
    logout({ commit }) {
      commit('clearToken')
    }
  },
  getters: {
    getToken: (state) => state.token,
    isAuthenticated: state => !!state.token
  }
})
