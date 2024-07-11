<script setup lang="ts">
import { computed, ref } from "vue";

defineProps<{
    labelId: string;
    value: string | undefined;
    label: string;
    ariaLabel: string;
    ariaDescribedBy: string;
}>()

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
    <div class="input-group mb-3">
        <span class="input-group-text" :id="labelId">{{ label }}</span>
        <input :type="inputType" class="form-control" aria-label="UserId" aria-describedby="display-userId" readonly
            :value="value">
        <div class="input-group-text">
            <button class="btn py-0" v-on:click="toggleShow">
                <i class="bi" aria-hidden="true" :class="showPasswordIcon"></i>
            </button>
        </div>
    </div>
</template>