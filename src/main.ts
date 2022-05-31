import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import { createStore } from 'vuex'

interface Store {
  openDelete: boolean
  userName: string
}
// Create a new store instance.
const store = createStore({
  state () {
    return {
      openDelete: false,
      userName: ''
    }
  },
  mutations: {
    increment (state: Store) {
      state.openDelete = !state.openDelete
    },
    changeUserName (state: Store, userName: string) {
      state.userName = userName
  },
}
})
createApp(App)
  .use(store)
  .mount('#app')