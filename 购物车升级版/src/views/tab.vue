<template>
    <div>
        <ul class="list">
            <li v-for="(item,index) in titList" :key="index" :class="{'active': index == ind}" @click="change(item.type)">{{item.title}}</li>
        </ul>
        <div>
            <my-list v-for="(item1,index1) in list" :key="index1"
            :title="item1.title"
            :content="item1.content"
            :type="item1.type"
            :time="item1.time"
            ></my-list>
            <div v-show="list.length == 0">没有更多的面试信息</div>
        </div>
    </div>
</template>
<script>
import myList from '../components/list';
import data from '../mock';
export default {
    props:{

    },
    components:{
        myList
    },
    data(){
        return {
            titList:[
                {
                    title:'未开始',
                    type:1
                },
                {
                    title:'已打卡',
                    type:2
                },
                {
                    title:'已放弃',
                    type:3
                },
                {
                    title:'全部',
                    type:4
                }
            ],
            ind:0,
            list:[]
        }
    },
    computed:{

    },
    methods:{
        getList(list,type){ //过滤数据
            return list.filter(item => item.type == type)
        },
        change(type){
            this.list = [];
            this.list = this.getList(data.list,type);
              console.log(this.list);
            this.ind = type -1;
        }
    },
    created(){
        console.log(data);
        
        this.list = this.getList(data.list,this.titList[0].type);
      
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
.list{
    height: 44px;
    width: 100%;
    display: flex;
    align-items: center;
}
.list li{
    flex: 1;
   line-height: 44px;
    text-align: center;
}
.list li.active{
    border-bottom: 1px solid red;
}
</style>