<template>
  <div class="homeContainer">
    <header>
         <div class="title">猫眼电影</div>
      <div class="nav">
        <span @click="city">{{location}}</span>
        <router-link to="hit" tag="span">正在热映</router-link>
        <router-link to="upcomingMovies" tag="span">即将上映</router-link>
        <span>搜索</span>
      </div>
    </header>
    <!--切换使用正在热映与即将上映的路由  -->
    <main>
<router-view></router-view>
    </main>
    
  </div>
</template>

<script>
export default {
  data(){
    return {
      location:"北京",
    }
  },
  created(){
    console.log(this.$route)
    this.location=this.$route.params.lo||localStorage.lo;
  },
  methods:{
    city(){
      //点击发送路由请求然后顺便把这个城市也带去
       //this.$router.push({name:'city',params:{location:this.location}});
        //this.$router.push({path:'/city',params:{location:this.location}})  这种不支持
       //this.$router.push({path:'/city',query:{location:this.location}});
       this.$router.push({name:'city',query:{location:this.location}});
    }
  }
}
</script>


<style lang="scss" scoped>
.homeContainer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 0.34rem;
}
header {
  width: 100%;
 
   .title {
    height: 1rem;
    background-color: red;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.46rem;
  }
  .nav {
    width: 100%;
    height: 0.9rem;
    background-color: #fff;
    color: #666;
    border-bottom: 1px solid #eee;
    display: flex;
    span {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 2px solid transparent;
      box-sizing: border-box;
      &:first-child,&:last-child{
        font-size: 0.28rem;
      }
      &.active{
        color: red;
        border-bottom: 2px solid red;
      }
    }
  }
}
main{
  flex:1;
  overflow: auto;
}
</style>