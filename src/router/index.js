import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/bag',
    name: 'bag',
    component: () => import('@/views/list/index.vue')
  },
  {
    path: '/home-furnishing',
    name: 'homeFurnishing',
    component: () => import('@/views/list/index.vue')
  },
  {
    path: '/acc',
    name: 'acc',
    component: () => import('@/views/list/index.vue')
  },
  {
    path: '/clothes',
    name: 'clothes',
    component: () => import('@/views/list/index.vue')
  },
  {
    path: '/shoes',
    name: 'shoes',
    component: () => import('@/views/list/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
