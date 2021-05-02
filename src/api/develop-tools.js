import request from '@/utils/request'


export function list(params) {
  return request({
    url: '/api/developTools/all',
    method: 'get',
    params,
  }).then(res => res.data);
}






