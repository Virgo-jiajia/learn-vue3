import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/login.vue'),
    },
    {
      path: '/httpTest',
      name: 'httpTest',
      component: () => import('@/views/httpTestUrl.vue'),
    },
    {
      path: '/piniaTest',
      name: 'piniaTest',
      component: () => import('@/views/piniaTest.vue'),
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: () => import('@/views/homePage.vue'),
    },
    {
      path: '/todoList',
      name: 'todoList',
      component: () => import('@/views/todoList.vue')
    },
  ],
})

export default router
