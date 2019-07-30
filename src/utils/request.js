import axios from 'axios'
import {Message} from 'element-ui'
import {BASE_API} from '../config';


const server = axios.create({
  baseURLP: BASE_API,
  timeout: 5000
});


//  设置一些请求头信息  cookie  之类的
server.interceptors.request.use(req => {
  return req;

});


//  设置一些响应信息 、错误信息的统一处理
server.interceptors.response.use(res => res, error => {

  console.log('err' + error) // for debug
});

export default server;
