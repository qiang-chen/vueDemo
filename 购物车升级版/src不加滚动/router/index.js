import Vue from 'vue'
import Router from 'vue-router'

//一级路由
import home from '@/views/home/' //主页
import login from "@/views/login/" //登录

//二级路由
import indent from "@/views/home/indent/" //订单页面
import menu from "@/views/home/menu/" //菜单页面
import shopping from "@/views/home/shoppingCart/" //购物车页面

import homepage from "@/views/home/homepage"
import my from "@/views/home/my/"

import Cookie from "js-cookie";


Vue.use(Router)


const router=new Router({
  linkActiveClass:"active",
  routes: [{
      path: '/',
      redirect: "/home/menu"
    },
    {
      path: "/home",
      component: ()=>import('@/views/home/'),
      children:[
        {
          path:'homepage',
          name:"homepage",
          component:()=>import("@/views/home/homepage/")
        },
        {
          path:"menu",
          name:"menu",
          component:()=>import("@/views/home/menu/"),
        },{
          path:"/home/indent",
          name:"indent",
          component:()=>import("@/views/home/indent/")
        },{
          path:"shopping",
          name:"shopping",
          component:()=>import("@/views/home/shoppingCart/"),
        },{
          path:"my",
          name:"my",
          component:()=>import("@/views/home/my/")
        }
      ]
    },{
      path:"/login",
      name:"login",
      component:()=>import("@/views/login/")
    }
  ]
})

//导航守卫拦截一下
router.beforeEach((to,from,next)=>{
    if(to.path=="/home/my"){
      let str=Cookie.get("user");
      if(str){
        next()
      }else{
        next("/login")
      }
    }else{
      next()
    }
})


export default router;
