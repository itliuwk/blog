import Vue from 'vue'
import Router from 'vue-router'
import login from '@/router/modules/login'
import blog from '@/router/modules/blog'
import tools from '@/router/modules/tools'
import classify from '@/router/modules/classify'
import author from '@/router/modules/author'
import note from '@/router/modules/note'
import whisper from '@/router/modules/whisper'
import files from '@/router/modules/files'
import tuchuang from '@/router/modules/tuchuang'

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
    {
      path: '/test',
      name: 'test',
      component: resolve => require(['@/views/test'], resolve)
    },
    {
      path: '/city',
      name: 'city',
      component: resolve => require(['@/views/city/index'], resolve),
      // component: () => import('@/views/admin/index')
    },
    ...login,
    ...blog,
    ...tools,
    ...classify,
    ...author,
    ...note,
    ...whisper,
    ...files,
    ...tuchuang
  ]
})
