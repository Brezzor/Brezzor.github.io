<script setup lang="ts">
import { useThemeStore } from '@/stores/ThemeStore';

const themeStore = useThemeStore()
</script>

<template>
  <div class="form-check form-switch">
    <input class="form-check-input" v-model="themeStore.mode" type="checkbox" name="themeSwitch" id="themeSwitch"
      role="themeSwitch">
    <label class="form-check-label" for="themeSwitch">
      <div v-if="themeStore.mode">
        <i class="bi bi-sun-fill"></i>
        <span class="ps-1">{{ $t('Light') }}</span>
      </div>
      <div v-else>
        <i class="bi bi-moon-stars-fill"></i>
        <span class="ps-1">{{ $t('Dark') }}</span>
      </div>
    </label>
  </div>
</template>

<style scoped></style>
