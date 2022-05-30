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
watch(message, (value: String) => {
    message.value = value.replace(/([@])\w+/g, (match: String) => {
        return `<span class="font-medium text-moderate-blue cursor-pointer">${match}</span>`
    })
})
</script>
<template>
    <section class="col-span-1 flex gap-4 align-center pl-1">
        <UserBadgeVue :user-email="userEmail" :id="id" />
        <textarea v-model.lazy="message" :name="userEmail" :id="id" cols="30" rows="10"></textarea>
    </section>
</template>