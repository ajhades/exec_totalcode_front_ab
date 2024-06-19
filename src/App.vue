<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Select from "./components/global/Select.vue";
</script>

<template>
  <header class="header header-transparent">
    <nav class="navbar  fixed-top navbar-light w-100">
        <div class="container-fluid">
        <RouterLink to="/">
          <img alt="TotalCode logo" class="logo" src="@/assets/logo-total.png" width="125" />
        </RouterLink>

        <h1 class="title-ppal">ERP - Tienda Rosatel</h1>
        <div class="wrapper">
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/" class="btn-left">Salir</RouterLink>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  background-color: white;
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  -webkit-box-shadow: 0px 10px 17px -15px rgba(0,0,0,0.5);
  -moz-box-shadow: 0px 10px 17px -15px rgba(0,0,0,0.5);
  box-shadow: 0px 10px 17px -15px rgba(0,0,0,0.5);
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    font-size: 1rem;
    margin: 0;
    padding: 1rem 0;
    
  }
}
</style>
