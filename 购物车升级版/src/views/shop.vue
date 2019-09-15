<template>
    <div>
        <div class="page pageshop">
           <h3>店铺{{$route.params.id}}</h3>
            <ul class="title">
                <li @click="$router.push({name:'dican'})">点餐</li>
                <li @click="$router.push({name:'comonent'})">评价</li>
                <li @click="$router.push({name:'bussi'})">商家</li>
            </ul>
            <keep-alive include="dican">
                <router-view></router-view>
            </keep-alive>
        </div>
        <!-- <my-footer></my-footer> -->
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        console.log(this.$route)
    },
    mounted(){

    },
    beforeRouteEnter(to,from,next){ //获取不到this
        console.log(to);
        console.log(from);
        console.log(next);
        if(to.params.id < 10){
            next();
        } else {
            next('/');
        }
    },
    beforeRouteUpdate(to,from,next){
        console.log('beforeRouteUpdate');
        next();
    },
    beforeRouteLeave(to,from,next){
        console.log('beforeRouteLeave');
    }
}
</script>
<style scoped lang="">
.title{
    height: 44px;
    width: 100%;
    background: coral;
    display: flex;
}
.title li{
    flex:1;
    text-align: center;
    line-height: 44px;
}
.pageshop{
    display: flex;
    flex-direction: column;
}
</style>