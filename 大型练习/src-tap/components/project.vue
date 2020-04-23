<template>
    <div class="all">
        <header>
            <h1>{{title}}{{data.length}}</h1>
        </header>
        <el-divider></el-divider>
        <div>
            <span :class="{'active':active === 'all'}" @click="active='all'">所有</span>
            <span :class="{'active':active === 'open'}" @click="active='open'">已公开</span>
        </div>
        <div class="list">
            <div v-for="(item,i) in showData" :key="i">
                <el-image
                style="width: 130px; height: 130px;margin:20px;display:block;" :src="item.url" fit="cover"></el-image>
                <span>{{item.title}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    props:['data','title'],
    data() {
        return {
           active:'all'
        }
    },
    computed:{
        showData(){
            if(this.active === 'all'){
                return this.data
            }else{
                return this.data.filter(item => item.ipOpen)
            }
        }
    },
}
</script>
<style lang="scss">
    .list{
        width:100%;
        height:100%;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        overflow: scroll;
    }
    .active{
        color:gray;
    }
</style>
