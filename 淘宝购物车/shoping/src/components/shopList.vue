<template>
    <div class="list">
        <div class="item" v-for="item in buyList" :key="item.id">
            <h2>{{item.title}}</h2>
            <h4>￥{{item.price}}</h4>
            <h6><span @click="change('-',item.id)">-</span><span>{{item.num}}</span><span @click="change('+',item.id)">+</span></h6>
        </div>
    </div>
</template>

<script>
import {mapMutations} from "vuex";
export default {
    //接受父元素传过来的参数
    props:["buyList"],
    methods: {
        ...mapMutations({
           changeNum:"shop/change"
        }),
        change(type,id){
            //点击加减调用仓库的change方法
            this.changeNum({type,id})
        }
    },
}
</script>


<style lang="scss">
    .item{
        width: 100%;
        height: 3rem;
        border-bottom: 1px solid #000;
        text-align: center;
        display: flex;
        flex-direction: column;
        h2{
            flex:3;
        }
        h4{
            flex: 3;
            font-size: .4rem;
        }
        h6{
            flex: 4;
            font-size: .5rem;
        }
    }
</style>
