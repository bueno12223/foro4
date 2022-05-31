<script setup lang="ts">
import { ref, watch, Ref } from '@vue/runtime-core';
// @ts-ignore
import UserBadgeVue from './utils/UserBadge.vue';
import { useStore } from 'vuex'
const message: Ref = ref('');
const validateMessage: Ref = ref(false);
const props = defineProps({
    id: {
        type: String,
        required: true
    },
})

watch(message, (newVal: String) => {
    if (newVal.length >= 32) {
        validateMessage.value = true;
    } else {
        validateMessage.value = false;
    }
})
// get userName from store
const store: any = useStore();
const userName = store.state.userName
</script>
<template>
    <section class=" mt-4  block sm:grid grid-cols-reply-layout rounded-lg p-4 pt-6 bg-white hover:drop-shadow">
        <UserBadgeVue :user-email="userName" :id="id" />
        <textarea class="h-24 p-4 w-[90%] border-moderate-blue outline-0 border-solid resize-none border-2 rounded-lg"
            elastic v-model="message" :name="userName" :id="id" cols="30" rows="5"></textarea>
        <button :class="validateMessage ? 'bg-moderate-blue cursor-pointer	' : 'cursor-default bg-light-grayish-blue'"
            class="px-6 py-3 h-min rounded-lg text-white ml-4">REPLY</button>
    </section>
</template>