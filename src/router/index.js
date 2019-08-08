import Vue from 'vue'
import Router from 'vue-router'
import login from '@/router/modules/login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/home')
    },
    ...login
  ]
})
