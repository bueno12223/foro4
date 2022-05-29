<script setup lang="ts">
import { computed, ref, toRefs } from 'vue';
import { Message } from '../types';
// @ts-ignore
import UserBadgeVue from './utils/UserBadge.vue';
// @ts-ignore
import CommentLikesVue from './utils/CommentLikes.vue';
const props = defineProps({
    id: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    userEmail: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: () => new Date()
    }
})
</script>
<template>
    <article class=" grid grid-cols-card-layout rounded-lg p-4 w-3/4 m-auto bg-white hover:drop-shadow">
        <CommentLikesVue :likes="likes" />
        <UserBadgeVue :user-email="userEmail" :date="date" />

    </article>
</template>