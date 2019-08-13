import request from '@/utils/request'
import {BASE_API} from '../config'


export function login(params) {
  return request({
    url: BASE_API + 'user/login',
    method: 'post',
    data:params,
  }).then(res => res);
}


export function register(params) {
  return request({
    url: BASE_API + 'user/register',
    method: 'post',
    data:params,
  }).then(res => res);
}
