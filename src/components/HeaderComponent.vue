<script setup lang="ts">
import { useAuthStore } from '@/stores/AuthStore'
import { useNavStore } from '@/stores/NavStore'
import { defineAsyncComponent } from 'vue'
import { RouterLink } from 'vue-router'
const authStore = useAuthStore()
const navStore = useNavStore()
const accountDropdown = defineAsyncComponent(
  () => import('../components/AccountDropdownComponent.vue')
)
</script>

<template>
  <header class="navbar navbar-expand-xl bg-body-tertiary fixed-top shadow">
    <nav class="container-fluid">
      <RouterLink class="navbar-brand" :to="{ name: 'Home' }" v-on:click="navStore.closeNavbar">
        <img class="me-2 logo" src="@/assets/logo.webp" alt="Logo" width="35" height="35" />
        <span class="align-middle">Oliver - Portfolio</span>
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        :aria-expanded="navStore.show && 'true'"
        aria-label="Toggle navigation"
        v-on:click="navStore.toggleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll" :class="navStore.show && 'show'">
        <ul
          class="navbar-nav me-auto nav-underline navbar-nav-scroll fw-bold"
          style="--bs-scroll-height: 10rem"
        >
          <li class="nav-item">
            <RouterLink
              class="nav-link ps-1 ps-xl-0"
              :to="{ name: 'Home' }"
              v-on:click="navStore.closeNavbar"
            >
              <i class="bi bi-house-fill"></i>
              <span class="px-1">-</span>
              <span>{{ $t('Home') }}</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link ps-1 ps-xl-0"
              :to="{ name: 'About' }"
              v-on:click="navStore.closeNavbar"
            >
              <i class="bi bi-info-circle-fill"></i>
              <span class="px-1">-</span>
              <span>{{ $t('About') }}</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link ps-1 ps-xl-0"
              :to="{ name: 'Skills' }"
              v-on:click="navStore.closeNavbar"
            >
              <i class="bi bi-tools"></i>
              <span class="px-1">-</span>
              <span>{{ $t('Skills') }}</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link ps-1 ps-xl-0"
              :to="{ name: 'Works' }"
              v-on:click="navStore.closeNavbar"
            >
              <i class="bi bi-code-slash"></i>
              <span class="px-1">-</span>
              <span>{{ $t('Works') }}</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link ps-1 ps-xl-0"
              :to="{ name: 'Contact' }"
              v-on:click="navStore.closeNavbar"
            >
              <i class="bi bi-person-lines-fill"></i>
              <span class="px-1">-</span>
              <span>{{ $t('Contact') }}</span>
            </RouterLink>
          </li>
        </ul>
        <div class="pt-2 pt-xl-0" v-if="!authStore.loadingSession && !authStore.loadingSession">
          <div v-if="!authStore.isLoggedIn">
            <RouterLink
              class="btn btn-outline-primary me-2"
              :to="{ name: 'Login' }"
              v-on:click="navStore.closeNavbar"
              active-class=""
            >
              {{ $t('Login') }}</RouterLink
            >
            <RouterLink
              class="btn btn-primary"
              :to="{ name: 'Register' }"
              v-on:click="navStore.closeNavbar"
              active-class=""
            >
              {{ $t('Register') }}</RouterLink
            >
          </div>
          <accountDropdown v-else />
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.logo {
  filter: drop-shadow(2px 2px 2px rgb(0 0 0 / 0.5));
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
