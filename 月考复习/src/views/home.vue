<template>
    <div class="home-wrap">
        <swiper :banner="banner"></swiper>
        <h1>本周特价</h1>
        <product></product>
    </div>
</template>
<script>
import swiper from '../components/swiper'
import product from '../components/product'
import {mapActions} from 'vuex'
export default {
    components:{
        swiper,
        product
    },
    data(){
        return {
            banner:[]
        }
    },
    created(){
        this.$http.get('/api/banner').then(res => {
            if(res.data.code === 1){
                this.banner = res.data.data;
            }
        })
        this.getData();
    },
    methods:{
        ...mapActions(['getData'])
    }
}
</script>
