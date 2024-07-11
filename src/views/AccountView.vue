<script setup lang="ts">
import { useUserStore } from '@/stores/UserStore'
import { defineAsyncComponent } from 'vue';
const userStore = useUserStore()
const hiddenField = defineAsyncComponent(() => import('../components/InputGroupHiddenField.vue'))
const popup = () => {
  alert('Nothing yet... coming soon!')
}
</script>

<template>
  <div class="container">
    <div class="card shadow">
      <div class="card-body">
        <h1 class="text-center">{{ $t('AccountPage.Title') }}</h1>
        <div class="row justify-content-center">
          <div class="col-12 col-md-6 col-lg-4">
            <hiddenField input-id="userId" :value="userStore.user?.uid" label-text="Uid"></hiddenField>
            <hiddenField input-id="providerId" :value="userStore.user?.providerId" label-text="provider id">
            </hiddenField>
            <div class="mb-3">
              <label for="Displayname" class="form-label">Displayname</label>
              <input type="text" class="form-control" aria-label="Displayname" aria-describedby="display-Displayname"
                readonly :value="userStore.user?.displayName">
            </div>
            <div class="mb-3">
              <label for="Email" class="form-label">Email</label>
              <input type="text" class="form-control" aria-label="Email" aria-describedby="display-Email" readonly
                :value="userStore.user?.email">
            </div>
            <div class="mb-3">
              <label for="PhoneNumber" class="form-label">PhoneNumber</label>
              <input type="text" class="form-control" aria-label="PhoneNumber" aria-describedby="display-Phone-Number"
                readonly :value="userStore.user?.phoneNumber">
            </div>
            <div class="mb-3">
              <label for="EmailVerified" class="form-label">EmailVerified</label>
              <input type="text" class="form-control" aria-label="EmailVerified"
                aria-describedby="display-Email-Verified" readonly :value="userStore.user?.emailVerified">
            </div>
            <button class="btn btn-success me-2" type="button" v-on:click="popup()">Edit</button>
            <button class="btn btn-success" type="button" v-on:click="userStore.sendEmailVerify()"
              v-if="!userStore.user?.emailVerified">Verify Email</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
