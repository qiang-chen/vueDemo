<template>
  <div class="cityContainer"  ref="gun">
    <!-- {{cityList}} -->
    <div class="cityListEl">
      <div class="cityItem" v-for="(item,index) in cityList" :key="item.id">
        <h3 ref="title">{{index}}</h3>
        <p v-for="(el,ind) in item" :key="ind" @click="location(el.nm)">{{el.nm}}</p>
      </div>
    </div>
    <div class="lou">
      <b v-for="(item,index,i) in cityList" :key="item.id" @click="ll(i)">{{index}}</b>
    </div>
  </div>
</template>


<script>
//引入api下面js封装获取请求城市的函数
import { getCityList } from "@/api/index";
// console.log(getCityList, "获取城市列表数据的函数封装");
export default {
  name: "city",
  data() {
    return {
      cityList: {}
    };
  },
  //在城市列表请求城市数据
  async created() {
    console.log(111111111111);

    let data = await getCityList();
    data = data.cts;
    //首先将数据按照字母的顺序排序一波
    data.sort((a, b) => a.py.slice(0, 1).localeCompare(b.py.slice(0, 1)));
    //此时数组已经排序之后的了 接着截取里面每个字母组成一个新的数组
    let letterArr = Array.from(
      new Set(data.map(item => item.py[0].toLocaleUpperCase()))
    );
    //此时到了这里letterArr已经是我们处理好的一个存放26个字母排序后的存放的数组了
    //接着去data声明一个对象格式为{A：[{},{}]} A后面跟着所有的属于A的对象
    // console.log(letterArr);
    //遍历循坏data这个对象判断ABCD为首的key是不是存在 存在的话就往后push 不存在就创建一个
    let opj = {};
    data.forEach(item => {
      let initial = item.py.slice(0, 1).toLocaleUpperCase();
      if (opj[initial]) {
        //之前这里直接修改的data数据里面的这个this.cityList  他初始值是{}
        opj[initial].push(item);
      } else {
        opj[initial] = [item];
      }
    });
    this.cityList = opj;
    console.log(this.cityList, "城市列表数据");
    // console.log(this.$route);
  },
  methods:{
      ll(index){
          //console.log(index)
          //console.log(this.$refs.title[index].offsetTop,this.$refs.gun)
          this.$refs.gun.scrollTop=this.$refs.title[index].offsetTop
      },
      location(lo){
          localStorage.setItem("lo",lo);
          
          //传过去怎么没有接收到
          //this.$router.replace({name:"/",params:{lo:lo}})
          this.$router.push({name:"hit",params:{lo:lo}})

          //this.$router.push({name:"/",query:{lo:lo}})
      }
  }
};
</script>

<style lang="scss" scoped>
.cityContainer {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.cityListEl {
  width: 100%;
  background: #ebebeb;
}
.lou{
    width: 1rem;
    height: 100%;
    top: 0;
    font-size: 0.4rem;
    background-color: aqua;
    position: fixed;
    right: 0;
    display: flex;
    flex-direction: column;
}
</style>