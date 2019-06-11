<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,i) in banner" :key="i">
                <img :src="item.url" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper/dist/js/swiper.min'
export default {
    props:['banner'],
    created(){
        this.$nextTick().then(() => {
            new Swiper('.swiper-container')   
        })
    }
}
</script>
<style>
@import 'swiper/dist/css/swiper.min.css'
</style>

