<script setup lang="ts">
import { ref, watch, Ref, computed } from '@vue/runtime-core';
// @ts-ignore
import UserBadgeVue from './utils/UserBadge.vue';
import { useStore } from 'vuex'
const store: any = useStore();

const validateMessage: Ref = ref(false);
const props = defineProps({
    id: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    isMineMessage: {
        type: Boolean,
        default: false
    },
    isNew: {
        type: Boolean,
        default: false
    },
})
const getMessageInital =() => {
    if(props.isMineMessage){
        return (store.state.messages.find((message: any) => message.id == props.id) || {}).message
    }
    return ''
}
const message: Ref = ref(getMessageInital());
watch(message, (newVal: String) => {
    if (newVal.length >= 1) {
        validateMessage.value = true;
    } else {
        validateMessage.value = false;
    }
})
// get userName from store
const userName = store.state.userName

const saveMessaege = (): void => {
    // get socket from store
    const socket = store.state.socket
    if (validateMessage.value) {
        if(props.isMineMessage){
            socket.emit('update_message', {
                message_id: props.id,
                message: message.value
            })
        }else if(props.isNew){
            socket.emit('message', {
                message: message.value,
                userEmail: userName,
            });
        } else {
            socket.emit('sub_message', {
                message: message.value,
                userEmail: userName,
                message_id: props.id
            });
        }

        message.value = '';
        store.commit('setReplySelected', '')
    }
}
const getButtonName = computed(() => {
    if (props.isNew) {
        return 'Send'
    } else if(props.isMineMessage) {
        return 'Edit'
    } else {
        return 'Reply'
    }
})
watch
</script>
<template>
    <section class=" mt-4  block sm:grid grid-cols-reply-layout rounded-lg p-4 pt-6 bg-white hover:drop-shadow">
        <UserBadgeVue :user-email="userName" />
        <textarea class="h-24 p-4 w-[90%] border-moderate-blue outline-0 border-solid resize-none border-2 rounded-lg"
            v-model="message" :name="userName" :id="id" cols="30" rows="5"></textarea>
        <button @click="saveMessaege"
            :class="validateMessage ? 'bg-moderate-blue cursor-pointer	' : 'cursor-default bg-light-grayish-blue'"
            class="px-6 py-3 h-min rounded-lg text-white ml-4">{{ getButtonName }}</button>
    </section>
</template>