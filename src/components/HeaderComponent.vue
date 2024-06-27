<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
const show = ref(false)
const isLoggedIn = ref(false)
const router = useRouter()
const closeNavbar = () => {
  show.value = false
}
const toggleNavbar = () => {
  show.value = !show.value
}
onAuthStateChanged(getAuth(), (user) => {
  if (user) {
    isLoggedIn.value = true
  } else {
    isLoggedIn.value = false
  }
})
const signOutUser = () => {
  signOut(getAuth())
  router.push({ name: 'Home' })
}
</script>

<template>
  <header class="navbar navbar-expand-custom bg-light fixed-top shadow">
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
      <div class="collapse navbar-collapse justify-content-custom" :class="show && 'show'">
        <ul class="navbar-nav mt-2 my-lg-0 me-lg-2 nav-underline fw-bold">
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
              <span>Projekter</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" :to="{ name: 'Contact' }" v-on:click="closeNavbar">
              <i class="bi bi-person-lines-fill pe-2"></i>
              <span class="pe-2">-</span>
              <span>Kontakt</span>
            </RouterLink>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <RouterLink class="nav-link" active-class="active" :to="{ name: 'Feed' }" v-on:click="closeNavbar">
              <i class="bi bi-grid-fill pe-2"></i>
              <span class="pe-2">-</span>
              <span>Feed</span>
            </RouterLink>
          </li>
        </ul>
        <div class="mt-2 mt-lg-0">
          <RouterLink class="btn btn-primary me-2" :to="{ name: 'Login' }" v-if="!isLoggedIn" v-on:click="closeNavbar">
            Login</RouterLink>
          <RouterLink class="btn btn-primary" :to="{ name: 'Register' }" v-if="!isLoggedIn" v-on:click="closeNavbar">
            register</RouterLink>
          <button class="btn btn-primary" v-on:click="signOutUser()" v-else>Logout</button>
        </div>
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

@media (min-width: 1474px) {
  .navbar-collapse {
    margin-right: 259px;
  }
}

@media (min-width: 1474px) {
  .justify-content-custom {
    justify-content: center !important;
  }
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
}
</style>
