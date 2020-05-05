import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueAxios, axios)

axios.defaults.baseURL = baseURL; // eslint-disable-line no-undef


axios.interceptors.request.use(
  config => {
  if(localStorage.token){
    config.headers["Authorization"] = `Bearer ${localStorage.token}`;
  }
  return config;
},error => {
  return Promise.reject(error);
})

export default axios




