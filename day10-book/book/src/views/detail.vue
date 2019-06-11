<template>
    <div>
        详情
    </div>
</template>

<script>
export default {

    created () {
        console.log(this.$route.params.id,"详情页的id")
        this.$http('/api/detail',{params:{id:this.$route.params.id}}).then(res=>{
            console.log(res.data,"详情页接收到的数据")
        })
    }
}
</script>
