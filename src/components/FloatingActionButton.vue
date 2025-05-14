<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const ThemeSwitch = defineAsyncComponent(() => import('@/components/ThemeSwitchComponent.vue'))
</script>

<template>
  <div class="dropup d-flex justify-content-end">
    <button type="button" class="btn btn-primary" data-bs-toggle="dropdown" data-bs-auto-close="outside"
      aria-expanded="false">
      <i class="bi bi-three-dots"></i>
    </button>
    <ul class="dropdown-menu">
      <li>
        <div class="dropdown-item-text">
          <p>{{ $t('Language') }}:</p>
          <div class="d-flex justify-content-center gap-2">
            <button class="btn btn-primary" type="button" v-on:click="$i18n.locale = 'en'">
              EN
            </button>
            <button class="btn btn-primary" type="button" v-on:click="$i18n.locale = 'da'">
              DA
            </button>
          </div>
        </div>
      </li>
      <li>
        <hr class="dropdown-divider" />
      </li>
      <li>
        <div class="dropdown-item-text">
          <p>{{ $t('Theme') }}:</p>
          <ThemeSwitch></ThemeSwitch>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  border-top: 0;
  border-right: 0.3em solid transparent;
  border-bottom: 0.3em solid;
  border-left: 0.3em solid transparent;
}
</style>
