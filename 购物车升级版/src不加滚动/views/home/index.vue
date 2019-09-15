<template>
  <div class="container">
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <router-link to="/home/homepage" tag="span">首页</router-link>
      <router-link to="/home/menu" tag="span">菜单</router-link>
      <!-- <router-link to="/home/indent/" tag="span">订单</router-link> -->
   <span @click="indent">订单</span>
      <router-link to="/home/shopping" tag="span">购物车</router-link>
      <router-link to="/home/my" tag="span">我的</router-link>
    </footer>
  </div>
</template>
<script>
export default {
  data(){
    return {
      buy:[]
    }
  },
  //在home里面接受一下公交车传过来的参数
  created(){
    // this.$bus.$on("buylist",(arr)=>{
    //   console.log(arr,"home里面接受公交车");
    //   this.buy=arr;
    // })
  },
  methods:{
    indent(){
      //点击菜单带着参数传送
      console.log(this.buy,"home发送的数据")
      this.$router.push({path:`/home/indent`})
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 0.4rem;
  main {
    flex: 1;
    overflow: hidden;
  }
  footer {
    display: flex;
    width: 100%;
    height: 1rem;
    justify-content: space-around;
    align-items: center;
    border-top: 0.02rem solid #eee;
    span.active {
      color: red;
    }
  }
}
</style>