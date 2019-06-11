import Vue from 'vue'
import Router from 'vue-router'

//一级路由home首页面
import home from '@/views/home/'
import login from '@/views/login/'  //登录页面展示 

//二级路由home首页面下面的四个切换组成
import recommend from "@/views/home/recommend/"  //就是展示推荐或者北京的页面
import attention from '@/views/home/attention/'  //关注页面展示
import information from '@/views/home/information/' //消息页面展示
import my from '@/views/home/my/'  //我的页面展示
//三级路由推荐下面的抖音列表页面
import list from '@/views/home/recommend/list/'



//引入cook这个第三方包
import cook from 'js-cookie';
Vue.use(Router)

const route=new Router({
  routes: [{
      path: '/',
      redirect: "/home/recommend/list"
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [{
        path: 'recommend',
        name: 'recommend',
        component: recommend,
        children: [{
          path: 'list',
          name: 'list',
          component: list,
        }]
      },{
        path:"attention",
        name:"attention",
        component:attention
      },{
        path:"information",
        name:"information",
        component:information
      },{
        path:"my",
        name:"my",
        component:my
      }]
    },{
      path:"/login",
      name:"login",
      component:login
    }
  ]
})





//去my我的页面要做一个导航守卫拦截一下

route.beforeEach((to,from,next)=>{
  console.log(to.path)
  if(to.path=="/home/my"){
    //如果是到my页面拦截一下
    let str=cook.get("user");
    console.log(str,"用户名")
    if(str){
      next()
    }else{
      next("/login")
    }
  }else{
    next()
  }
})


export default route