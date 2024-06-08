<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="card shadow">
    <div class="card-body">
      <div class="d-flex flex-wrap gap-4">
        <div class="m-auto">
          <h1 class="display-1 fw-bold">Hej,<br>jeg er <span class="name">Oliver</span><br>Datamatiker</h1>
          <div class="d-flex justify-content-center pt-4">
            <RouterLink class="btn btn-primary" to="/contact">Kontakt</RouterLink>
          </div>
        </div>
        <div class="m-auto">
          <img src="/src/assets/my-image.webp" alt="headshot" class="image" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image {
  height: 15rem;
  width: 15rem;
  filter: drop-shadow(5px 5px 5px rgb(0 0 0 / 0.5));
}
</style>
