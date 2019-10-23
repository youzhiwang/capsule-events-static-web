import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: () => import('@/views/homepage/index.vue')
  },
  {
    path: '/bags',
    name: 'bags',
    component: () => import('@/views/list/index.vue')
  },
  {
    path: '/home',
    name: 'home',
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
