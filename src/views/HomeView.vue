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
        <div class="row g-4 g-lg-0">
          <div class="col-lg-6 col-md-12">
            <div class="row justify-content-center h-100">
              <div class="col-12 d-flex flex-column justify-content-center">
                <h1 class="fs-title-custom fw-bold">
                  Velkommen,<br />mit navn er <span class="name">Oliver</span>
                </h1>
                <TypewriterText text-class="fs-typewriter-custom fw-bold" :display-text-array="[
                  'Jeg er Datamatiker.',
                  'Jeg kan kode Frontend.',
                  'Jeg kan kode Backend.',
                  'Jeg kan arbejde med Databaser.']" />
              </div>
              <div class="col-12 d-flex justify-content-center align-items-center">
                <RouterLink class="btn btn-primary" to="/contact">Kontakt</RouterLink>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="d-flex justify-content-center align-items-center h-100 py-4">
              <img src="../assets/my-image-flipped.webp" alt="headshot" class="my-image floating" height="100%"
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
.logo {
  height: 5rem;
  width: auto;
  max-height: 100%;
  max-width: 100%;
}

.fs-title-custom {
  font-size: calc(1rem + 3vw);
}

@media (min-width: 992px) {
  .fs-title-custom {
    font-size: calc(1rem + 2.1vw);
  }
}

@media (min-width: 2021px) {
  .fs-title-custom {
    font-size: 3.5rem;
  }
}

.fs-typewriter-custom {
  font-size: calc(0.5rem + 1.8vw);
}

@media (min-width: 768px) {
  .fs-typewriter-custom {
    font-size: calc(0.5rem + 1.5vw);
  }
}

@media (min-width: 992px) {
  .fs-typewriter-custom {
    font-size: calc(0.5rem + 1vw);
  }
}

@media (min-width: 1199px) {
  .fs-typewriter-custom {
    font-size: calc(0.5rem + 1vw);
  }
}

@media (min-width: 1400px) {
  .fs-typewriter-custom {
    font-size: calc(0.5rem + .8vw);
  }
}

@media (min-width: 2021px) {
  .fs-typewriter-custom {
    font-size: 2rem;
  }
}
</style>
