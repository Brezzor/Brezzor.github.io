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
    closeNavbar() {
      this.show = false;
    },
    toggleNavbar() {
      this.show = !this.show
    }
  }
}
</script>

<template>
  <header class="navbar navbar-expand-lg bg-light sticky-top shadow">
    <nav class="container-fluid">
      <RouterLink class="navbar-brand" :to="{ name: 'Home'}" v-on:click="closeNavbar">
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
      :class="show ? 'show' : ''" 
      id="navbarSupportedContent"
      >
        <ul class="navbar-nav me-auto mb-2 mb-md-0 nav-underline fw-bold">
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" :to="{ name: 'Home'}" v-on:click="closeNavbar">Hjem</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" :to="{ name: 'About'}" v-on:click="closeNavbar">Om mig</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" :to="{ name: 'Skills'}" v-on:click="closeNavbar">Færdigheder</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" :to="{ name: 'Works'}" v-on:click="closeNavbar">Arbejde</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" :to="{ name: 'Contact'}" v-on:click="closeNavbar">Kontakt </RouterLink>
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
