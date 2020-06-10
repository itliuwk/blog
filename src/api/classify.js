import request from '@/utils/request'
import {BASE_API} from '../config'


export function classify() {
  return request({
    url: '/api/classify/list',
    method: 'get'
  }).then(res => res.data);
}


export function classifyCount() {
  return request({
    url:'/api/classify/list/count',
    method: 'get'
  }).then(res => res.data);
}


export function classifylen() {
  return request({
    url: '/api/classify/length',
    method: 'get'
  }).then(res => res.data);
}




