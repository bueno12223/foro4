<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
    isMineMessage: {
        type: Boolean,
        default: false
    },
    id: {
        type: String,
        required: true
    },
    sub_id: {
        type: String,
    },
    message: {
        type: String,
    },
})
const store: any = useStore();

const setReply = () => {
    store.commit('setReplySelected', props.id)
}
const setDelete = (id?: string, sub_id?: string) => {
    console.log(id, sub_id)
    store.commit('setDelete', {
        id: id,
        sub_id: sub_id
    })
}

</script>
<template>
    <button v-if="!isMineMessage" @click="setReply()"
        class="flex items-center gap-2.5  col-start-3 h-fit  justify-self-end group">
        <svg class=" group-hover:fill-moderate-blue fill-light-grayish-blue" width="14" height="13" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M.2 4.3 5 .2c.5-.4 1.1-.1 1.1.5v2.1C10.5 3 14 3.8 14 8c0 1.7-1 3.4-2.3 4.3-.4.2-.9-.1-.7-.6 1.2-4-.6-5-4.9-5V9c0 .5-.6.8-1 .5L.1 5.3a.7.7 0 0 1 0-1Z" />
        </svg>
        <p class="font-bold text-light-grayish-blue justify-self-end group-hover:text-moderate-blue">
            Reply</p>
    </button>
    <div v-else class="flex col-span-2 gap-4 justify-self-end md:col-span-1">

        <button @click="setDelete(id, sub_id)" class="flex items-center gap-2.5 col-start-3 h-fit group">
            <svg class=" group-hover:fill-soft-red fill-pale-red" width="12" height="14" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <!-- @ts-ignore -->
                <path
                    d="M8.6 1.2h3v1.1H0V1.2h2.9l1-1.2h3.8l1 1.2ZM2.6 14c-.8 0-1.4-.7-1.4-1.6V3.5h9.2v9c0 .8-.7 1.5-1.6 1.5H2.7Z" />
            </svg>
            <p class="font-bold text-pale-red justify-self-end group-hover:text-soft-red">
                Delete</p>
        </button>
        <button @click="setReply()" class="flex items-center gap-2.5 col-start-3 h-fit group">
            <svg class=" group-hover:fill-moderate-blue fill-light-grayish-blue" width="14" height="14" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="m11 .5 2.5 2.4c.6.6.7 1.7 0 2.3l-7.8 8c-.3.2-.7.4-1 .4L1 14H.9A.9.9 0 0 1 0 13l.4-3.7c0-.4.2-.7.5-1L8.8.4c.6-.6 1.6-.5 2.3 0Zm-2.8 3 2.3 2.3L12.3 4 9.9 1.7 8.2 3.4Z" />
            </svg>
            <p class="font-bold text-light-grayish-blue justify-self-end group-hover:text-moderate-blue">
                Edit</p>
        </button>
    </div>
</template>