import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      redirect: "/main/home"
    },
    {
      path: "/main",
      name: "main",
      component: () => import("@/views/main/"),
      children: [{
          path: "home",
          name: "name",
          component: () => import("@/views/main/home/")
        },
        {
          path: "shop",
          name: "shop",
          component: () => import("@/views/main/shop/")
        },
        {
          path: "my",
          name: "my",
          component: () => import("@/views/main/my/")
        }
      ]
    },{
      path:"/login",
      name:"login",
      component:()=>import("@/views/login/")
    }
  ]
})

//全局守卫

router.beforeEach((to, from, next) => {
    if(to.path=="/main/my"){
      let user=localStorage.getItem("user");
      if(user){
        next()
      }else{
        next("/login")
      }
    }else{
      next()
    }
})




export default router;
