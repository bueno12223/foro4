<script setup lang="ts">
import { ref, Ref } from 'vue';
import { useStore } from 'vuex';

const hoveringPlus = ref('fill-light-grayish-blue')
const hoveringMinus = ref('fill-light-grayish-blue')
const store = useStore();
const props = defineProps({
    likes: {
        type: Number,
        default: 0,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    message_id: {
        type: String,
        required: false
    },
})
const handleLike = (isLike: boolean): void => {
    const socket = store.state.socket
    if(props.likes != 0 || isLike) {
        if(props.message_id){
            socket.emit('like_sub_message', {
                message_id: props.message_id,
                sub_message_id: props.id,
                is_like: isLike,
        })
        } else {
            socket.emit('like_message', {
                message_id: props.id,
                is_like: isLike,
        })
        }

    }
}
</script>
<template>
    <section
        class=" order-3 m-auto	bg-light-gray flex sm:flex-col px-4 py-2 h-fit sm:mb-[42px] items-center rounded-lg gap-3 sm:row-start-1 sm:row-end-3 justify-self-center">
        <svg @click="handleLike(true)" :class="hoveringPlus" @mouseenter="hoveringPlus = 'fill-moderate-blue'" class="cursor-pointer"
            @mouseleave="hoveringPlus = 'fill-light-grayish-blue'" width="11" height="11" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6.33 10.9c.14 0 .25-.05.35-.15.1-.1.15-.22.15-.36V7h3.32c.13 0 .25-.05.35-.14.1-.1.15-.22.15-.36V5.27a.48.48 0 0 0-.15-.35.48.48 0 0 0-.35-.15H6.83V1.4a.48.48 0 0 0-.15-.36.48.48 0 0 0-.35-.14H4.91a.48.48 0 0 0-.35.14c-.1.1-.15.22-.15.36v3.37H1.08a.48.48 0 0 0-.35.15c-.1.1-.15.22-.15.35V6.5c0 .14.05.26.15.36.1.1.21.14.35.14H4.4v3.4c0 .13.05.25.15.35.1.1.22.15.35.15h1.42Z" />
        </svg>
        <p class="font-medium text-moderate-blue">{{ likes }}</p>
        <svg @click="handleLike(false)" :class="hoveringMinus" @mouseenter="hoveringMinus = 'fill-moderate-blue'" class="cursor-pointer"
            @mouseleave="hoveringMinus = 'fill-light-grayish-blue'" width="11" height="3" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="m9.3 2.7.5-.2.2-.4V.7c0-.1 0-.3-.2-.4a.9.9 0 0 0-.5-.1H.8L.2.3 0 .7v1.4c0 .2 0 .3.2.4l.6.2h8.5Z" />
        </svg>
    </section>
</template>