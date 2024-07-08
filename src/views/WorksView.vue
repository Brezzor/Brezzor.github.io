<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const TypewriterText = defineAsyncComponent(
  () => import('../components/TypewriterTextComponent.vue')
)
</script>

<template>
  <div class="container">
    <div class="card shadow">
      <div class="card-body">
        <h1 class="text-center">{{ $t('Works') }}</h1>
        <div class="container text-center pt-2">
          <TypewriterText text-class="fw-bold" :display-text-array="[$t('WorkingOn')]" />
        </div>
      </div>
    </div>
  </div>
</template>
