<template>
  <div id="app">
    <div class="title">
      <h3>{{title}}</h3>
    </div>
    <header>
      <!-- 给每一个span添加点击事件然后发送ajax请求从而达到切换数据的效果 -->
      <span
        v-for="(item,index) in arr"
        :key="index"
        :class="{'active':count==index}"
        @click="bgName(index,item)"
      >{{item}}</span>
    </header>
    <div class="list">
      <!--使用我们写的列表组件  循坏创建列表 并且向子组件传参数  -->
      <tap
        v-for="(item,index) in list"
        :key="index"
        :title="item.title"
        :address="item.address"
        :interview="item.interview"
        :state="item.state"
        :remind="item.remind"
      ></tap>
    </div>
  </div>
</template>

<script>
//引入ajax
import axios from "axios";

//引入我们写好的子组件
import tap from "./components/tap";

export default {
  name: "App",
  data() {
    return {
      title: "面试列表",
      count: 0,
      arr: ["已通过", "已打卡", "已放弃", "全部"],
      list: []
    };
  },
  components: {
    //写一个tap切换的模板
    //注册我们写的组件
    tap
  },
  methods: {
    bgName(index,item) {
      this.count = index;
      //每次点击的调用ajax请求
      this.getData(item)
    },
    getData(statu) {
      //封装一个方法用来点击获取ajax请求和页面默认获取ajax请求
      axios.get(`/api/list?data=${statu}`).then(res => {
        this.list = res.data.listData;
      });
    }
  },
  created() {
    //在生命周期的第二个函数向后台发送ajax请求列表数据
    this.getData("已通过");
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
header {
  width: 100%;
  height: 50px;
  display: flex;
  border-bottom: 1px solid #000;
  span {
    flex: 1;
    line-height: 50px;
    text-align: center;
  }
  span.active {
    background-color: red;
    color: #fff;
  }
}
</style>
