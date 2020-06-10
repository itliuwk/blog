import request from '@/utils/request'
import {BASE_API} from '../config'


export function list(params) {
  return request({
    url: '/api/blog/list',
    method: 'get',
    params,
  }).then(res => res.data);
}

export function listCount(params) {
  return request({
    url: '/api/blog/list/count',
    method: 'get',
    params,
  }).then(res => res.data);
}

export function listClass(params) {
  return request({
    url: '/api/blog/listClass',
    method: 'get',
    params,
  }).then(res => res.data);
}


export function listClassCount(params) {
  return request({
    url:'/api/blog/listClass/count',
    method: 'get',
    params,
  }).then(res => res.data);
}


export function detail(params) {
  return request({
    url: '/api/blog/detail',
    method: 'get',
    params,
  }).then(res => res.data);
}


export function add(params) {
  return request({
    url: '/api/blog/new',
    method: 'post',
    data: params,
  }).then(res => res.data);
}


export function update(params) {
  return request({
    url:'/api/blog/update?id=' + params.id,
    method: 'post',
    data: params,
  }).then(res => res.data);
}

export function del(params) {
  return request({
    url: '/api/blog/del?id=' + params.id,
    method: 'post',
    data: params,
  }).then(res => res.data);
}


export function detailHtml(params) {
  return request({
    url: '/api/blog/detailHtml',
    method: 'get',
    params,
  }).then(res => res.data);
}


export function detailTurnHtml(params) {
  return request({
    url:'/api/blog/detailTurnHtml',
    method: 'get',
    params,
  }).then(res => res.data);
}

