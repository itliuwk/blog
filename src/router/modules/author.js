const classify = [
  {
    path: '/author',
    name: '作者详情',
    meta: {title: '作者详情'},
    component: resolve => require(['@/components/author'], resolve),
    // component: () => import('@/components/classifyDetail')
  }
];

export default classify;
