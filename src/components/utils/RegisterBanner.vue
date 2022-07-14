<script setup lang="ts">
import { computed, inject, Ref, ref, provide, watch } from 'vue';
import Banner from './Banner.vue';
const validate: Ref = ref(false);
const userName: Ref = ref('');
watch(userName, (newVal: String) => {
    if (newVal.length >= 4) {
        validate.value = true;
    } else {
        validate.value = false;
    }
})
</script>

<template>
    <Banner>
        <h2 class="text-xl font-medium text-left">Register</h2>
        <p class="text-left">Please, put your userName to continue</p>
        <input v-model="userName" type="text"
            class="h-12 p-4 w-[90%] border-moderate-blue outline-0 border-solid border-2 rounded-lg" />
        <button :class="validate ? 'bg-moderate-blue cursor-pointer' : 'cursor-default bg-light-grayish-blue'"
            @click="validate && $emit('registerUser', userName)"
            class=" my-4 px-6 py-3 h-min rounded-lg text-white text-sm  sm:text-base ">Comfirm</button>
    </Banner>
</template>