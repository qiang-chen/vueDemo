<template>
    <div>
        <ul class="title">
            <li v-for="(item,ind) in quesition" :key="ind" :class="{'red':ind <= curIndex}">
                {{item.type}}
                <span v-if="item.flag === false">x</span>
                <span v-else-if="item.flag === true">v</span>
            </li>
        </ul>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import {mapActions,mapState} from 'vuex'
export default {
    created(){
        this.getData();
    },
    computed:{
        ...mapState(['quesition','curIndex'])
    },
    methods:{
        ...mapActions(['getData'])
    }
}
</script>
<style lang="scss">
    .title{
        display: flex;
        li{
            padding:10px;
            margin:20px;
            background: gray;
        }
        .red{
            background: red;
        }
    }
</style>
