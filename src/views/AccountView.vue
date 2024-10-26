<script setup lang="ts">
import { useUserStore } from '@/stores/UserStore'
import { defineAsyncComponent } from 'vue';
const userStore = useUserStore()
const hiddenField = defineAsyncComponent(() => import('@/components/InputGroupHiddenField.vue'))
const EditProfileModal = defineAsyncComponent(() => import('@/components/EditProfileModal.vue'))
</script>

<template>
  <div class="container">
    <div class="card shadow">
      <div class="card-body">
        <h1 class="text-center">{{ $t('AccountPage.Title') }}</h1>
        <div class="row justify-content-center">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="mb-3">
              <label for="ProfilePhoto" class="form-label">Profile picture</label>
              <div class="d-flex justify-content-center">
                <i v-if="!userStore.user?.photoURL"
                  class="profile-placeholder bi bi-person border border-3 rounded-circle"></i>
                <img v-else type="file" class="profile-picture border border-3 rounded-circle"
                  :src="userStore.user?.photoURL!" aria-label="ProfilePhoto">
              </div>
            </div>
            <hiddenField input-id="userId" :value="userStore.user?.uid" label-text="Uid" />
            <hiddenField input-id="providerId" :value="userStore.user?.providerId" label-text="provider id" />
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
            <EditProfileModal class="me-2" />
            <button class="btn btn-success" type="button" v-on:click="userStore.sendEmailVerify()"
              v-if="!userStore.user?.emailVerified">Verify Email</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.profile-picture {
  height: 10rem;
  width: auto;
}

.profile-placeholder {
  display: inline-block;
  vertical-align: middle;
  font-size: 10rem;
  line-height: 0;
}
</style>