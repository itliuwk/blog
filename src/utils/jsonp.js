//jsonp.js

import originJsonp from 'jsonp';

//Jsonp封装函数
export default function jsonp(url, data, option){
  if((url.indexOf('?') < 0)){
    url += '?' + param(data);
  }else{
    url += '&' + param(data);
  }
  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if(!err){
        resolve(data);
      }else{
        reject(err);
      }
    });
  });
}

//传进来的data对象 => &key1=value1&key2=value2...
export function param(data){
  let url = '';
  for(let i in data){
    let value = data[i];
    url += '&' + i + '=' + encodeURIComponent(value);
  }
  return url ? url.substring(1) : '';
}
