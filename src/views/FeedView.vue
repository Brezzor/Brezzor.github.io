<script setup lang="ts">
import { useUserStore } from '@/stores/UserStore'
import { defineAsyncComponent } from 'vue'
const TypewriterText = defineAsyncComponent(
  () => import('../components/TypewriterTextComponent.vue')
)
const userStore = useUserStore()
</script>

<template>
  <div class="container">
    <div class="card shadow">
      <div class="card-body">
        <h1 class="text-center">{{ $t('FeedPage.Title') }}</h1>
        <div class="container text-center pt-2">
          <span
            >{{ $t('FeedPage.Welcome') }},
            <span class="name">{{ userStore.user?.email }}</span></span
          >
          <TypewriterText text-class="" :display-text-array="[$t('WorkingOn')]" />
        </div>
      </div>
    </div>
  </div>
</template>
