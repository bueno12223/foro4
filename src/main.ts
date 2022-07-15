import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import { createStore } from 'vuex'
import { Message } from './types'
interface Store {
  openDelete: boolean
  userName: string
  socket: any
  id?: string
  subId?: string | undefined,
  messages: Array<Message> | Array<any>,
  replySelected: String
}
// Create a new store instance.
const store = createStore({
  state () {
    return {
      openDelete: false,
      userName: 'jesusss',
      socket: null,
      id: '',
      subId: '',
      messages: [],
      replySelected: '',
    }
  },
  mutations: {
    setReplySelected (state: Store, id: String) {
      if(state.replySelected == id){
        state.replySelected = ''
      } else {
        state.replySelected = id
      }
    },
    setDelete(store, {id, sub_id} = {}) {
      store.id = id
      store.subId = sub_id
      store.openDelete = !store.openDelete
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