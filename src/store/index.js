import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userInfo: ''
  },
  mutations: {
    SET_USERINFO(state, params) {
      state.userInfo = params;
    }
  }


});

export default store;
