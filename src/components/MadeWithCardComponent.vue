<script setup lang="ts">
defineProps({
  linkColor: { type: String },
  linkUrl: { type: String, required: true },
  nameOfText: { type: String, required: true }
})
</script>

<template>
  <a :class="linkColor || 'link-dark'" :href="linkUrl" target="_blank">
    <div class="card shadow">
      <div class="card-body p-4">
        <div class="d-flex flex-column justify-content-center align-items-center h-100">
          <slot></slot>
          <span>{{ nameOfText }}</span>
        </div>
      </div>
    </div>
  </a>
</template>

<style scoped></style>
