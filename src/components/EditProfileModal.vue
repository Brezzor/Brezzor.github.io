<script setup lang="ts">
import { useUserStore } from '@/stores/UserStore';
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid'
const userStore = useUserStore()
const uuid = uuidv4()
const newDisplayName = ref<string | null | undefined>(userStore.user?.displayName)
const newEmail = ref<string | null | undefined>(userStore.user?.email)
const file = ref<File | null>()
const onChange = (event: Event) => {
    const target = event.target as HTMLInputElement

    const selectedFile = target.files ? target.files[0] : null
    file.value = selectedFile
}
</script>

<template>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#' + uuid">
        {{ $t('Edit') }}
    </button>

    <div class="modal fade" :id="uuid" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">{{ userStore.user?.email }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="ProfilePhoto" class="form-label">ProfilePhoto</label>
                        <input type="file" class="form-control" aria-label="ProfilePhoto"
                            aria-describedby="display-ProfilePhoto" v-on:change="onChange">
                    </div>
                    <div class="mb-3">
                        <label for="Displayname" class="form-label">Displayname</label>
                        <input type="text" class="form-control" aria-label="Displayname"
                            aria-describedby="display-Displayname" v-model="newDisplayName">
                    </div>
                    <div class="mb-3">
                        <label for="Email" class="form-label">Email</label>
                        <input type="email" class="form-control" aria-label="Email" aria-describedby="display-Email"
                            v-model="newEmail">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ $t('Close') }}</button>
                    <button v-if="userStore.user?.photoURL" type="button" class="btn btn-secondary"
                        data-bs-dismiss="modal" v-on:click="userStore.removeProfilePhoto">{{
                            $t('DeleteImage') }}</button>
                    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal"
                        v-on:click="userStore.updateUserInfo(newDisplayName, file, newEmail)">{{ $t('Save')
                        }}</button>
                </div>
            </div>
        </div>
    </div>
</template>