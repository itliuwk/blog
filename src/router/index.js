import Vue from 'vue'
import Router from 'vue-router'
import login from '@/router/modules/login'
import blog from '@/router/modules/blog'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/home')
    },
    ...login,
    ...blog
  ]
})
