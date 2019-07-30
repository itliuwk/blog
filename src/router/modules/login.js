const login = [
  {
    path: '/login',
    name: '注册',
    meta: {title: '注册'},
    component: () => import('@/views/login/login')
  },
  {
    path: '/register',
    name: '登录',
    meta: {title: '登录'},
    component: () => import('@/views/login/register')
  }
];

export default login;
