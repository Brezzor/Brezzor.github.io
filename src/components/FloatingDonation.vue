<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const Donation = defineAsyncComponent(() => import("@/components/PaypalCoffeeDonation.vue"))
</script>

<template>
    <div class="bg-primary p-2 border border-primary rounded">
        <Donation></Donation>
    </div>
</template>

<style scoped></style>
