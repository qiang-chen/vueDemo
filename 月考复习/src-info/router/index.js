import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router =  new Router({
  routes: [
    {
        path:'/',
        redirect:'/demo1/business'
    },
    {
        path:'/demo1',
        component:() => import('@/views/demo1/index'),
        redirect:'/demo1/business',
        children:[
            {
                path:'/demo1/business',
                component:() => import('@/views/demo1/business')
            },
            {
                path:'/demo1/server',
                component:() => import('@/views/demo1/server')
            },
            {
                path:'/demo1/cur',
                component:() => import('@/views/demo1/cur')
            }
        ]
    },
    {
        path:'/demo2',
        component:() => import('@/views/demo2')
    },
    {
        path:'/demo3',
        component:() => import('@/views/demo3')
    }
  ]
})

export default router
