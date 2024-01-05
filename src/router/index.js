import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index/index.vue')
  },
  {
    path: '/cmspage',
    name: 'cmspage',
    component: () => import('@/views/cmspage/index.vue')
  },
  {
    path: '/goodsList/category/999',
    name: 'goodsListcategory',
    component: () => import('@/views/goodsList/category/index.vue')
  },
  {
    path: '/solution',
    name: 'solution',
    component: () => import('@/views/solution/index.vue')
  },
  {
    path: '/casecenter',
    name: 'casecenter',
    component: () => import('@/views/casecenter/index.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
