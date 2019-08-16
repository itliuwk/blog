import request from '@/utils/request'
import {BASE_API} from '../config'


export function list(params) {
  return request({
    url: BASE_API + 'blog/list',
    method: 'get',
    params,
  }).then(res => res.data);
}


export function detail(params) {
  return request({
    url: BASE_API + 'blog/detail',
    method: 'get',
    params,
  }).then(res => res.data);
}


export function add(params) {
  return request({
    url: BASE_API + 'blog/new',
    method: 'post',
    data:params,
  }).then(res => res.data);
}



