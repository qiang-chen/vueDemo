<template>
    <div class="left">
        <li v-for="item in leftData" :key="item.id" :class="count==item.id?'active':''" @click="change(item.id)">
            {{item.title}}
        </li>
    </div>
</template>

<script>
export default {
    //获取左边数据渲染到页面上面去
    computed:{
        leftData(){
            return this.$store.state.left.leftData
        },
        count(){
            return this.$store.state.left.count
        }
    },
    created(){
        //默认给右边仓库发送一波请求
        this.$store.commit("right/rightchange",1)
    },
    methods:{
        change(id){
            console.log(id)
            //触发仓库mutation来改变数据
            this.$store.commit("left/change",id)
            //再去触发右边仓库
            this.$store.commit("right/rightchange",id)

        }
    }
}
</script>



<style lang="scss" scoped>
    li{
        list-style: none;
        width: 100%;
        height: 2rem;
        font-size: .4rem;
        text-align: center;
        line-height: 2rem;
    }
    li.active{
        color: red;
    }
</style>
