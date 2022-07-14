import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import { createStore } from 'vuex'
import { Message } from './types'
interface Store {
  openDelete: boolean
  userName: string
  socket: any
  id: string
  subId: string,
  messages: Array<Message> | Array<any>
}
// Create a new store instance.
const store = createStore({
  state () {
    return {
      openDelete: false,
      userName: 'jeus',
      socket: null,
      id: '',
      subId: '',
      messages: []
    }
  },
  mutations: {
    increment (state: Store, isSubMessage: string) {
      state.openDelete = !state.openDelete
      state.id = isSubMessage
    },
    incrementSub (state: Store, isSubMessage: string) {
      state.openDelete = !state.openDelete
      state.subId = isSubMessage
    },
    changeUserName (state: Store, userName: string) {
      state.userName = userName
  },
  setSocket (state: Store, socket: any) {
    state.socket = socket
  },
  setMessages (state: Store, messages: any) {
    state.messages = messages
  }
}
})
createApp(App)
  .use(store)
  .mount('#app')