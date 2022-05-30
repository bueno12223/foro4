<script setup lang="ts">
import { ref, Ref } from '@vue/runtime-core';
import { Message } from '../types';
// @ts-ignore
import Comment from './Comment.vue';
interface Props {
    messages?: Message[];
    isSubMessage: boolean;
}
const props = defineProps<Props>()
const replySelected: Ref = ref('')
const changeReplySelected = (id: string): void => {
    replySelected.value = id
}
</script>
<template>
    <ul class="grid gap-5 py-8 px-4 w-fit m-auto justify-items-center" v-if="(messages && messages.length != 0)"
        :class="isSubMessage ? 'px-0 py-0 w-auto justify-items-stretch mt-8 border-l-2	ml-[4%] pl-[4%] border-light-gray' : ''">
        <Comment v-for="{ id, message, likes, userEmail, date, isChanged, sub_messages } in messages" :key="id"
            :is-sub-message="false" :replySelected="replySelected" :changeReplySelected="changeReplySelected" :id="id"
            :message="message" :likes="likes" :user-email="userEmail" :date="date" :is-changed="isChanged"
            :sub_messages="sub_messages" />

    </ul>
</template>