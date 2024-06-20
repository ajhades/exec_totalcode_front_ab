<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" id="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <button type="submit">Login</button>
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
        this.$router.push({ name: 'about' });
      } catch (error) {
        this.error = 'Login failed. Please check your credentials.'
      }
    }
  }
}
</script>

<style>
</style>
