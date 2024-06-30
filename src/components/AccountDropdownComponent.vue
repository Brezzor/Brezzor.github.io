<script setup lang="ts">
import { useAuthStore } from '@/stores/AuthStore';
import { useUserStore } from '@/stores/UserStore';
import { RouterLink } from 'vue-router'
const authStore = useAuthStore()
const userStore = useUserStore()
</script>

<template>
    <li class="nav-item dropdown-custom">
        <button class="nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-person-circle"></i>
            <img class="rounded-circle" :src="userStore.user?.photoURL" alt="profile picture" height="30" width="30"
                v-if="userStore.user?.photoURL">
            <span class="ms-2" v-else>Profil</span>
        </button>
        <ul class="dropdown-menu position-absolute">
            <li>
                <RouterLink class="dropdown-item" :to="{ name: 'Account' }">Konto</RouterLink>
            </li>
            <li>
                <RouterLink class="dropdown-item" :to="{ name: 'Feed' }">Feed</RouterLink>
            </li>
            <li>
                <hr class="dropdown-divider">
            </li>
            <li>
                <div class="dropdown-item-text">
                    <button class="btn btn-outline-danger" v-on:click="authStore.signOutUser()">Signout</button>
                </div>
            </li>
        </ul>
    </li>
</template>

<style scoped>
.dropdown-custom {
    position: relative;
}

.dropdown-custom .dropdown-menu {
    top: 100%;
    left: 0%;
    margin-top: var(--bs-dropdown-spacer);
}

@media (min-width: 1215px) {
    .dropdown-custom .dropdown-menu {
        top: 100%;
        left: -70%;
        margin-top: var(--bs-dropdown-spacer);
    }
}
</style>
