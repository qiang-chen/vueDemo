<template lang="pug">
    <div class="container">
        <span v-for="(item,index) in arr" v-on:click="tap(index)" :class="count==index?'active':''">{{item}}</span>
    </div>
</template>

<script>
export default {
    data(){
        return {
            count:-1,
            arr:["tap1","tap2","tap3"]
        }
    },
    methods:{
        tap(index){
            // console.log(index)
            this.count=index;
        }
    }
}
</script>

<style>
.container{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
span{
    flex: 1;
    border: solid 1px pink;
    display: flex;
    justify-content: center;
    align-items: center;
}
span.active{
    background: red;
}
</style>


