<template>
    <div class="containerLogin">
        <input type="text" placeholder="请输入用户名" v-model="user">
        <input type="password" placeholder="请输入密码" v-model="pwd">
        <button @click="btn">确定</button>
    </div>
</template>

<script>
import Cookie from "js-cookie";
export default {
    data(){
        return {
            user:"",
            pwd:""
        }
    },
    methods:{
        btn(){
            Cookie.set("user",this.user,{ expires: 1/(24*60) });
            this.$router.go(-1)
        }
    }
}
</script>


<style lang="scss" scoped>
    .containerLogin{
        width: 100%;
        height: 100%;
        padding: 0 .2rem;
        box-sizing: border-box;
        text-align: center;
        input{
            width: 100%;
            height: 1rem;
        }
        button{
            width: 50%;
            height: .6rem;
        }
    }
</style>