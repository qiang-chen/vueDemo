<template>
<div class="item" @mouseover="flag=true" @mouseout='flag=false'>
    <span :style="{'background':bg}"><i :class="['iconfont',icon]"></i></span>
    <p v-show="flag">{{reminder}}</p>
</div>

    
</template>

<script>
export default {
    //接受根组件传过来的参数
    data(){
        return {
            flag:false
        }
    },
    props: ['icon','bg','reminder']
}
</script>

<style lang="scss" scoped>
@import '../assets/fonts/iconfont.css';
    .item{
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: center;
        position: relative;
        span{
            width: 50px;
            height: 50px;
            display: flex;
            border-radius: 50%;
            justify-content: center;
            align-items: center;
            i{
                font-size: 30px;
                color: #999;
            }
        }
        p{
            position: absolute;
            top: -20px;
        }
    }
</style>