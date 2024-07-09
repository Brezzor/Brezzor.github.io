<script setup lang="ts">
defineProps({
  iconName: { type: String, required: true },
  iconColor: { type: String },
  contactName: { type: String, required: true },
  contactUrl: { type: String, required: true },
  contactUrlText: { type: String, required: true },
  urlColor: { type: String }
})
</script>

<template>
  <div class="card shadow">
    <div class="card-header">
      <div class="row g-0">
        <div class="col-5">
          <i class="bi fs-4" :class="[iconName, iconColor]"></i>
        </div>
        <div class="col-2">
          <div class="vr align-self-center" style="height: 2em"></div>
        </div>
        <div class="col-5 align-content-center">
          <span class="fw-bold">{{ contactName }}</span>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col pt-2">
          <a class="link-body-emphasis" :class="urlColor" :href="contactUrl" target="_blank">{{
            contactUrlText
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
