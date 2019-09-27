import Vue from 'vue'
import Router from 'vue-router'
import login from '@/router/modules/login'
import blog from '@/router/modules/blog'
import tools from '@/router/modules/tools'
import classify from '@/router/modules/classify'
import author from '@/router/modules/author'
import note from '@/router/modules/note'
import files from '@/router/modules/files'

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
    {
    	path: '*',
    	redirect: '/404',
    	hidden: true
    },
    {
      path: '/404',
      name: '404',
      component: resolve => require(['@/components/404'], resolve)
    },
    ...login,
    ...blog,
    ...tools,
    ...classify,
    ...author,
    ...note,
    ...files
  ]
})
