<template>
  <div class="homeContainer">
    <main>
      <router-view></router-view>
    </main>

    <footer>
        <span @click="ff">ssss</span>
        <router-link to="/" tag="span">首页</router-link>
        <router-link to="/home/attention" tag="span">关注</router-link>
        <span>+</span>
        <router-link to="/home/information" tag="span">消息</router-link>
        <router-link to="/home/my" tag="span">我</router-link>
    </footer>
  </div>
</template>
<script>
export default {
    data(){
        return {
            aa:"aa"
        }
    },
      created(){
        this.$bus.$on("price",(opj)=>{
            console.log(opj,"我是home接受到的公交车")
            // this.$bus.$emit("aa",opj)
            this.aa=opj
        })
    },
    methods:{
        ff(){
            console.log("发车")
            this.$bus.$emit("ww",this.aa)
        }
    }
}
</script>
<style lang="scss">
.homeContainer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 0.34rem;
}
main{
    flex: 1;
}
footer{
    width: 100%;
    height: 1rem;
    background-color: red;
    color: #fff;
    display: flex;
    justify-content: space-around;
    font-size: 0.44rem;
    align-items: center;
}
</style>