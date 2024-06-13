<script setup lang="ts">
import { RouterLink } from 'vue-router'
import TypewriterTextComponent from '../components/TypewriterTextComponent.vue'
import MadeWithCard from '../components/MadeWithCardComponent.vue'
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
            <MadeWithCard 
            link-url="https://vuejs.org/" 
            img-path="/src/assets/vue-logo.svg" 
            name-of-text="Vue.js" 
            />
          </div>
          <div class="col-lg-1 col-md-12">
            <div class="d-flex flex-column justify-content-center align-items-center h-100">
              <i class="bi bi-plus fs-1"></i>
            </div>
          </div>
          <div class="col-lg-3 col-md-12">
            <MadeWithCard 
            link-url="https://vitejs.dev/" 
            img-path="/src/assets/vite-logo.svg" 
            name-of-text="Vite.js" 
            />            
          </div>
          <div class="col-lg-1 col-md-12">
            <div class="d-flex flex-column justify-content-center align-items-center h-100">
              <i class="bi bi-plus fs-1"></i>
            </div>
          </div>
          <div class="col-lg-3 col-md-12">
            <MadeWithCard 
            link-url="https://getbootstrap.com/" 
            img-path="/src/assets/bootstrap-logo.svg" 
            name-of-text="Bootstrap 5" 
            />
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
</style>
