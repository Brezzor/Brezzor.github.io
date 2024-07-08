<script setup lang="ts">
import { useUserStore } from '@/stores/UserStore'
import { ref } from 'vue'
const userStore = useUserStore()
const displayname = ref<string>('')
</script>

<template>
  <div class="container">
    <div class="card shadow">
      <div class="card-body">
        <h1 class="text-center">{{ $t('AccountPage.Title') }}</h1>
        <div class="container d-flex flex-column justify-content-center align-items-center mb-3">
          <span
            >{{ $t('AccountPage.Welcome') }},
            <span class="name">{{ userStore.user?.email }}</span></span
          >
          <span
            >Displayname: <span class="name">{{ userStore.user?.displayName }}</span></span
          >
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="userDisplayname">Displayname</span>
          <input
            type="text"
            class="form-control"
            placeholder="Displayname"
            aria-label="Displayname"
            aria-describedby="userDisplayname"
            v-model="displayname"
          />
        </div>
        <button
          class="btn btn-success"
          type="button"
          v-on:click="userStore.updateDisplayname(displayname)"
        >
          {{ $t('Save') }}
        </button>
      </div>
    </div>
  </div>
</template>
