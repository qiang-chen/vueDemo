<template>
  <div>
    <input type="text" placeholder="请输入用户名" v-model="user">
    <input type="password" placeholder="请输入密码" v-model="pwd">
    <button @click="btn">确定</button>
  </div>
</template>

<script>

//引入cookie这个包
import cooks from 'js-cookie';


export default {
  data() {
    return {
      user: "",
      pwd: ""
    };
  },
  methods: {
    btn() {
      //点击按钮的时候将cookie值存入
      console.log(this.user)
      //一分钟失效1/1440
      cooks.set('user', this.user, { expires: 1 });
    }
  }
};
</script>