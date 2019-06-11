//import Vue from "vue/dist/vue.esm";

import Vue from "vue"

import App from "../views/app.vue"

new Vue({
    el:"#app",
    data(){
        return {
            msg:"123"
        }
    },
    components:{
        App
    },
    //template:"<App></App>",
    //写法2
    render:createElement=>createElement(App)
})

 