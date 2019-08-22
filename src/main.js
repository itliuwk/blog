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
Vue.use(VueClipboard);

Vue.use(VueAxios, Axios);

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

Vue.config.productionTip = false

/* eslint-disable no-new */
window._vm = new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
