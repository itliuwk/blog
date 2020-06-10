import request from '@/utils/request'
import {BASE_API} from '../config'


export function list(params) {
  return request({
    url:'/api/note/list',
    method: 'get',
    params,
  }).then(res => res.data);
}


export function add(params) {
  return request({
    url:'/api/note/new',
    method: 'post',
    data:params,
  }).then(res => res.data);
}


export function update(params) {
  return request({
    url:'/api/note/update?id='+params.id,
    method: 'post',
    data:params,
  }).then(res => res.data);
}

export function del(params) {
  return request({
    url:'/api/note/del?id='+params.id,
    method: 'post',
    data:params,
  }).then(res => res.data);
}






