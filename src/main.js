// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import Axios from 'axios'
import VueAxios from 'vue-axios'
import VueJsonp from 'vue-jsonp'
import VueClipboard from 'vue-clipboard2'
import { BASE_WWW } from './config.js'

window._www = BASE_WWW;

import Copyright from './components/copyright.vue'

Vue.component('Copyright', Copyright)

Vue.use(VueClipboard);

Vue.use(VueAxios, Axios);

let userInfo = localStorage.getItem('userInfo');

if (!userInfo || userInfo == null) {
  localStorage.clear()
}
import Print from '@/plugs/print'

Vue.use(Print) //

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)

// highlight.js  代码高亮指令
import Hljs from 'highlight.js';
import 'highlight.js/styles/github-gist.css';
Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    Hljs.highlightBlock(block)
  })
})

Vue.prototype.$loadScript = (url, callback) => {
  let script = document.createElement('script');
  if (script.readyState) {
    // IE浏览器
    script.onreadystatechange = function () {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        script.onreadystatechange = null;
        callback();
      }
    }
  } else {
    // 其他浏览器
    script.onload = function () {
      callback();
    }
  }
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}

import './assets/style/index.css'


import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor)


Vue.use(Element, {
  size: 'medium'
});

import '@/styles/index.scss'// global css


import * as Time from './utils/date'

Object.keys(Time).forEach(key => {
  Vue.filter(key, Time[key]);
});

Vue.config.productionTip = false

/* eslint-disable no-new */
window._vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  // mounted() {
  //   document.dispatchEvent(new Event('render-event'))
  // }
})
