import request from '@/utils/request'
import {BASE_API} from '../config'


export function detail(params) {
  return request({
    url: BASE_API + 'statistics/detail',
    method: 'get',
    params,
  }).then(res => res.data);
}


export function update(params) {
  return request({
    url: BASE_API + 'statistics/update',
    method: 'get',
    params,
  }).then(res => res.data);
}