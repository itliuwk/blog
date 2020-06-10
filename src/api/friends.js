import request from '@/utils/request'
import {BASE_API} from '../config'


export function list(params) {
  return request({
    url:'/api/friends/list',
    method: 'get',
    params,
  }).then(res => res.data);
}


export function add(params) {
  return request({
    url: '/api/friends/new',
    method: 'post',
    data:params,
  }).then(res => res.data);
}


export function update(params) {
  return request({
    url: '/api/friends/update?id='+params.id,
    method: 'post',
    data:params,
  }).then(res => res.data);
}

export function del(params) {
  return request({
    url: '/api/friends/del?id='+params.id,
    method: 'post',
    data:params,
  }).then(res => res.data);
}






