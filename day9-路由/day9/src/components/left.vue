<template>
    <div class="left">
        <ul>
            <li v-for="(item,index) in leftData" :key='index' :class="{'active':active==index}" @click="switchItem(index)">{{item.title}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    //就收根组件传过来的参数
    props: ['leftData'],
    data(){
        return {
            active:0
        }
    },
    created () {
        console.log(this.leftData)
    },
    methods: {
        switchItem(index){
            //点击切换事件
            this.active=index;
            //给根节点发送点击的内容是什么
            this.$emit("leftId",index)
        }
    },
}
</script>

<style lang="scss" scoped>
    .left{
        flex: 3;
        height: 100%;
        overflow: auto;
        ul{
            width: 100%;
            li{
                width: 100%;
                height: 1.2rem;
                text-align: center;
                line-height: 1rem;
                &.active{
                    background-color: mediumorchid;
                    color: #fff;
                }
            }
        }
    }
</style>

