<template>
    <div class="item">
        <span>{{type}}</span>
        <span>{{num}}</span>
        <span><input type="text" v-model.lazy="median" @blur="change"></span>
        <!-- 
            点击删除的时候需要将这条数据删除了
            但是子组件不能改变根组件的变量
            如果改变的基本类型会直接报错
            改变的是引用类型的话不会报错
            但是会造成数据流的混乱
            所以我们一般不会在子组件
            去操作一些根组件的变量
         -->
        <span @click="del"><button>删除</button></span>
    </div>
</template>

<script>
export default {
    //接受下父节点传过来的数据
    props:['type','num','reminder','id'],
    data(){
        return {
            //因为我们第三个参数要在input框的v-module中使用实现双向通信
            //但是我们在子组件中又不能随便修改根组件的内容 所以我们需要把第三个值
            //赋值给一个变量 然后每次修改的就是这个变量了 接着把这个变量通过
            //this.$emit() 传值给根组件 那样根组件就能实现与子组件相同了
            median:this.reminder
        }
    },
    methods: {
        del(){
            //子组件向父组件传参
            //console.log("点击删除")
            this.$emit('del',this.id)
        },
        change(){
            //在失去焦点向根组件发送我们修改的内容和ID通知根组件对其进行修改
            this.$emit("change",this.id,this.median)
        }
    }
}
</script>

<style lang="scss" scoped>
    .item{
        width: 100%;
        height: 80px;
        display: flex;
        span{
            flex: 1;
            display: flex;
            justify-content: center;
            input{
                width: 100%;
                height: 40%;
                padding-left: 10px;
                box-sizing: border-box;
            }
            button{
                width: 60%;
                height: 40%;
            }
        }
    }
</style>