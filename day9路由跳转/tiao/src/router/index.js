import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home';
import list from '@/components/list';

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
        {
           path:'/home/list/:id',
           component:list
        }
    ]
  },{
      path: '/list:id',
      name: 'list',
      component: list
    }
  ]
})
