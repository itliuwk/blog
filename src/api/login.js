import request from '@/utils/request'
import {BASE_API} from '../config'


export function login(params) {
  return request({
    url: BASE_API + 'user/login',
    method: 'post',
    withCredentials: true,
    data:params,
  }).then(res => res.data);
}


export function register(params) {
  return request({
    url: BASE_API + 'user/register',
    method: 'post',
    withCredentials: true,
    data:params,
  }).then(res => res.data);
}
