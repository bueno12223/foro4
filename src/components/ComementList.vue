<script setup lang="ts">
import { Message } from '../types';
// @ts-ignore
import Comment from './Comment.vue';
interface Props {
    messages: Message[];
}
const props = defineProps<Props>()

</script>
<template>
    <div class="">
        <ul v-for="{ id, message } in messages" :key="id">
            <Comment :id="id" :message="message" />
        </ul>
    </div>
</template>