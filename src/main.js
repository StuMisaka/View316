import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/store.js'
import axios from './http/http.js'




Vue.config.productionTip = false

new Vue({
  axios,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
