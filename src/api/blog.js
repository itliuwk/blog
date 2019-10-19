import request from '@/utils/request'
import {BASE_API} from '../config'


export function list(params) {
  return request({
    url: BASE_API + 'blog/list',
    method: 'get',
    params,
  }).then(res => res.data);
}

export function listCount(params) {
  return request({
    url: BASE_API + 'blog/list/count',
    method: 'get',
    params,
  }).then(res => res.data);
}

export function listClass(params) {
  return request({
    url: BASE_API + 'blog/listClass',
    method: 'get',
    params,
  }).then(res => res.data);
}


export function listClassCount(params) {
  return request({
    url: BASE_API + 'blog/listClass/count',
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


export function update(params) {
  return request({
    url: BASE_API + 'blog/update?id='+params.id,
    method: 'post',
    data:params,
  }).then(res => res.data);
}

export function del(params) {
  return request({
    url: BASE_API + 'blog/del?id='+params.id,
    method: 'post',
    data:params,
  }).then(res => res.data);
}




export function detailHtml(params) {
  return request({
    url: BASE_API + 'blog/detailHtml',
    method: 'get',
    params,
  }).then(res => res.data);
}


export function detailTurnHtml(params) {
  return request({
    url: BASE_API + 'blog/detailTurnHtml',
    method: 'get',
    params,
  }).then(res => res.data);
}

