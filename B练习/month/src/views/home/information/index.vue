<template>
    <div>
        我是点击消息展示的页面
    </div>
</template>

<script>
export default {
    created(){
        this.$bus.$on("ww",(a)=>{
            console.log(a,"aaaa")
        })
    }
}
</script>