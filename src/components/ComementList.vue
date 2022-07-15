<script setup lang="ts">
import { ref, Ref } from '@vue/runtime-core';
import { Message } from '../types';
import { useStore } from 'vuex';
// @ts-ignore
import Reply from './Reply.vue';
// @ts-ignore
import Comment from './Comment.vue';

// get userName from store
const store: any = useStore();
const userName: Ref = ref(store.state.userName)
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
    <TransitionGroup class="grid gap-5 py-8 px-4 w-fit m-auto justify-items-center" v-if="(messages && messages.length != 0)"
        tag="ul" name="fade" >
        <Comment v-for="{ id, message, likes, userEmail, date, isChanged, sub_messages } in messages" :key="id"
            :is-sub-message="false" :replySelected="replySelected" :changeReplySelected="changeReplySelected" :id="id"
            :message="message" :likes="likes" :user-email="userEmail" :date="date" :is-changed="isChanged"
            :sub_messages="sub_messages" :isSubMessage="isSubMessage"></Comment>
        <Reply :isNew="true" id="main" :userEmail="userName" />

    </TransitionGroup>
</template>