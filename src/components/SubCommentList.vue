<script setup lang="ts">
import { Message } from '../types';
// @ts-ignore
import SubComment from './SubComment.vue';
interface Props {
    messages?: Message[];
    message_id: string;
}
const props = defineProps<Props>()
</script>
<template>
    <ul class="grid gap-5 py-8 px-4 w-fit m-auto justify-items-center px-0 py-0 w-auto justify-items-stretch mt-8 border-l-2	ml-[4%] pl-[4%] border-light-gray" v-if="(messages && messages.length != 0)">
        <SubComment v-for="{ id, message, likes, userEmail, date, isChanged, sub_messages } in messages" :key="id" :id="id"
            :message="message" :likes="likes" :user-email="userEmail" :date="date" :is-changed="isChanged" :message_id="message_id" />
    </ul>
</template>