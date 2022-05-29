<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps({
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
    <section class="col-span-1 flex gap-4 align-center">
        <svg class="fill-moderate-blue" stroke="currentColor" stroke-width="0" viewBox="0 0 496 512" height="32"
            width="32" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M248 8a248 248 0 1 0 0 496 248 248 0 0 0 0-496zm0 96a88 88 0 1 1 0 176 88 88 0 0 1 0-176zm0 344c-59 0-111-27-146-68 18-36 55-60 98-60l7 1c13 4 27 7 41 7s28-3 41-7l7-1c43 0 80 24 99 60-36 41-88 68-147 68z"
                stroke="none" />
        </svg>
        <p class="mt-1">{{ userEmail }}</p>
        <p>{{ date }}</p>
    </section>
</template>