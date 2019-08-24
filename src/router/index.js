import Vue from 'vue'
import Router from 'vue-router'
import login from '@/router/modules/login'
import blog from '@/router/modules/blog'
import tools from '@/router/modules/tools'
import classify from '@/router/modules/classify'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/home')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/views/admin/index')
    },
    ...login,
    ...blog,
    ...tools,
    ...classify
  ]
})
