import request from '@/utils/request'
import {BASE_API} from '../config'



export function getFiles() {
  return request({
    url:'/api/getFiles',
    method: 'get'
  }).then(res => res.data);
}
