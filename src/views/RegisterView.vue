<script setup lang="ts">
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref('')
const password = ref('')
const errMsg = ref('')
const router = useRouter()
const login = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then(() => {
            router.push({ name: 'Feed' })
        })
        .catch((error) => {
            switch (error.code) {
                case 'auth/invalid-email':
                    errMsg.value = 'Invalid email'
                    break
                case 'auth/missing-password':
                    errMsg.value = 'Missing password'
                    break
                case 'auth/weak-password':
                    errMsg.value = 'Password is too weak'
                    break
                default:
                    errMsg.value = 'Email already in use'
                    break
            }
        })
}
</script>

<template>
    <div class="container">
        <div class="card shadow">
            <div class="card-body">
                <h1 class="text-center">Register</h1>
                <div class="m-3 m-sm-4 m-md-5">
                    <div class="d-flex justify-content-center">
                        <form @submit.prevent>
                            <div class="mb-3" v-if="errMsg">
                                <span class="text-danger fw-bold underline mb-3">{{ errMsg }}</span>
                            </div>
                            <div class="mb-3">
                                <label for="loginEmail" class="form-label">Email address</label>
                                <input type="email" name="email" id="loginEmail" placeholder="Email"
                                    class="form-control" v-model="email">
                            </div>
                            <div class="mb-3">
                                <label for="loginPassword" class="form-label">Password</label>
                                <input type="password" name="password" id="loginPassword" placeholder="Password"
                                    class="form-control" v-model="password">
                            </div>
                            <div class="mb-3">
                                <button class="btn btn-primary" v-on:click="login()">Register</button>
                            </div>
                            <div>
                                <span>Har du allerede en konto? </span>
                                <RouterLink :to="{ name: 'Login' }">Login her</RouterLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
