<template>
  <div id="app">
    <header>足迹地图</header>
    <main>
      <div class="left">
        <!-- 使用左边省份组件 -->
        <province :provinceData='provinceData' @cityId='cityId'></province>
      </div>
      <div class="right">
        <!-- 使用右边城市组件 -->
        <city :cityData='cityData'></city>
      </div>
    </main>
  </div>
</template>

<script>
import province from "./components/province.vue";
import city from "./components/city.vue";
import axios from 'axios';
export default {
  name: 'App',
  data(){
    return {
      provinceData:[],
      cityData:[],
      cityIndex:0,
      data:null
    }
  },
  components: {
     //注册组件
    province,
    city
  },
  created() {
    //发送ajax请
    axios.get('/province/data').then(res=>{
      this.data=res.data;
        res.data.forEach(item=>{
          this.provinceData.push(item.name)
        });
        this.getCityData()
    })
  },
  methods: {
    cityId(index){
      console.log(index,'子组件传过来的参数');
      this.cityIndex=index;
      this.cityData.splice(0);
      this.getCityData()
    },
    getCityData(){
      //这个函数的作用是渲染右边城市的
        console.log(this.data[this.cityIndex].cities,"城市数据");
        if(this.data[this.cityIndex].cities.length==1){
          this.data[this.cityIndex].cities[0].cities.forEach(item=>{
                this.cityData.push(item.name)
          })
        }else{
          this.data[this.cityIndex].cities.forEach(item=>{
                this.cityData.push(item.name)
          })
        }
        console.log(this.cityData)
    }
  }
}
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
      
    }
  }
}
</style>

