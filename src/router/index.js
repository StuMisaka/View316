import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store.js'
import login from '../components/login.vue'
import register from '../components/register.vue'
import phoneHome from '../components/phoneHome.vue'
import home from '../components/home.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      //登录
      path:'/login',    
      meta:{
        requireAuth: false
      },
      component:login
    },
    {
      //注册
      path:'/register', 
      meta:{
        requireAuth: false
      },
      component:register

    },
    {
      //移动端警告
      path:'/phoneHome',
      meta:{
        requireAuth: false
      },
      component:phoneHome
    },
    {
      //首页
      path:'/home',
      meta:{
        requireAuth: true
      },
      component:home
    }
  ]
})

router.beforeEach((to,from,next) => {
  const token = store.state.token;
  if(to.meta.requireAuth){
    if(token){
      next();
    }
    else{
      next('./login');
    }
  }
  else{
    next();
  }
})

export default router