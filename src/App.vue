<script setup lang="ts">
import { Ref, ref, computed } from 'vue';
import Loader from './components/Loader.vue';
import Banner from './components/utils/Banner.vue';
import { useStore } from 'vuex'
// @ts-ignore
import ComementList from './components/ComementList.vue';
// @ts-ignore
import DeleteBanner from './components/utils/DeleteBanner.vue';
// @ts-ignore
import RegisterBanner from './components/utils/RegisterBanner.vue';
// @ts-ignore

import Reply from './components/Reply.vue';
let messages: Ref = ref([]);
let loading: Ref = ref(true);
const store: any = useStore();

// connect to socket
const socket = window.io('http://localhost:5000');

socket.on('get_messages', (data: any) => {
  loading.value = false;
  messages.value = JSON.parse(data);
  // save messages to store
  store.commit('setMessages', JSON.parse(data));
});
socket.on("connect", () => {
  store.commit('setSocket', socket);
  socket.emit('get_messages');
})

// set uerName

const registerUser = (userName: string): void => {
  store.commit('changeUserName', userName)
}
const getUserNameShow = computed(() => {
  return !store.state.userName
})
</script>
<template>
  <div class="">
    <div class="bg-very-light-gray">
      <div class="m-auto" v-if="!loading && getUserNameShow">
        <Loader />
      </div>
      <div class="" v-else>
        <ComementList :messages="messages" :isSubMessage="false" />
      </div>
    </div>
    <DeleteBanner />
    <RegisterBanner v-show="getUserNameShow" @registerUser="registerUser" />
  </div>


</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  widows: 100%;
  height: 100vh;
  background-color: #F5F6FA;
}
</style>
