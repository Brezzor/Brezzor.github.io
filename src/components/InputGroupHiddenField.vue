<script setup lang="ts">
import { computed, ref } from "vue";

defineProps<{
    inputId: string;
    value: string | undefined;
    labelText: string;
    ariaLabel?: string;
    ariaDescribedBy?: string;
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
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">{{ labelText }}</label>
        <div class="input-group">
            <input :type="inputType" class="form-control" :aria-label="ariaLabel" :aria-describedby="ariaDescribedBy"
                readonly :value="value">
            <div class="input-group-text">
                <button class="btn p-0" v-on:click="toggleShow">
                    <i class="bi" aria-hidden="true" :class="showPasswordIcon"></i>
                </button>
            </div>
        </div>
    </div>
</template>