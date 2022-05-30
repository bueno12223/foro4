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
    <ul class="flex flex-col gap-5 p-10">
        <li v-for="{ id, message, likes, userEmail, date, isChanged } in messages" :key="id">
            <Comment :message="message" :likes="likes" :replySelected="replySelected"
                :changeReplySelected="changeReplySelected" :id="id" :isChanged="isChanged" :user-email="userEmail"
                :date="date" :isSubMessage="isSubMessage" />
        </li>

    </ul>
</template>