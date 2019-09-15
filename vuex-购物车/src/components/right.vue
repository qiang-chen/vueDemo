<template>
    <div>
        <div class="item" v-for="item in rightData" :key="item.id">
            <h5>{{item.title}}</h5>
            <h4 v-color="'red'">
                {{item.price}}
            </h4>
            <h6>
                <count :num='item.num' :id="item.id"></count>
            </h6>
        </div>
    </div>
</template>

<script>

//将加加减减引入到右边模块
import count from './count';

export default {
    components:{
        count
    },
     computed:{
        rightData(){
            return this.$store.state.right.cur;
        }
    },
    created(){
        //获取一波左边当前点击的id；
        //console.log(this.$store.state.left.count,"左边当前点击id")
    },
    directives:{
        color:{
            bind(el,binding){
                el.style.color=binding.value;
            }
        }
    }
}
</script>

<style lang="scss">
    .item{
        text-align: center;
        border-bottom: 1px solid #000;
    }
</style>