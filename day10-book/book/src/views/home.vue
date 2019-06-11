<template>
    <div class="list">
        <h1>主页面</h1>
        <dlItem v-if="listData.length" :listData='listData'></dlItem>
    </div>
</template>

<script>

//引入列表页面
import dlItem  from '../components/dl-item'

export default {
    data(){
        return {
            listData:[]
        }
    },
    created() {
        //向后端请求数据
        this.$http("/api/home").then(res=>{
            //console.log(res.data.items[0].data.data)
            console.log(res.data,"qqqqqqqqqqq")
            this.listData=[...res.data.items[3].data.data];
            console.log(this.listData,"传给子元素的数组")
        })
    },
    components:{
        dlItem
    }
}
</script>


