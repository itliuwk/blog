const test = [
  {
    path: '/files',
    name: '上传文件',
    meta: {title: '上传文件'},
    component: () => import('@/views/files/files')
  },{
    path: '/fileskoa',
    name: '上传文件1',
    meta: {title: '上传文件1'},
    component: () => import('@/views/files-koa/files')
  },
];

export default test;
