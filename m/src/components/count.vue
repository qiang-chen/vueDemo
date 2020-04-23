<template>
    <div>
        <b @click="add('-')">-</b>
        <b>{{num}}</b>
        <b @click="add('+')">+</b>
    </div>
</template>

<script>
export default {
    //接受父组件传过来的参数用来展示num
    data(){
        return {
            newNum:0
        }
    },
    props:['id','num'],
    methods:{
        add(type){
            let newNum=this.num;
            if(type=="-"){
                newNum-=1;
            }else{
                newNum+=1;
            }
            this.$emit("shuzi",newNum,this.id)
        }
    }
}
</script>