<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light shadow">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">
        <img class="me-2 logo" src="@/assets/logo.webp" alt="Logo" width="35" height="35" />
        <span class="align-middle">Oliver - Portfolio</span>
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <RouterLink class="offcanvas-title navbar-brand" id="offcanvasNavbarLabel" to="/">
            <img class="me-2 logo" src="@/assets/logo.webp" alt="Logo" width="35" height="35" />
            <span class="align-middle">Oliver - Portfolio</span>
          </RouterLink>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav me-auto mb-2 mb-md-0 nav-underline">
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/">Hjem</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/about">Om mig</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/skills"
                >Færdigheder</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/works">Arbejde</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/contact">Kontakt </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.logo {
  filter: drop-shadow(2px 2px 2px rgb(0 0 0 / 1));
}
</style>
