<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <HeaderComponent />
  <RouterView
    v-slot="{ Component, route }"
    class="my-4"
    style="padding-top: 60px; padding-bottom: 70px"
  >
    <transition name="scale-slide">
      <component :is="Component" :key="route.path" />
    </transition>
  </RouterView>
  <FooterComponent />
</template>
