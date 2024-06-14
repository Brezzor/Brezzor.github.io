<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { RouterView } from 'vue-router'
const HeaderComponent = defineAsyncComponent(() =>
  import('./components/HeaderComponent.vue')
)
const FooterComponent = defineAsyncComponent(() =>
  import('./components/FooterComponent.vue')
)
</script>

<template>
  <HeaderComponent />
  <RouterView v-slot="{ Component, route }" class="my-4">
    <transition name="scale-slide">
      <component :is="Component" :key="route.path" />
    </transition>
  </RouterView>
  <FooterComponent />
</template>

<style scoped>
.container {
  padding-top: 60px;
  padding-bottom: 70px
}
</style>
