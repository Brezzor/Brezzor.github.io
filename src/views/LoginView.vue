<script setup lang="ts">
import { computed, ref } from 'vue'
import { useAuthStore } from '@/stores/AuthStore'
const authStore = useAuthStore()
const email = ref<string>('')
const password = ref<string>('')
const showPassword = ref<boolean>(false)
const toggleShow = () => {
  showPassword.value = !showPassword.value
}
const inputType = computed(() => {
  return showPassword.value ? 'text' : 'password'
})
const showPasswordIcon = computed(() => {
  return showPassword.value ? 'bi-eye' : 'bi-eye-slash'
})
</script>

<template>
  <div class="container">
    <div class="card shadow">
      <div class="card-body">
        <h1 class="text-center">{{ $t('Login') }}</h1>
        <div class="m-3 m-sm-4 m-md-5">
          <div class="d-flex justify-content-center">
            <form @submit.prevent>
              <div class="mb-3" v-if="authStore.errMsg">
                <span class="text-danger fw-bold mb-3">{{ authStore.errMsg }}</span>
              </div>
              <div class="mb-3">
                <label for="loginEmail" class="form-label">{{ $t('LoginPage.Email') }}</label>
                <input type="email" name="email" id="loginEmail" placeholder="Email" class="form-control"
                  v-model="email" />
              </div>
              <div class="mb-3">
                <label for="loginPassword" class="form-label">{{ $t('LoginPage.Password') }}</label>
                <div class="input-group">
                  <input :type="inputType" name="password" id="loginPassword" :placeholder="$t('LoginPage.Password')"
                    class="form-control" v-model="password" />
                  <div class="input-group-text">
                    <button class="btn p-0" v-on:click="toggleShow">
                      <i class="bi" aria-hidden="true" :class="showPasswordIcon"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" name="loginRemember" id="loginRemember"
                    v-model="authStore.rememberMe" />
                  <label class="form-check-label" for="loginRemember">
                    {{ $t('LoginPage.Remember') }}
                  </label>
                </div>
              </div>
              <div class="mb-3">
                <button class="btn btn-primary" v-on:click="authStore.loginUser(email, password)">
                  {{ $t('Login') }}
                </button>
              </div>
              <div>
                <span>{{ $t('LoginPage.RegisterMessage.First') }}? </span>
                <RouterLink :to="{ name: 'Register' }">{{ $t('LoginPage.RegisterMessage.Second') }}
                </RouterLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
