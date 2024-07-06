<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { RouterView } from 'vue-router'
const HeaderComponent = defineAsyncComponent(() =>
  import('./components/HeaderComponent.vue')
)
const FooterComponent = defineAsyncComponent(() =>
  import('./components/FooterComponent.vue')
)
const fab = defineAsyncComponent(() =>
  import('@/components/FloatingActionButton.vue')
)
</script>


<template>
  <HeaderComponent />
  <RouterView v-slot="{ Component, route }">
    <transition name="scale-slide">
      <component :is="Component" :key="route.path" />
    </transition>
  </RouterView>
  <fab />
  <FooterComponent />
</template>

<style scoped>
.container {
  margin-top: 6rem;
  margin-bottom: 7rem;
}

@media (min-width: 992px) {
  .container {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
}

/* scale-slide animation */
.scale-slide-leave-active,
.scale-slide-enter-active {
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
  left: -100%;
}

.scale-slide-enter-to {
  left: 0;
}

.scale-slide-leave-from {
  transform: scale(100%);
  opacity: 1;
  left: 0;
  right: 0;
}

.scale-slide-leave-to {
  transform: scale(50%);
  opacity: 0;
  left: 0;
  right: 0;
}
</style>
