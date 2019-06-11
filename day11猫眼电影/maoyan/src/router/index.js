import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home.vue'
import login from '@/views/login/login'
import IsHit from '@/views/home/IsHit'
import upcomingMovies from '@/views/home/upcomingMovies'
import movie from '@/views/home/index'
import cinema from '@/views/cinema'
import my from '@/views/my/'
import city from "@/views/city/"
//引入我们封装的第三方库用来获取本地存储值判断这个用户是不是登录过

import util from '@/utils/index.js';
let {getCook}=util;
console.log(getCook)

Vue.use(Router)

let router=new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      //redirect:"/home/movie",
      children:[
        {
          path:'movie',
          component:movie,
          //redirect:"/home/movie/hit",
          children:[
            {
              path:'hit',
              name:'hit',
              component:IsHit
            },{
              path:'upcomingMovies',
              component:upcomingMovies
            }
          ]
        },{
          path: '/home/cinema',
          name: 'cinema',
          component: cinema
        }
      ],
    },{
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/my',
      name: 'my',
      component: my
    },{
      path: '/city',
      name: 'city',
      component: city
    },{
      path: '*',
      name:"/",
      redirect:"/home/movie/hit"
    }
  ]
})

//页面每次跳转路由都会触发这个钩子函数
router.beforeEach((to,from,next)=>{
    // console.log(to)
    if(to.path=="/my"){
     if(getCook()){
       //如果本地存储里面有这个值证明他以前登录过就让他进去my这个路由
       next()
     }else{
       //如果不存在拦截他接着跳转到登录
       next("/login")
     }
    }else{
      next()
    }
})

export default router
