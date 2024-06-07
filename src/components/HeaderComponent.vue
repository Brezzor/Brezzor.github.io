<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light border-bottom shadow">
        <div class="container-fluid">
            <RouterLink class="navbar-brand" to="/">
                <img class="me-2 logo" src="@/assets/logo.png" alt="Logo" width="35" height="35">
                <span class="align-middle">Oliver - Portfolio</span>
            </RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarCollapse" class="collapse navbar-collapse">
                <ul class="navbar-nav me-auto mb-2 mb-md-0 nav-underline">
                    <li class="nav-item">
                        <RouterLink class="nav-link" active-class="active" to="/">Hjem</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" active-class="active" to="/about">Om mig</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" active-class="active" to="/skills">Færdigheder</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" active-class="active" to="/works">Arbejde</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" active-class="active" to="/contact">Kontakt
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.logo {
    filter: drop-shadow(2px 2px 2px rgb(0 0 0 / 1));
}
</style>