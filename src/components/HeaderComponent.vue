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
      this.show = false
    },
    toggleNavbar() {
      this.show = !this.show
    }
  }
}
</script>

<template>
  <header class="navbar navbar-expand-lg bg-light fixed-top shadow">
    <nav class="container-fluid">
      <RouterLink class="navbar-brand" :to="{ name: 'Home' }" v-on:click="closeNavbar">
        <img class="me-2 logo" src="@/assets/logo.webp" alt="Logo" width="35" height="35" />
        <span class="align-middle">Oliver - Portfolio</span>
      </RouterLink>
      <button class="navbar-toggler" type="button" :aria-expanded="show ? 'true' : 'false'"
        aria-label="Toggle navigation" v-on:click="toggleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" :class="show ? 'show' : ''">
        <ul class="navbar-nav me-auto my-2 my-lg-0 nav-underline fw-bold">
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" :to="{ name: 'Home' }" v-on:click="closeNavbar">
              <i class="bi bi-house-fill pe-2"></i>
              <span class="pe-2">-</span>
              <span>Hjem</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" :to="{ name: 'About' }" v-on:click="closeNavbar">
              <i class="bi bi-info-circle-fill pe-2"></i>
              <span class="pe-2">-</span>
              <span>Om mig</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" :to="{ name: 'Skills' }" v-on:click="closeNavbar">
              <i class="bi bi-tools pe-2"></i>
              <span class="pe-2">-</span>
              <span>Færdigheder</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" :to="{ name: 'Works' }" v-on:click="closeNavbar">
              <i class="bi bi-code-slash pe-2"></i>
              <span class="pe-2">-</span>
              <span>Arbejde</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" :to="{ name: 'Contact' }" v-on:click="closeNavbar">
              <i class="bi bi-person-lines-fill pe-2"></i>
              <span class="pe-2">-</span>
              <span>Kontakt</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.logo {
  filter: drop-shadow(2px 2px 2px rgb(0 0 0 / .5));
}

.nav-link:hover .bi::before,
.nav-link:focus .bi::before {
  animation-name: shake;
  animation-duration: 0.4s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}
</style>
