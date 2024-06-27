<script setup lang="ts">
import { getAuth } from 'firebase/auth';
import { defineAsyncComponent } from 'vue';
const TypewriterText = defineAsyncComponent(() =>
    import('../components/TypewriterTextComponent.vue')
)
const currentUser = getAuth().currentUser
</script>

<template>
    <div class="container">
        <div class="card shadow">
            <div class="card-body">
                <h1 class="text-center">Feed</h1>
                <div class="container text-center pt-2">
                    <span>Velkommen til dit feed, <span class="name">{{ currentUser?.email }}</span></span>
                    <TypewriterText text-class="" :display-text-array="[
                        'Arbejder på siden. Den kommer snart mere...']" />
                </div>
            </div>
        </div>
    </div>
</template>
