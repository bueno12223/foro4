<script setup lang="ts">
// get openDelete from store
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex'
import Banner from './Banner.vue';
const store: any = useStore();
const toggleShowDelete = (): void => {
    store.commit('increment')
}
const getOpenDelete = computed((): boolean => {
    return store.state.openDelete
})
</script>

<template>
    <Banner v-show="getOpenDelete">
        <h2 class="text-xl font-medium text-left">Delete comment</h2>
        <p class="text-left">Are you sure you want to delete this comment? This will remove the comment and can’t be
            undone.</p>
        <div class="flex gap-4 justify-between pt-4">
            <button @click="toggleShowDelete"
                class="px-6 py-3 h-min bg-grayish-Blue rounded-lg text-white text-sm  sm:text-base">NO,
                CANEL</button>
            <button class="px-6 py-3 h-min bg-soft-red rounded-lg text-white  text-sm sm:text-base">YES, DELETE</button>

        </div>
    </Banner>
</template>