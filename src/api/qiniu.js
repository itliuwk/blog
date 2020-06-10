import request from '@/utils/request'
import {BASE_API} from '../config'


export function updatePhoto(params) {
  return request({
    url: '/api/upload/token',
    method: 'post',
    data: params,
  }).then(res => res.data);
}



export function updatePhoto1(params) {
  return request({
    url: 'http://upload-z2.qiniup.com',
    method: 'post',
    data: params,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then(res => res.data);
}
