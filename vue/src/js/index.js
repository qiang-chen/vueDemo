import Vue from "vue";
import Index from "@/views/index.vue";

new Vue({
    //挂载的位置
    el:"#app",
    //挂载根组件
    render:h=>h(Index)
})
