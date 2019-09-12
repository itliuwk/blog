const classify = [
  {
    path: '/classifyDetail',
    name: '分类详情',
    meta: {title: '分类详情'},
    component: resolve => require(['@/components/classifyDetail'], resolve),
    // component: () => import('@/components/classifyDetail')
  }
];

export default classify;
