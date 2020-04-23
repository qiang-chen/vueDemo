<template>
    <div class="listMy">
        <div class="itemMy" v-for="item in list" :key="item.id">
            {{item.title}}
            <!-- 引入加加减减的插件   将num和id传给子组件-->
            <count :id="item.id" :num="item.num"  @shuzi="shuzi"></count>
            <button @click="add">添加到另一个页面</button>
        </div>
    </div>
</template>

<script>
import count from "@/components/count"
export default {
    data(){
       return {
            list:[{
            id:1,
            title:"我是第一条数据",
            num:0
        },{
            id:2,
            title:"我是第2条数据",
             num:0
        },{
            id:3,
            title:"我是第3条数据",
             num:0
        },{
            id:4,
            title:"我是第4条数据",
             num:0
        }],
        bian:null
       }
    },
    components:{
        //注册组件
        count
    },
    methods:{
        shuzi(newNum,newId){
            console.log(newNum,newId)
            let index=this.list.findIndex(item=>item.id==newId);
            this.list[index].num=newNum;
            this.bian=this.list[index];
        },
        add(){
            console.log(111)
            this.$bus.$emit("price",this.bian)
        }
    }
}
</script>

<style lang="scss">
    .listMy{
        width: 100%;
        height: 100%;
    }
    .itemMy{
        width: 100%;
        height: 2rem;
        border-bottom: 1px solid #000;
    }
</style>