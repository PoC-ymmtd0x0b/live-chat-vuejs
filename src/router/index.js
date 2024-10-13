import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '../views/WelcomePage.vue'
import ChatroomPage from '@/views/ChatroomPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'WelcomePage', component: WelcomePage },
    { path: '/chatroom', name: 'ChatroomPage', component: ChatroomPage },
  ],
})

export default router
