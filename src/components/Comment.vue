<script setup lang="ts">
import { Message } from '../types';
const props = defineProps({
    id: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
})
</script>
<template>
    <li class="rounded-lg">
        <span>{{ id }}</span>
        <span>{{ message }}</span>
    </li>
</template>