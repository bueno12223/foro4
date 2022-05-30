<script setup lang="ts">
import { ref, watch, Ref } from '@vue/runtime-core';
// @ts-ignore
import UserBadgeVue from './utils/UserBadge.vue';
const message: Ref = ref('');
const props = defineProps({
    userEmail: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
})
</script>
<template>
    <section class=" mt-4 grid grid-cols-reply-layout rounded-lg p-4 pt-6 w-3/4 m-auto bg-white hover:drop-shadow">
        <UserBadgeVue :user-email="userEmail" :id="id" />
        <textarea contentEditable
            class="h-24 p-4 border-moderate-blue outline-0 border-solid resize-none border-2 rounded-lg" elastic
            v-model="message" :name="userEmail" :id="id" cols="30" rows="5"></textarea>
        <button class="px-6 py-3 h-min bg-moderate-blue rounded-lg text-white ml-4">REPLY</button>
    </section>
</template>