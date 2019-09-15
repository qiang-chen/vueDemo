import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Tab from '@/views/tab'
import Home from '@/views/home'
import Discover from '@/views/discover'
import Order from '@/views/order'
import Profile from '@/views/profile'
import Search from '@/views/search'
import Shop from '@/views/shop'
import Dican from '@/views/dican'
import Comonent from '@/views/comonet'
import Bussi from '@/views/bussi'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    meta:{title:'首页'},
    component: Home
  },
  {
    path: '/discover',
    name: 'discover',
    meta:{title:'发现'},
    component: Discover
  },
  {
    path: '/order',
    name: 'order',
    meta:{title:'订单'},
    component: Order
  }, {
    path: '/profile',
    meta:{title:'我的'},
    name: 'profile',
    component: Profile
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path:'/shop',
    component:Shop,
    beforeEnter: (to, from, next) => {
      // ...
      next('/order');
    }
  },
  {
    path: '/shop/:id',
    name: 'shop',
    component: Shop,
    children: [
      {
        path: 'dican',
        name: 'dican',
        component: Dican
      },
      {
        path: 'comonent',
        name: 'comonent',
        component: Comonent
      },
      {
        path: 'bussi',
        name: 'bussi',
        component: Bussi
      }
    ]
  }

]

const router = new Router({
  mode: 'hash',
  routes
});

export default router;

//全局前置守卫
const login = ['order','profile'];
router.beforeEach((to,from,next)=>{
  // console.log(to);
  // console.log(from);
  if(login.includes(to.name)){ //权限验证
      let userId = window.localStorage.getItem('userId');
      if(userId){ //已经登陆
          next();
      } else {
        next('/');
      }
  } else {
    next();
  }
});

//全局后置守卫
router.afterEach((to, from) => {
  // ...
  console.log(to,from);
  if(to.meta && to.meta.title){
     document.title = to.meta.title;
  } else {
    document.title = '1612B'
  }
})


