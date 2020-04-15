<template>
  <div class="container">
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-field label="邮箱" state="error" v-model="user"></mt-field>
    <mt-button type="primary" size="large" @click.native="verify">确认</mt-button>
  </div>
</template>

<script>
import md5 from 'md5';
import util from '../../utils/';
let {setCook}=util;
// console.log(setCook)
export default {
  data() {
    return {
      username: "",
      password: "",
      user: ""
    };
  },
  methods: {
      verify(){
          //console.log(this.username,this.password)
          let username=md5(this.username);
          let password=md5(this.password);
          // console.log(md5(username),8888888888888)
          this.$http.post("/login",{username,password}).then(res=>{
              // console.log(res.data.msg==username)
              
              if(res.data.code){
                  //如果请求成功后往第三方包存入
                  // console.log(res.data.msg,"存入")
                    setCook(res.data.msg);
                    //存入cook后然后跳转my页面
                    this.$router.push("/my")
              }
          })
      }
  }
};
</script>

<style lang="scss">
.container {
  width: 100%;
  padding: 0 0.4rem;
  box-sizing: border-box;
  margin-top: 1rem;
}
</style>