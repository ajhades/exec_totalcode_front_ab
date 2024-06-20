<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-4 m-auto">
          <Login />
        </div>
      </div>
    </div>
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
  min-height: 100vh;
}
</style>
