<template>
    <div>
        <shopList :buyList='buyList' v-show="buyList.length"></shopList>
        <div v-show="!buyList.length" v-styles>暂无商品添加</div>
    </div>
</template>

<script>

import {mapState} from "vuex"

//引入购买列表组件
import shopList from "@/components/shopList"

export default {
    //注册组件
    components:{
        shopList
    },
    //在购物车页面引入购买列表数据
    computed: {
        ...mapState({
            buyList:state=>state.shop.buyList
        })
    },
    created(){
        console.log(this.buyList,"购买列表")
    },
    directives: {
        styles:{
            bind(el){
                el.style.color="green";
                el.style.fontSize=".6rem"
            }
        }
    }
}
</script>