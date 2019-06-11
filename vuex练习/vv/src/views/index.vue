<template>
    <div>
        <button @click="changeCount('+')">+</button>
        <span>{{shu}}</span>
        <button @click="changeCount('-')">-</button>

        {{$store.state.index.count}}
    </div>
</template>

<script>
export default {
    computed:{
        shu(){
            return this.$store.state.index.count
        }
    },
    methods:{
        changeCount(type){
            //触发仓库中的mutation
            this.$store.commit("changeCount",type,"参数二")
        }
    },
    created(){
        console.log(this.$store.state.index.count)
    }
}
</script>