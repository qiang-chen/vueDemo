import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/main/user"
    },{
      path:"/main",
      name:"main",
      component:()=>import("@/views/main/"),
      children:[
        {
          path:"user",
          name:'user',
          component:()=>import("@/views/main/user")
        },
        {
          path:"add",
          name:'add',
          component:()=>import("@/views/main/add")
        }
      ]
    },{
      path:"login",
      name:'login',
      component:()=>import("@/views/login")
    }
  ]
})
