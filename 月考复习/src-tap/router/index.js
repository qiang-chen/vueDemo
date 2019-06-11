import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router =  new Router({
  routes: [
    {
        path:'/',
        redirect:'/product'
    },
    {
        path:'/detail',
        component:() => import('@/views/detail')
    },
    {
        path:'/login',
        component:() => import('@/views/login')
    },
    {
        path:'/product',
        component:() => import('@/views/product/index'),
        redirect:'/product/all',
        children:[
            {
                path:'/product/all',
                component:() => import('@/views/product/all'),
                name:'all'
            },
            {
                path:'/product/filed',
                component:() => import('@/views/product/filed'),
                name:'filed'
            },
            {
                path:'/product/meCreate',
                component:() => import('@/views/product/me-create'),
                name:'meCreate'
            },
            {
                path:'/product/mePartake',
                component:() => import('@/views/product/me-partake'),
                name:'mePartake'
            }
        ]
    }
  ]
})

let arr = ['all','filed','meCreate','mePartake'];

router.beforeEach((to,from,next) => {
    if(arr.includes(to.name)){
        let username = localStorage.getItem('username') || '';
        if(username){
            next()
        }else{
            next('/login')
            //next()
        }
    }else{
        next();
    }
})

export default router
