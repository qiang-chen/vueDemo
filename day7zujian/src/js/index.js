
import Vue from "vue/dist/vue.esm.js";
import axios from "axios";

import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css"

import "../css/index.css"

new Vue({
    //挂载的位置
    el: "#app",
    //挂载根组件
    data: {
        msg: 123,
        list: []
    },
    created() {
        axios.get("/api/list").then(res => {
            this.list = res.data.BannerList;
            console.log(this.list)
            this.$nextTick().then(() => {
                console.log(this.$refs.wrap.children, "999")
                new Swiper(".swiper-container", {})
            })
        })
    },
    mounted() {
        //console.log(this.$data)
        //在这里dom元素没有加载完毕所以轮播没法执行 需要在请求数据哪里执行

    }
})