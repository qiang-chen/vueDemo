import Vue from 'vue'
import Router from 'vue-router'
import { homedir } from 'os';
console.log(homedir,"这是什么东西")
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        name: homedir,
        component: () =>
            import ("@/views/home")
    }]
})