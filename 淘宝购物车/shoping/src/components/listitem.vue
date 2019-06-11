<template>
    <div class="list">
        <div class="item" v-for="item in product" :key="item.id">
            <h2>{{item.title}}</h2>
            <h4>￥{{item.price}}</h4>
            <h6 @click="add(item)">添加到购物车</h6>
        </div>
    </div>
</template>

<script>
import {mapMutations} from "vuex";
export default {
    //接受父组件传过来的参数
    props:['product'],
    created(){
        console.log(this.product)
    },
    methods: {
        ...mapMutations({
            updatebuyList:"shop/updatebuyList"
        }),
        //点击添加按钮的调用数据库的添加购买列表方法
        //顺带将要添加的这一项也放进去
        //在点击添加按钮时候让这一项的数据num++
        add(item){
            this.updatebuyList(item)
        }
    }
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