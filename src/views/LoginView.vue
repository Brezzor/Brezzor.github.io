<script setup lang="ts">
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref('')
const password = ref('')
const errMsg = ref('')
const router = useRouter()
const signIn = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then(() => {
            router.push({ name: 'Feed' })
        })
        .catch((error) => {
            switch (error.code) {
                case 'auth/invalid-email':
                    errMsg.value = 'Invalid email'
                    break
                case 'auth/user-not-found':
                    errMsg.value = 'No account with that email was found'
                    break
                case 'auth/wrong-password':
                    errMsg.value = 'Incorrect password'
                    break
                default:
                    errMsg.value = 'Email or password was incorrect'
                    break
            }
        })
}
</script>

<template>
    <div class="container">
        <div class="card shadow">
            <div class="card-body">
                <h1 class="text-center">Login</h1>
                <div class="m-3 m-sm-4 m-md-5">
                    <div class="d-flex justify-content-center">
                        <form @submit.prevent>
                            <div class="mb-3" v-if="errMsg">
                                <span class="text-danger fw-bold mb-3">{{ errMsg }}</span>
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
                                <button class="btn btn-primary" v-on:click="signIn()">Login</button>
                            </div>
                            <div>
                                <span>Har du ikke en konto? </span>
                                <RouterLink :to="{ name: 'Register' }">Register</RouterLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
