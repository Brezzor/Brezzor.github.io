<script setup lang="ts">
import { useAuthStore } from '@/stores/AuthStore';
import { defineAsyncComponent, ref } from 'vue';
import { RouterLink } from 'vue-router'
const authStore = useAuthStore()
const show = ref(false)
const closeNavbar = () => {
  show.value = false
}
const toggleNavbar = () => {
  show.value = !show.value
}
const accountDropdown = defineAsyncComponent(() =>
  import('../components/AccountDropdownComponent.vue')
)
</script>

<template>
  <header class="navbar navbar-expand-custom navbar-light bg-light fixed-top shadow">
    <nav class="container-fluid">
      <div>
        <RouterLink class="navbar-brand" :to="{ name: 'Home' }" v-on:click="closeNavbar">
          <img class="me-2 logo" src="@/assets/logo.webp" alt="Logo" width="35" height="35" />
          <span class="align-middle">Oliver - Portfolio</span>
        </RouterLink>
      </div>
      <button class="navbar-toggler" type="button" :aria-expanded="show && 'true'" aria-label="Toggle navigation"
        v-on:click="toggleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" :class="show && 'show'">
        <ul class="d-flex navbar-nav nav-underline fw-bold w-100">
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ name: 'Home' }" v-on:click="closeNavbar">
              <i class="bi bi-house-fill pe-2"></i>
              <span class="pe-2">-</span>
              <span>Hjem</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ name: 'About' }" v-on:click="closeNavbar">
              <i class="bi bi-info-circle-fill pe-2"></i>
              <span class="pe-2">-</span>
              <span>Om mig</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ name: 'Skills' }" v-on:click="closeNavbar">
              <i class="bi bi-tools pe-2"></i>
              <span class="pe-2">-</span>
              <span>Færdigheder</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ name: 'Works' }" v-on:click="closeNavbar">
              <i class="bi bi-code-slash pe-2"></i>
              <span class="pe-2">-</span>
              <span>Projekter</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ name: 'Contact' }" v-on:click="closeNavbar">
              <i class="bi bi-person-lines-fill pe-2"></i>
              <span class="pe-2">-</span>
              <span>Kontakt</span>
            </RouterLink>
          </li>
          <div class="ms-0 ms-custom-auto" v-if="!authStore.loadingSession && !authStore.loadingSession">
            <li class="nav-item" v-if="!authStore.isLoggedIn">
              <RouterLink class=" btn btn-outline-primary me-2" :to="{ name: 'Login' }" v-on:click="closeNavbar">
                Login</RouterLink>
              <RouterLink class="btn btn-primary" :to="{ name: 'Register' }" v-on:click="closeNavbar">
                register</RouterLink>

            </li>
            <accountDropdown v-else />
          </div>
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

@media (min-width: 1215px) {
  .navbar-expand-custom {
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }

  .navbar-expand-custom .navbar-nav {
    flex-direction: row;
  }

  .navbar-expand-custom>.container {
    flex-wrap: nowrap;
  }

  .navbar-expand-custom .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }

  .navbar-expand-custom .navbar-toggler {
    display: none;
  }

  .ms-custom-auto {
    margin-left: auto !important;
  }
}
</style>
