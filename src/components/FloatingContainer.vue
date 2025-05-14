<script setup lang="ts">
</script>

<template>
  <div class="fab row slot-col-12 gap-2">
    <slot class="col-12"></slot>
  </div>
</template>

<style scoped>
.fab {
  position: fixed;
  right: 3rem;
  bottom: 2rem;
  z-index: 1100;
  height: auto;
}

.row {
  width: min-content !important;
}

.row>* {
  padding: 0;
}

.slot-col-12>* {
  flex: 0 0 auto;
  width: 100%;
}
</style>
