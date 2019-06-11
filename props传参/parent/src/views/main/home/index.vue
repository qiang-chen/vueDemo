<template>
    <div>
        <header>
            <span v-for="(item,index) in tapData" :key="index" @click="change(index)" :class="num==index?'active':''">{{item}}</span>
        </header>
        <swiper :num='num' :change='change'></swiper>
    </div>
</template>

<script>
//引入swiper组件
import swiper from "@/components/swiper"
export default {
    props:['newNum'],
    data(){
        return {
            num:0,
            tapData:["tap1","tap2","tap3","tap4"]
        }
    },
    watch:{
        num(n,o){
            this.newNum(n)
        }
    },
    components:{
        swiper
    },
    methods: {
        change(index){
            this.num=index
        }
    },
}
</script>


<style lang="scss" scoped>
header{
    width: 100%;
    height:1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;

    font-size: .4rem;
}

span.active{
    color: red;
}
</style>
