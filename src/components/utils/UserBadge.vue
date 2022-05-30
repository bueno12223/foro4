<script setup lang="ts">
import { ref, computed } from 'vue';
import { formatRelative } from 'date-fns'
// @ts-ignore
import md5 from 'md5'
const props = defineProps({
    userEmail: {
        type: String,
        required: true
    },
    date: {
        type: Number,
        default: () => 1653863802
    },
    fullSize: {
        type: Boolean,
        default: false,
    }
})
const formatDate = computed(() => {
    return formatRelative(new Date(props.date), new Date())
})
const getGravatar = computed(() => {
    return `https://www.gravatar.com/avatar/${md5(props.userEmail)}?s=32&f=y&d=retro`
})
const formatClass = computed(() => {
    return props.fullSize ? 'w-8' : 'w-10 h-10 m-auto ml-4'
})
</script>
<template>
    <section class="col-span-1 flex gap-4 align-center pl-1">
        <img :src="getGravatar" alt="userEmail" class="rounded-full m-0" :class="formatClass">
        <p v-if="fullSize" class="mt-1 font-medium">{{ userEmail }}</p>
        <p v-if="fullSize" class="mt-1 text-grayish-Blue font-norrmal">{{ formatDate }}</p>
    </section>
</template>