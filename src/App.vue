<script setup lang="ts">
import { computed, onBeforeMount, reactive, ref, toRef, toRefs } from 'vue';
// @ts-ignore
import ComementListVue from './components/ComementList.vue';
import Loader from './components/Loader.vue';
let messages = ref([]);
let loading = ref(true);
const socket = window.io('http://localhost:5000');
socket.emit('get_messages');

socket.on('get_messages', (data: any) => {
  loading.value = false;
  messages.value = JSON.parse(data);
  console.log(messages.value);
});
</script>
<template>
  <div class="bg-very-light-gray">
    <div class="m-auto" v-if="loading">
      <Loader />
    </div>
    <div class="m-auto" v-else>
    </div>
    <ComementListVue :messages="messages" :isSubMessage="false" />
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
