<script setup lang="ts">
import { useAuthStore } from '@/stores/AuthStore'
import { useNavStore } from '@/stores/NavStore'
import { useUserStore } from '@/stores/UserStore'
import { RouterLink } from 'vue-router'
const authStore = useAuthStore()
const userStore = useUserStore()
const navStore = useNavStore()
const signOut = () => {
  authStore.signOutUser()
  navStore.closeNavbar()
}
</script>

<template>
  <div class="card">
    <div class="card-body py-2">
      <div class="dropdown-custom">
        <button class="nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img class="profile-picture border border-2 rounded-circle" :src="userStore.user?.photoURL!"
            aria-label="Profile picture" v-if="userStore.user?.photoURL" />
          <i class="profile-placeholder bi bi-person-circle" v-else></i>
          <span class="ms-2 h-100">{{ $t('Profile') }}</span>
        </button>
        <ul class="dropdown-menu position-absolute">
          <li>
            <RouterLink class="dropdown-item" :to="{ name: 'Account' }" v-on:click="navStore.closeNavbar">
              {{ $t('Account') }}</RouterLink>
          </li>
          <li>
            <RouterLink class="dropdown-item" :to="{ name: 'Feed' }" v-on:click="navStore.closeNavbar">
              {{ $t('Feed') }}
            </RouterLink>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <div class="dropdown-item-text">
              <button class="btn btn-outline-danger" v-on:click="signOut">
                {{ $t('Signout') }}
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown-custom {
  position: relative;
}

.dropdown-custom .dropdown-menu {
  top: 140%;
  left: -1.5%;
  margin-top: var(--bs-dropdown-spacer);
}

@media (min-width: 1200px) {
  .dropdown-custom .dropdown-menu {
    top: 140%;
    left: -53%;
    margin-top: var(--bs-dropdown-spacer);
  }
}

.profile-picture {
  height: 2.5rem;
  width: auto;
}

.profile-placeholder {
  display: inline-block;
  vertical-align: middle;
  font-size: 2.5em;
  line-height: 0;
}
</style>
