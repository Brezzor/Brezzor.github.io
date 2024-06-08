<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<script lang="ts">
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show;
    }
  }
}
</script>

<template>
  <header class="navbar navbar-expand-lg bg-light sticky-top shadow">
    <nav class="container-fluid">
      <RouterLink class="navbar-brand" to="/" v-on:click="toggleNavbar">
        <img class="me-2 logo" src="@/assets/logo.webp" alt="Logo" width="35" height="35" />
        <span class="align-middle">Oliver - Portfolio</span>
      </RouterLink>
      <button
        class="navbar-toggler" 
        type="button"
        data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        :aria-expanded="show ? 'true' : 'false'"
        aria-label="Toggle navigation"
        v-on:click="toggleNavbar"
        >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div 
      class="collapse navbar-collapse"
      v-bind:class="{ 'show' : show }" 
      id="navbarSupportedContent"
      >
        <ul class="navbar-nav me-auto mb-2 mb-md-0 nav-underline">
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/" v-on:click="toggleNavbar">Hjem</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/about" v-on:click="toggleNavbar">Om mig</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/skills" v-on:click="toggleNavbar">Færdigheder</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/works" v-on:click="toggleNavbar">Arbejde</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/contact" v-on:click="toggleNavbar">Kontakt </RouterLink>
            </li>
          </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.logo {
  filter: drop-shadow(2px 2px 2px rgb(0 0 0 / 1));
}
</style>
