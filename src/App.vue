<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <HeaderComponent />
  <div class="container mt-4">
      <RouterView />
  </div>
  <FooterComponent />
</template>

<style scoped>
.container {
  margin-bottom: calc(10vw + 70px);
}
</style>