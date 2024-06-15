<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { RouterView } from 'vue-router'
const HeaderComponent = defineAsyncComponent(() =>
  import('./components/HeaderComponent.vue')
)
const FooterComponent = defineAsyncComponent(() =>
  import('./components/FooterComponent.vue')
)

function animationDuration() {
  return window.innerWidth / 2.4
}
</script>

<template>
  <HeaderComponent />
  <RouterView v-slot="{ Component, route }" class="my-4">
    <transition name="scale-slide" :duration="{ enter: animationDuration(), leave: 300 }">
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

/* scale-slide animation */

.scale-slide-enter-active,
.scale-slide-leave-active {
  position: absolute;
}

.scale-slide-leave-active {
  transition-property: all;
  transition-timing-function: ease-out;
}

.scale-slide-enter-active {
  transition-property: all;
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
