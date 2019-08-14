import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userInfo: '',
    isLogin: false,
  },
  mutations: {
    SET_USERINFO(state, params) {
      state.userInfo = params;
    },
    SET_ISLOGIN(state,params){
      state.isLogin = params;
    }
  }


});

export default store;
