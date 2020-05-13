import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userInfo: '',
    isLogin: false,
    search: '',
    isCloseBg: true,
    count:0,
  },
  mutations: {
    SET_USERINFO(state, params) {
      state.userInfo = params;
    },
    SET_ISLOGIN(state, params) {
      state.isLogin = params;
    },
    SET_SEARCH(state, params) {
      state.search = params;
    },
    SET_ISCLOSEBG(state, params) {
      state.isCloseBg = params;
    },
    SET_COUNT(state, params) {
      state.count = params;
    }
  }


});

export default store;
