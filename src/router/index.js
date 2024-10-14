import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '../views/WelcomePage.vue'
import ChatroomPage from '@/views/ChatroomPage.vue'
import useValidate from '@/auth/validate'

const { error, validate } = useValidate()

const requireAuth = async (to, from, next) => {
  const uid = window.localStorage.getItem('uid')
  const client = window.localStorage.getItem('client')
  const accessToken = window.localStorage.getItem('access-token')

  if (!uid || !client || !accessToken) {
    console.log('ログインしていません')
    next({ name: 'WelcomePage' })
    return
  }

  await validate()

  if (error.value) {
    console.log('認証に失敗しました')
    next({ name: 'WelcomePage' })
  } else {
    next()
  }
}

const noRerquireAuth = async (to, from, next) => {
  const uid = window.localStorage.getItem('uid')
  const client = window.localStorage.getItem('client')
  const accessToken = window.localStorage.getItem('access-token')

  if (!uid || !client || !accessToken) {
    next()
    return
  }

  await validate()

  if (!error.value) {
    next({ name: 'ChatroomPage' })
  } else {
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'WelcomePage',
      component: WelcomePage,
      beforeEnter: noRerquireAuth,
    },
    {
      path: '/chatroom',
      name: 'ChatroomPage',
      component: ChatroomPage,
      beforeEnter: requireAuth,
    },
  ],
})

export default router
