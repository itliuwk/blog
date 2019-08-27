const login = [
  {
    path: '/detail',
    name: '博客详情',
    meta: {title: '博客详情'},
    // component: () => import('@/components/blogDetail')
    component: resolve => require(['@/components/blogDetail'], resolve),
  }
];

export default login;
