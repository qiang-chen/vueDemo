import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/main/business"
    },{
      path:"/main",
      name:"main",
      component:()=>import("@/views/main/"),
      children:[
        {
          path:"business",
          name:"business",
          component:()=>import("@/views/main/business/")
        },{
          path:"details",
          name:"details",
          component:()=>import("@/views/main/details/")
        },{
          path:"affirm",
          name:"affirm",
          component:()=>import("@/views/main/affirm/")
        }
      ]
    }
  ]
})
