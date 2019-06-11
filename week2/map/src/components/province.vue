<template>
    <div class="list">
        <!-- <span :class="{'active':count==index}" @click="count=index">{{name}}</span> -->
        <span :class="{'active':bg==index}" @click="change(index)">{{name}}</span>
    </div>
</template>

<script>
export default {
    //接受父组件传过来的参数
    props: ['name','index','bg'],
    data(){
        return {
            count:this.bg
        }
    },
    created () {
        //console.log(this.count,"111111111111111111")
    },
    methods:{
        change(index){
            this.count=index;
            //console.log(this.count,"输出")
            this.$emit('ups',this.count)
        }
    },
    updated() {
        //console.log(this.count)
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