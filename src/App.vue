<script setup lang="ts">
import { Ref, ref } from 'vue';
import Loader from './components/Loader.vue';
import Banner from './components/utils/Banner.vue';
import { useStore } from 'vuex'
// @ts-ignore
import ComementList from './components/ComementList.vue';
// @ts-ignore
import DeleteBanner from './components/utils/DeleteBanner.vue';
let messages: Ref = ref([]);
let loading: Ref = ref(true);

// connect to socket
const socket = window.io('http://localhost:5000');
socket.emit('get_messages');

socket.on('get_messages', (data: any) => {
  loading.value = false;
  messages.value = JSON.parse(data);
  console.log(messages.value);
});

// set uerName
const store: any = useStore();
store.commit('changeUserName', 'jesus')

// hanlder delete message
const toggleShowDelete = (): void => {
  store.commit('increment')
}
</script>
<template>
  <div class="">
    <div class="bg-very-light-gray">
      <div class="m-auto" v-if="loading">
        <Loader />
      </div>
      <div class="" v-else>
        <ComementList :messages="messages" :isSubMessage="false" />
      </div>
    </div>
    <DeleteBanner />
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
