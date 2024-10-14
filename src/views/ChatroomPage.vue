<template>
  <div class="container">
    <NavBar />
    <ChatWindow :messages="messages" />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import ChatWindow from '@/components/ChatWindow.vue'
import axios from 'axios'

export default {
  components: { NavBar, ChatWindow },
  data() {
    return {
      messages: [],
    }
  },
  methods: {
    async getMessages() {
      try {
        const res = await axios.get('http://localhost:3000/messages', {
          headers: {
            uid: window.localStorage.getItem('uid'),
            'access-token': window.localStorage.getItem('access-token'),
            client: window.localStorage.getItem('client'),
          },
        })

        if (!res) {
          throw new Error('メッセージ一覧を取得できませんでした')
        }

        this.messages = res.data
      } catch (err) {
        console.log(err)
      }
    },
  },
  mounted() {
    this.getMessages()
  },
}
</script>

<style scoped></style>
