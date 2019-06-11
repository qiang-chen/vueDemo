<template>
    <div class="list">
        <!-- <span :class="{'active':count==index}" @click="count=index">{{name}}</span> -->
        <span  v-for='(item,index) in provinceData' :key='index' :class="{'active':index==count}" @click="change(index)">{{item}}</span>
    </div>
</template>

<script>
export default {
    //接受父组件传过来的参数
    props: ['provinceData'],
    data(){
        return {
            count:0
        }
    },
    created () {
        console.log(this.provinceData,"111111111111111111")
    },
    methods: {
            change(index){
                this.count=index;
                this.$emit("cityId",this.count)
            }
    },
}
</script>

<style lang="scss" scoped>
    .list{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        span{
            width: 80%;
            height: 1rem;
            background-color: #fff;
            text-align: center;
            line-height: 1rem;
            border-radius: 0.1rem;
            margin: 0.2rem auto;
            font-weight: bold;
        }
        span.active{
            color: red;
            background-color: yellow;
        }
    }
</style>