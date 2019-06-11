<template>
    <div class="item">
        <count :num='num'></count>
        <button @click='btn'>点击</button>
    </div>
</template>

<script>

//引入加加减减模块
import count from './count.vue';


export default {

    props: ['num','msg'],
    components:{
        count
    },
    methods: {
        btn(){
            let newMsg="子元素修改后的";
            this.$emit('btn',newMsg)
        }
    },
}
</script>