const tools = [
  {
    path: '/tools',
    name: '工具',
    meta: {title: '工具'},
    component: resolve => require(['@/views/tools/index'], resolve),
    // component: () => import('@/views/tools/index')
  },
  {
    path: '/dwz',
    name: '短网址',
    meta: {title: '短网址'},
    component: resolve => require(['@/views/tools/dwz'], resolve),
    // component: () => import('@/views/tools/dwz')
  },
  {
    path: '/dy',
    name: '电影票房',
    meta: {title: '电影票房'},
    component: resolve => require(['@/views/tools/dy'], resolve),
    // component: () => import('@/views/tools/dy')
  }
  ,
  {
    path: '/music',
    name: '音乐搜索',
    meta: {title: '音乐搜索'},
    component: resolve => require(['@/views/tools/music'], resolve),
    // component: () => import('@/views/tools/music')
  }
  ,
  {
    path: '/copyright',
    name: '电影票房',
    meta: {title: '电影票房'},
    component: resolve => require(['@/views/tools/copyright'], resolve),
    // component: () => import('@/views/tools/copyright')
  }
];

export default tools;
