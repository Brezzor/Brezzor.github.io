<script setup lang="ts">
import { useAuthStore } from '@/stores/AuthStore';
import { useNavStore } from '@/stores/NavStore';
import { useUserStore } from '@/stores/UserStore';
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
                    <i class="bi bi-person-circle"></i>
                    <img class="rounded-circle" :src="userStore.user?.photoURL" alt="profile picture" height="30"
                        width="30" v-if="userStore.user?.photoURL">
                    <span class="ms-2" v-else>Profil</span>
                </button>
                <ul class="dropdown-menu position-absolute">
                    <li>
                        <RouterLink class="dropdown-item" :to="{ name: 'Account' }" v-on:click="navStore.closeNavbar">
                            Konto</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="dropdown-item" :to="{ name: 'Feed' }" v-on:click="navStore.closeNavbar">Feed
                        </RouterLink>
                    </li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li>
                        <div class="dropdown-item-text">
                            <button class="btn btn-outline-danger" v-on:click="signOut">Signout</button>
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
</style>
