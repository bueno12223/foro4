<script setup lang="ts">
import { computed } from 'vue';
// @ts-ignore
import UserBadgeVue from './utils/UserBadge.vue';
// @ts-ignore
import CommentLikesVue from './utils/CommentLikes.vue';
// @ts-ignore
import CommentActionsVue from './utils/CommentActions.vue';
import { useStore } from 'vuex'

interface Props {
    id: string;
    message: string;
    userEmail: string;
    likes: number;
    isChanged: boolean;
    date: number;
    message_id: string
}
const props = defineProps<Props>()

const formatMessage = computed(() => {
    return props.message.replace(/([@])\w+/g, (match) => {
        return `<span class="font-medium text-moderate-blue cursor-pointer">${match}</span>`
    })
})
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
            <CommentLikesVue :likes="likes" :message_id="message_id" :id="id" />
            <UserBadgeVue :isMineMessage="isMineMessage" :fullSize="true" :user-email="userEmail" :date="date" />
            <CommentActionsVue @toggleShowDelete="toggleShowDelete" :isMineMessage="isMineMessage" :sub_id="id" :id="message_id" />
            <p class=" self-baseline col-span-3 sm:col-span-2 sm:order-4 text-grayish-Blue font-normal text-left p-2 h-fit"
                v-html="formatMessage">
            </p>
        </article>
    </li>
</template>
<style>
/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>