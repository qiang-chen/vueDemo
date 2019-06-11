import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: "/main/home"
  },{
    path:"/main",
    component:()=>import("@/views/main/"),
    children:[
      {
        path:"home",
        component:()=>import("@/views/main/home/")
      },{
        path:"menu",
        component:()=>import("@/views/main/menu/")
      }
    ]
  }]
})
