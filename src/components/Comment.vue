<script setup lang="ts">
import { computed, onBeforeMount, Ref, ref, toRefs } from 'vue';
// @ts-ignore
import UserBadgeVue from './utils/UserBadge.vue';
// @ts-ignore
import CommentLikesVue from './utils/CommentLikes.vue';
// @ts-ignore
import ReplyVue from './Reply.vue';
// @ts-ignore
import ComementListVue from './ComementList.vue';

export interface SubMessage {
    id: string;
    message: string;
    userEmail: string;
    likes: number;
    isChanged: boolean;
    date: number;
}

interface Props {
    id: string;
    message: string;
    userEmail: string;
    likes: number;
    isChanged: boolean;
    date: number;
    sub_messages?: SubMessage[];
    isSubMessage: Boolean;
    changeReplySelected: Function;
    replySelected: String;

}
const props = defineProps<Props>()

const currentColor: Ref = ref('#C5C6EF')
const formatMessage = computed(() => {
    return props.message.replace(/([@])\w+/g, (match) => {
        return `<span class="font-medium text-moderate-blue cursor-pointer">${match}</span>`
    })
})
const toggleShowReply: any = () => {
    if (props.id == props.replySelected) {
        props.changeReplySelected('')
    } else {
        props.changeReplySelected(props.id)
    }
}
</script>
<template>
    <li>
        <article
            class=" items-center max-w-2xl grid grid-rows-[auto_1fr_auto] min-w-[240px] m-0 grid-cols-3 sm:grid-cols-card-layout rounded-lg p-4 py-6 bg-white hover:drop-shadow">
            <CommentLikesVue :likes="likes" />
            <UserBadgeVue :fullSize="true" :user-email="userEmail" :date="date" />
            <button @click="toggleShowReply" class="flex items-center gap-2.5 order-4 sm:order-2 col-start-3 h-fit"
                @mouseenter="currentColor = '#5357B6'" @mouseleave="currentColor = '#C5C6EF'">
                <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M.2 4.3 5 .2c.5-.4 1.1-.1 1.1.5v2.1C10.5 3 14 3.8 14 8c0 1.7-1 3.4-2.3 4.3-.4.2-.9-.1-.7-.6 1.2-4-.6-5-4.9-5V9c0 .5-.6.8-1 .5L.1 5.3a.7.7 0 0 1 0-1Z"
                        :fill="currentColor" />
                </svg>
                <p class="font-bold"
                    :class="currentColor == '#5357B6' ? 'text-moderate-blue' : 'text-light-grayish-blue'">
                    Reply</p>
            </button>
            <p class=" self-baseline col-span-3 sm:col-span-2 sm:order-4 text-grayish-Blue font-normal text-left p-2 h-fit"
                v-html="formatMessage">
            </p>
        </article>
        <ReplyVue :userEmail="userEmail" v-show="replySelected == id" :id="id" />
        <ComementListVue :messages="sub_messages" :isSubMessage="true" />
    </li>
</template>