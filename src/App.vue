<script setup lang="ts">
import { computed, onBeforeMount, reactive, ref, toRef, toRefs } from 'vue';
import ComementListVue from './components/ComementList.vue';
let messages = ref([]);
let loading = ref(false);
const socket = window.io('http://localhost:5000');
socket.emit('get_messages');

socket.on('get_messages', (data: any) => {
  loading.value = false;
  messages.value = JSON.parse(data);
});
</script>
<template>
  <div class="">
    <div class="m-auto" v-if="loading">Cargandoo..</div>
    <div class="m-auto" v-else>
    </div>
    <ul v-for="{ id, message } in messages" :key="id">
      <li>
        <span>{{ id }}</span>
        <span>{{ message }}</span>
      </li>
    </ul>
  </div>


</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
