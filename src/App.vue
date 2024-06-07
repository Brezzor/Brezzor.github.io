<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <header>
    <HeaderComponent />
  </header>
  <main class="flex-shrink-0 main-background">
    <div class="container">
      <RouterView />
    </div>
  </main>
  <footer class="footer mt-auto py-3 bg-body-tertiary shadow-top">
    <FooterComponent />
  </footer>
</template>

<style scoped>
main>.container {
  padding-top: min(5vw + 60px, 120px);
  padding-bottom: max(5vw + 5px, 10px);
}

.main-background {
  background-image: url('./assets/doted-paper.png');
  background-color: white;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: calc(100% - 56px);
}

.shadow-top {
  box-shadow: 0.5rem 0 1rem rgba(0, 0, 0, 0.15) !important;
}
</style>