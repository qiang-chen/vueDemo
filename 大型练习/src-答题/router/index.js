import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router =  new Router({
  routes: [
    {
        path:'/',
        component:() => import('@/views/home')
    },
    {
        path:'/quesition',
        component:() => import('@/views/quesition'),
        redirect:'/quesition/child',
        children:[
            {
                path:'/quesition/child',
                name:'child',
                component:() => import('@/views/question-child')
            },
            {
                path:'/quesition/last',
                component:() => import('@/views/last')
            }
        ]
    }
  ]
})

router.beforeEach((to,from,next) => {
    if(to.name === 'child'){
        let already = localStorage.getItem('already') || '';
        if(already){
            next(false)
        }else{
            next()
        }
    }else{
        next()
    }
})

export default router
