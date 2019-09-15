<template>
    <div>
        <div class="title">
            <h3>{{title}}</h3>
            <span>{{list[type-1]}}</span>
        </div>
        <p>{{content}}</p>
        <div class="time">
            <span>面试时间:{{time}}</span>
            <span>已提醒</span>
        </div>
    </div>
</template>
<script>
export default {
    props:['title','content','type','time'],
    components:{

    },
    data(){
        return {
            txt:'未开始',
            list:['未开始','已打卡','已放弃','全部']
        }
    },
    computed:{

    },
    methods:{
        // init(){
        //     console.log(this.type,111);
        //     this.txt = this.list[this.type -1];
        //     // if(this.type == 1){
        //     //     this.txt = '未开始'
        //     // } else if(this.type == 2){
        //     //     this.txt ='已打卡'
        //     // }
        //     console.log(this.txt);
        // }
    },
    created(){
        // this.init();
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.title,.time{
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    box-sizing: border-box;
    align-items: center;
}
</style>