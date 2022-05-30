<script setup lang="ts">
import { computed, onBeforeMount, Ref, ref, toRefs } from 'vue';
import { Message } from '../types';
// @ts-ignore
import UserBadgeVue from './utils/UserBadge.vue';
// @ts-ignore
import CommentLikesVue from './utils/CommentLikes.vue';
// @ts-ignore
import ReplyVue from './Reply.vue';
// @ts-ignore
import ComementListVue from './ComementList.vue';


interface Props extends Message {
    isSubMessage: Boolean;
    changeReplySelected: Function;
    replySelected: String;

}
const props = defineProps<Props>()
console.log(props)

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
    <div>
        <article class=" grid grid-cols-card-layout rounded-lg p-4 pt-6 w-3/4 m-auto bg-white hover:drop-shadow">
            <CommentLikesVue :likes="likes" />
            <UserBadgeVue :fullSize="true" :user-email="userEmail" :date="date" />
            <button @click="toggleShowReply" class="flex items-center gap-2.5" @mouseenter="currentColor = '#5357B6'"
                @mouseleave="currentColor = '#C5C6EF'">
                <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M.2 4.3 5 .2c.5-.4 1.1-.1 1.1.5v2.1C10.5 3 14 3.8 14 8c0 1.7-1 3.4-2.3 4.3-.4.2-.9-.1-.7-.6 1.2-4-.6-5-4.9-5V9c0 .5-.6.8-1 .5L.1 5.3a.7.7 0 0 1 0-1Z"
                        :fill="currentColor" />
                </svg>
                <p class="font-bold"
                    :class="currentColor == '#5357B6' ? 'text-moderate-blue' : 'text-light-grayish-blue'">
                    Reply</p>
            </button>
            <p class="text-grayish-Blue font-normal text-left p-2 pb-4" v-html="formatMessage"></p>
        </article>
        <ReplyVue :userEmail="userEmail" v-show="replySelected == id" :id="id" />
        <!-- <ComementListVue :messages="sub_messages" :isSubMessage="true" /> -->
    </div>
</template>