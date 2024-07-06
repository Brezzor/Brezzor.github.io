<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const ThemeSwitch = defineAsyncComponent(() =>
    import('@/components/ThemeSwitchComponent.vue')
)
</script>

<template>
    <div class="fab">
        <div class="dropup">
            <button type="button" class="btn btn-primary" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-three-dots"></i>
            </button>
            <ul class="dropdown-menu">
                <li>
                    <div class="dropdown-item-text">
                        <ThemeSwitch></ThemeSwitch>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.fab {
    position: fixed;
    right: 1rem;
    bottom: 4rem;
    z-index: 1100;
}

.dropdown-toggle::after {
    display: inline-block;
    margin-left: .255em;
    vertical-align: .255em;
    border-top: 0;
    border-right: .3em solid transparent;
    border-bottom: .3em solid;
    border-left: .3em solid transparent
}
</style>
