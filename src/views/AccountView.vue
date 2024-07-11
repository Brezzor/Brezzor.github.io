<script setup lang="ts">
import { useUserStore } from '@/stores/UserStore'
import { defineAsyncComponent } from 'vue';
const userStore = useUserStore()
const hiddenField = defineAsyncComponent(() => import('../components/InputGroupHiddenField.vue'))
const popup = () => {
  alert('Nothing yet')
}
</script>

<template>
  <div class="container">
    <div class="card shadow">
      <div class="card-body">
        <h1 class="text-center">{{ $t('AccountPage.Title') }}</h1>
        <div class="row justify-content-center">
          <div class="col-6">
            <hiddenField label-id="userId" :value="userStore.user?.uid" label="User id" ariaDescribedBy="display-uid"
              ariaLabel="UserId"></hiddenField>
            <div class="input-group mb-3">
              <span class="input-group-text" id="Displayname">Displayname</span>
              <input type="text" class="form-control" aria-label="UserId" aria-describedby="display-userId" readonly
                :value="userStore.user?.displayName">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="Email">Email</span>
              <input type="text" class="form-control" aria-label="Email" aria-describedby="display-email" readonly
                :value="userStore.user?.email">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="PhoneNumber">PhoneNumber</span>
              <input type="tel" class="form-control" aria-label="PhoneNumber" aria-describedby="display-phone-number"
                readonly :value="userStore.user?.phoneNumber">
            </div>
            <hiddenField label-id="providerId" :value="userStore.user?.providerId" label="provider id"
              ariaDescribedBy="display-provider-id" ariaLabel="ProviderId"></hiddenField>
            <div class="input-group mb-3">
              <span class="input-group-text" id="EmailVerified">EmailVerified</span>
              <input type="text" class="form-control" aria-label="Verified" aria-describedby="display-email-verified"
                readonly :value="userStore.user?.emailVerified">
            </div>
            <div class="gap-4">
              <button class="btn btn-success me-2" type="button" v-on:click="popup()">Edit</button>
              <button class="btn btn-success" type="button" v-on:click="userStore.sendEmailVerify()"
                v-if="!userStore.user?.emailVerified">Verify Email</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
