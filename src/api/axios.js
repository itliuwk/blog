import request from '@/utils/request'
import {BASE_API} from '../config'


export function axiosTest(params) {
  return request({
    url: BASE_API + 'blog/detail',
    method: 'get',
    withCredentials: true,
    params,
  }).then(res => res.data.data);
}
