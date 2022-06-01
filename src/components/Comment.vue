<script setup lang="ts">
import { computed, inject, Ref, ref, provide } from 'vue';
// @ts-ignore
import UserBadgeVue from './utils/UserBadge.vue';
// @ts-ignore
import CommentLikesVue from './utils/CommentLikes.vue';
// @ts-ignore
import ReplyVue from './Reply.vue';
// @ts-ignore
import ComementListVue from './ComementList.vue';
// @ts-ignore
import CommentActionsVue from './utils/CommentActions.vue';
import { useStore } from 'vuex'


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
    replySelected: String
}
const props = defineProps<Props>()

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
const store: any = useStore();

const toggleShowDelete = (): void => {
    store.commit('increment')
}
const isMineMessage = props.userEmail == store.state.userName
</script>
<template>
    <li class="w-full">
        <article
            class=" items-center max-w-2xl grid grid-rows-[auto_1fr_auto] m-0 grid-cols-3 sm:grid-cols-card-layout rounded-lg p-4 py-6 bg-white hover:drop-shadow">
            <CommentLikesVue :likes="likes" />
            <UserBadgeVue :isMineMessage="isMineMessage" :fullSize="true" :user-email="userEmail" :date="date" />
            <CommentActionsVue @toggleShowDelete="toggleShowDelete" :isMineMessage="isMineMessage" :id="id"
                @toggleShowReply="toggleShowReply" />
            <p class=" self-baseline col-span-3 sm:col-span-2 sm:order-4 text-grayish-Blue font-normal text-left p-2 h-fit"
                v-html="formatMessage">
            </p>
        </article>
        <ReplyVue :userEmail="userEmail" v-show="replySelected == id" :id="id" />
        <ComementListVue :messages="sub_messages" :isSubMessage="true" />
    </li>
</template>