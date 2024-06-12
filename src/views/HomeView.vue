<script setup lang="ts">
import { RouterLink } from 'vue-router'
import TypewriterTextComponent from '../components/TypewriterTextComponent.vue'
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
                  <TypewriterTextComponent />
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
              <img src="/src/assets/my-image.webp" alt="headshot" class="image" />
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
            <a href="https://vuejs.org/" target="_blank">
              <div class="card">
                <div class="card body p-4">
                  <div class="d-flex flex-column justify-content-center align-items-center h-100">
                    <img class="logo" src="../assets/vue-logo.svg" alt="vue logo" />
                    <span>Vue.js</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-1 col-md-12">
            <div class="d-flex flex-column justify-content-center align-items-center h-100">
              <i class="bi bi-plus fs-1"></i>
            </div>
          </div>
          <div class="col-lg-3 col-md-12">
            <a href="https://vitejs.dev/" target="_blank">
              <div class="card">
                <div class="card body p-4">
                  <div class="d-flex flex-column justify-content-center align-items-center h-100">
                    <img class="logo" src="../assets/vite-logo.svg" alt="vite logo" />
                    <span>Vite.js</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-1 col-md-12">
            <div class="d-flex flex-column justify-content-center align-items-center h-100">
              <i class="bi bi-plus fs-1"></i>
            </div>
          </div>
          <div class="col-lg-3 col-md-12">
            <a href="https://getbootstrap.com/" target="_blank">
              <div class="card">
                <div class="card body p-4">
                  <div class="d-flex flex-column justify-content-stretch align-items-center h-100">
                    <img class="logo" src="../assets/bootstrap-logo.svg" alt="bootstrap logo" />
                    <span>Bootstrap 5</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image {
  width: 50%;
  max-height: 100%;
  max-width: 100%;
  filter: drop-shadow(5px 5px 5px rgb(0 0 0 / 0.5));
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

.logo {
  height: 5rem;
  max-height: 100%;
  max-width: 100%;
}
</style>
