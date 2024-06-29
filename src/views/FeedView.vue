<script setup lang="ts">
import { useAuthStore } from '@/stores/AuthStore';
import { defineAsyncComponent } from 'vue';
const TypewriterText = defineAsyncComponent(() =>
    import('../components/TypewriterTextComponent.vue')
)
const authStore = useAuthStore()
</script>

<template>
    <div class="container">
        <div class="card shadow">
            <div class="card-body">
                <h1 class="text-center">Feed</h1>
                <div class="container text-center pt-2">
                    <span>Velkommen til dit feed, <span class="name">{{ authStore.user?.email
                            }}</span></span>
                    <TypewriterText text-class="" :display-text-array="[
                        'Arbejder på siden. Den kommer snart mere...']" />
                </div>
            </div>
        </div>
    </div>
</template>
