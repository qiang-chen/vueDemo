<template>
  <div id="app">
    <header>足迹地图</header>
    <main>
      <div class="left">
        <!-- 使用左边省份组件 -->
        <province v-for="(item,index) in province" :bg="bg" :key="index" :name="item" :index='index' @ups='ups'></province>
      </div>
      <div class="right">
        <!-- 使用右边城市组件 -->
        <city v-for="(item,index) in city" :key='index' :name="item"></city>
      </div>
    </main>
  </div>
</template>

<script>
//引过来我们写的两个组件

import province from "./components/province.vue";
import city from "./components/city.vue";
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      data:[],
      province: [],
      list:0,
      bg:0,
      city:[]
    };
  },
  methods: {
     ups(index){
       //console.log(index,"父组件接受到的参数");
       console.log(this.city)
       this.city.splice(0)
       this.bg=index;
       this.list=index;
       if(this.data[this.list].cities.length==1){
         //console.log(res.data[this.list].cities[0].cities,"aaaaa")
          this.data[this.list].cities[0].cities.forEach(item=>{
            this.city.push(item.name);
          })
       }else{
         this.data[this.list].cities.forEach(item=>{
            this.city.push(item.name);
          })
       }
     }
  },
  components: {
    //注册组件
    province,
    city
  },
  created() {
    //console.log(this.list,"我想要列表数据")
    //在生命周期的第二个阶段向后台发送ajax请求
    axios.get("/province/list").then(res => {
      this.data=res.data;
      res.data.forEach(item => {
        this.province.push(item.name);
      });
       if(res.data[this.list].cities.length==1){
         //console.log(res.data[this.list].cities[0].cities,"aaaaa")
          res.data[this.list].cities[0].cities.forEach(item=>{
            this.city.push(item.name);
          })
       }else{
         res.data[this.list].cities.forEach(item=>{
            this.city.push(item.name);
          })
       }
       //console.log(this.city,'这是城市数据')
    });
  },
  beforeUpdate(){
    console.log(this.list,"数据发生了改变");
    
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
html,
body {
  width: 100%;
  height: 100%;
}
html {
  font-size: calc(100 / 750 * 100vw);
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 0.34rem;
  background-color: skyblue;
  header {
    width: 100%;
    height: 1rem;
    background-color: aquamarine;
    color: #fff;
    text-align: center;
    line-height: 1rem;
  }
  main{
    flex: 1;
    overflow: hidden;
    display: flex;
    .left{
      width: 30%;
      height: 100%;
      overflow: auto;
    }
    .right{
      width: 70%;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      align-content: center;
      align-content: flex-start;
    }
  }
}
</style>
