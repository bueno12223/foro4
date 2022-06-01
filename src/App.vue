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
let messages: Ref = ref([]);
let loading: Ref = ref(true);

// connect to socket
const socket = window.io('http://localhost:5000');
socket.emit('get_messages');

socket.on('get_messages', (data: any) => {
  loading.value = false;
  console.log(data);
  messages.value = JSON.parse(data);
});
socket.on("connect", () => {
  store.commit('setSocket', socket);
});

// set uerName
const store: any = useStore();
// hanlder delete message
const toggleShowDelete = (): void => {
  store.commit('increment')
}
const registerUser = (userName: string): void => {
  store.commit('changeUserName', userName)
}
const getUserName = computed(() => {
  return !store.state.userName
})
</script>
<template>
  <div class="">
    <div class="bg-very-light-gray">
      <div class="m-auto" v-if="!loading && getUserName">
        <Loader />
      </div>
      <div class="" v-else>
        <ComementList :messages="messages" :isSubMessage="false" />
      </div>
    </div>
    <DeleteBanner />
    <RegisterBanner v-show="getUserName" @registerUser="registerUser" />
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
