import Vue from 'vue'
import Router from 'vue-router'
import login from '@/router/modules/login'
import blog from '@/router/modules/blog'
import tools from '@/router/modules/tools'
import classify from '@/router/modules/classify'
import author from '@/router/modules/author'
import test from '@/router/modules/test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: resolve => require(['@/views/home/home'], resolve),
      // component: () => import('@/views/home/home')
    },
    {
      path: '/admin',
      name: 'admin',
      component: resolve => require(['@/views/admin/index'], resolve),
      // component: () => import('@/views/admin/index')
    },
    {
      path: '/about',
      name: 'about',
      component: resolve => require(['@/views/about/index'], resolve),
      // component: () => import('@/views/admin/index')
    },
    ...login,
    ...blog,
    ...tools,
    ...classify,
    ...author,
    ...test
  ]
})
