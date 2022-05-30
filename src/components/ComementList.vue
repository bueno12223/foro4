<script setup lang="ts">
import { ref, Ref } from '@vue/runtime-core';
import { Message } from '../types';
// @ts-ignore
import Comment from './Comment.vue';
interface Props {
    messages: Message[];
}
const props = defineProps<Props>()
const replySelected: Ref = ref('')
const changeReplySelected = (id: string): void => {
    replySelected.value = id
}
</script>
<template>
    <div class="">
        <ul class="flex flex-col gap-5 p-10">
            <li v-for="{ id, message, likes, userEmail, date } in messages" :key="id">
                <Comment :replySelected="replySelected" :changeReplySelected="changeReplySelected" :id="id"
                    :message="message" :likes="likes" :user-email="userEmail" :date="date" />
            </li>

        </ul>
    </div>
</template>