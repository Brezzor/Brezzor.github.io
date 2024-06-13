<script setup lang="ts">
import { ref, watchEffect } from 'vue';

const props = defineProps({
  linkColor: { type: String },
  linkUrl: { type: String, required: true },
  imgPath: { type: String, required: true },
  altText: { type: String },
  nameOfText: { type: String, required: true }
})

const imgSrc = ref()

watchEffect( async() => {
    imgSrc.value = (await import(props.imgPath)).default
})
</script>

<template>
  <a :class="linkColor || 'link-dark'" :href="linkUrl" target="_blank">
    <div class="card">
      <div class="card body p-4">
        <div class="d-flex flex-column justify-content-center align-items-center h-100">
          <img class="logo" :src="imgSrc" :alt="altText" />
          <span>{{ nameOfText }}</span>
        </div>
      </div>
    </div>
  </a>
</template>

<style scoped>
.logo {
  height: 5rem;
  max-height: 100%;
  max-width: 100%;
}
</style>
