<script setup lang="ts">
import { RouterLink } from 'vue-router'
import TypewriterTextComponent from '../components/TypewriterTextComponent.vue'
</script>

<template>
  <div class="card shadow">
    <div class="card-body">
      <div class="row gap-lg-0 gap-4">
        <div class="col-lg-6 col-md-12">
          <div class="row">
            <div class="col-12">
              <div class="d-flex flex-column justify-content-center">
                <h1 class="display-3 fw-bold">
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
</template>

<style scoped>
.image {
  max-width: 90%;
  width: 75%;
  filter: drop-shadow(5px 5px 5px rgb(0 0 0 / 0.5));
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
</style>
