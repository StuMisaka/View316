import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    username:window.localStorage.getItem('username'),
    token:window.localStorage.getItem('token'),
    sum:0,
    images:[]
  },
  mutations:{
    SET_TOKEN:(state,data) => {
      state.token = data;
      window.localStorage.setItem('token',data);
    },
    SET_USER:(state,data) => {
      state.username = data;
      window.localStorage.setItem('username',data);
    },
    LOGOUT:(state) => {
      state.token = null;
      state.username = null;
      state.sum = 0;
      state.images = [];
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('username');
    },
    SET_SUM:(state,data) => {
      state.sum = data;
    },
    SET_IMAGES:(state,data) => {
      state.images = data;
    }
  },
  actions:{

  }
})

export default store