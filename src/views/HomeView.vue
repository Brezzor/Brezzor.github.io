<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { RouterLink } from 'vue-router'
const TypewriterText = defineAsyncComponent(() =>
  import('../components/TypewriterTextComponent.vue')
)
const MadeWithCard = defineAsyncComponent(() =>
  import('../components/MadeWithCardComponent.vue')
)
</script>

<template>
  <div class="container">
    <div class="card shadow">
      <div class="card-body">
        <div class="row gap-lg-0 gap-4">
          <div class="col-lg-6 col-md-12">
            <div class="row">
              <div class="col-12">
                <div class="d-flex flex-column justify-content-center">
                  <h1 class="display-4 fw-bold">
                    Velkommen,<br />mit navn er <span class="name">Oliver</span>
                  </h1>
                  <TypewriterText text-class="fs-4 fw-bold" :display-text-array="[
                    'Jeg er Datamatiker.',
                    'Jeg kan kode Frontend.',
                    'Jeg kan kode Backend.',
                    'Jeg kan arbejde med Databaser.']" />
                </div>
              </div>
              <div class="col-12">
                <div class="text-center pt-4">
                  <RouterLink class="btn btn-primary" to="/contact">Kontakt</RouterLink>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="d-flex justify-content-center align-items-center h-100">
              <img src="../assets/my-image-flipped.webp" alt="headshot" class="image floating mirror" height="100%"
                width="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card shadow mt-4">
      <div class="card-body">
        <div class="text-center">
          <h2>Lavet med:</h2>
        </div>
        <div class="row g-sm-4 pt-4 justify-content-center">
          <div class="col-lg-3 col-md-12">
            <MadeWithCard :class="'made-with'" link-url="https://vuejs.org/" name-of-text="Vue.js">
              <img class="logo" src="../assets/vue-logo.svg" alt="vue logo" height="100%" width="100%">
            </MadeWithCard>
          </div>
          <div class="col-lg-1 col-md-12">
            <div class="d-flex flex-column justify-content-center align-items-center h-100">
              <i class="bi bi-plus fs-1"></i>
            </div>
          </div>
          <div class="col-lg-3 col-md-12">
            <MadeWithCard :class="'made-with'" link-url="https://vitejs.dev/" name-of-text="Vite.js">
              <img class="logo" src="../assets/vite-logo.svg" alt="vite logo" height="100%" width="100%">
            </MadeWithCard>
          </div>
          <div class="col-lg-1 col-md-12">
            <div class="d-flex flex-column justify-content-center align-items-center h-100">
              <i class="bi bi-plus fs-1"></i>
            </div>
          </div>
          <div class="col-lg-3 col-md-12">
            <MadeWithCard :class="'made-with'" link-url="https://getbootstrap.com/" name-of-text="Bootstrap 5">
              <img class="logo" src="../assets/bootstrap-logo.svg" alt="bootstrap 5 logo" height="100%" width="100%">
            </MadeWithCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image {
  width: 50%;
  height: auto;
  max-height: 100%;
  max-width: 100%;
  filter: drop-shadow(5px 5px 5px rgb(0 0 0 / 0.5));
}

.logo {
  height: 5rem;
  width: auto;
  max-height: 100%;
  max-width: 100%;
}
</style>
