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
  <RouterView v-slot="{ Component, route }">
    <transition name="scale-slide">
      <component :is="Component" :key="route.path" />
    </transition>
  </RouterView>
  <FooterComponent />
</template>

<style scoped>
.container {
  min-height: calc(100% - 7.3rem);
  margin-top: 3.8125rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

/* scale-slide animation */

.scale-slide-enter-active,
.scale-slide-leave-active {
  position: absolute;
}

.scale-slide-leave-active {
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
}

.scale-slide-enter-active {
  transition-property: all;
  transition-duration: 0.8s;
  transition-timing-function: cubic-bezier(1, 0.5, 0.8, 1);
}

.scale-slide-enter-from {
  left: -200%;
}

.scale-slide-enter-to {
  left: 0;
  right: 0;
}

.scale-slide-leave-from {
  left: 0;
  right: 0;
  transform: scale(100%);
  opacity: 1;
}

.scale-slide-leave-to {
  left: 0;
  right: 0;
  transform: scale(50%);
  opacity: 0;
}
</style>
