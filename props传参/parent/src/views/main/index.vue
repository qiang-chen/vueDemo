<template>
    <div class="mainContainer">
        <header>
            我的主页
        </header>
        <!-- <router-view :newNum='newNum'></router-view> -->
        <home :newNum='newNum'></home>
        <menus :aa='aa'></menus>
    </div>
</template>

<script>
import home from '@/views/main/home/index.vue'

import menus from '@/views/main/menu/index.vue';

export default {
    data(){
        return {
            aa:0
        }
    },
    components:{
        home,
        menus
    },
    methods:{
        newNum(newNum){
            console.log(newNum,"main主页输出")
            this.aa=newNum
        }
    }
}
</script>


<style lang="scss" scoped>
    .mainContainer{
        width: 100%;
        height: 100%;
        header{
            width: 100%;
            height: 1rem;
            font-size: .4rem;
            text-align: center;
            line-height: 1rem;
            border-bottom: 1px solid #000;
            
        }
    }
</style>
