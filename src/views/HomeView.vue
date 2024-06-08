<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="card shadow">
    <div class="card-body">
      <div class="row gap-lg-0 gap-4">
        <div class="col-lg-6 col-md-12">
          <div class="row">
            <div class="col-12">
              <div class="d-flex justify-content-center">
                <h1 class="display-1 fw-bold">Hej,<br>jeg er <span class="name">Oliver</span><br>Datamatiker</h1>              
              </div>
            </div>
            <div class="col-12">
              <div class="text-center">
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
  max-width: 50%;
  height: auto;
  filter: drop-shadow(5px 5px 5px rgb(0 0 0 / 0.5));
}
</style>
