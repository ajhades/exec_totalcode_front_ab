<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div class="form-floating">
        <input type="text" v-model="username" id="username" class="form-control" required />
        <label for="username">Usuario:</label>
      </div>
      <div class="form-floating">
        <input type="password" v-model="password" id="password" class="form-control" required />
        <label for="password">Contraseña:</label>
      </div>
      <button type="submit" class="btn btn-primary w-100 py-2">Iniciar sesión</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      username: '',
      password: '',
      error: ''
    }
  },
  methods: {
    ...mapActions(['saveToken']),
    async login() {
      try {
        const formData = new FormData()
        formData.append('username', this.username)
        formData.append('password', this.password)
        const response = await axios.post('http://localhost:8001/login', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        const token = response.data.token
        this.saveToken(token)
        this.$router.push({ name: 'orders' })
      } catch (error) {
        this.error = 'Login failed. Please check your credentials.'
      }
    }
  }
}
</script>

<style></style>
