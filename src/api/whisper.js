import request from '@/utils/request'
import {BASE_API} from '../config'


export function list(params) {
  return request({
    url: BASE_API + 'whisper/list',
    method: 'get',
    params,
  }).then(res => res.data);
}


export function add(params) {
  return request({
    url: BASE_API + 'whisper/new',
    method: 'post',
    data:params,
  }).then(res => res.data);
}


export function update(params) {
  return request({
    url: BASE_API + 'whisper/update?id='+params.id,
    method: 'post',
    data:params,
  }).then(res => res.data);
}

export function del(params) {
  return request({
    url: BASE_API + 'whisper/del?id='+params.id,
    method: 'post',
    data:params,
  }).then(res => res.data);
}






