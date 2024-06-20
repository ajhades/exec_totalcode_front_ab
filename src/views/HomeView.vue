<template>
  <main>
    <Login />
  </main>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['logout']),
  },
  mounted() {
    this.logout()
  }
}
</script>
<style>
main {
  margin-top: 100px;
}
</style>
