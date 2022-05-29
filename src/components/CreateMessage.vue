<script setup lang="ts">
// @ts-ignore

import UserBadgeVue from './utils/UserBadge.vue';
import { ref, computed, onBeforeMount, reactive, toRefs } from 'vue';
const props = defineProps({
    userEmail: {
        type: String,
        required: true
    }
})
const userEmail = ref(props.userEmail);
</script>
<template>
    <article class=" grid grid-cols-card-layout rounded-lg p-4 pt-6 w-3/4 m-auto bg-white hover:drop-shadow">
        <UserBadgeVue :userEmail="userEmail" />
    </article>
</template>