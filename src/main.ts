import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import { createStore } from 'vuex'

interface Store {
  openDelete: boolean
  userName: string
  socket: any
}
// Create a new store instance.
const store = createStore({
  state () {
    return {
      openDelete: false,
      userName: 'jesus',
      socket: null
    }
  },
  mutations: {
    increment (state: Store) {
      state.openDelete = !state.openDelete
    },
    changeUserName (state: Store, userName: string) {
      state.userName = userName
  },
  setSocket (state: Store, socket: any) {
    state.socket = socket
  }
}
})
createApp(App)
  .use(store)
  .mount('#app')