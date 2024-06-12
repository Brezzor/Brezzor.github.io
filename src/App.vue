<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

</script>

<template>
  <HeaderComponent />
  <RouterView v-slot="{ Component, route }">
      <transition name="slide">
        <component :is="Component" :key="route.path"/>
      </transition>
    </RouterView>
  <FooterComponent />
</template>

<style scoped>

</style>
