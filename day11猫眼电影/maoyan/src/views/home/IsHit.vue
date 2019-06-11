<template>
  <!-- 给list这层盒子加上固定宽高然后利用bette-scrool做上拉加载功能 -->
  <div class="list">
    <!-- 在这个正在热映里面调用我们封装好的电影组件 -->
    <listItem v-if="listData.length" :listData="listData"></listItem>
  </div>
</template>

<script>
//引入我们封装的电影列表组件
import listItem from "@/components/listItem";
//引入我们封装的函数用来发送网络请求
//import { parmasGet } from "../../api/index";
import {getHotList} from "@/api/index";
// console.log(getHotList,"热门数据请求");

export default {
  //注册一波内置数据
  data() {
    return {
      listData: [],
      page: 1,
      limit: 6
    };
  },
  //注册组件
  components: {
    listItem
  },
  async created() {
    // 发送ajax请求来得到我们需要的列表数据
    // 我想要默认加载6条每次增加一页加载6条
    // this.$http
    //   .get("/api/list", { params: { page: this.page, limit: this.limit } })
    //   .then(res => {
    //     //console.log(res.data);
    //     res.data.forEach(item => {
    //       item.img = item.img.replace("w.h", "128.180");
    //     });
    //     this.listData = res.data;
    //     console.log(this.listData, "改变后的数据");
    //   });


    // let data = await parmasGet({
    //   params: { page: this.page, limit: this.limit }
    // });

  let data = await getHotList();
    // console.log(data.movieList,"热门网络请求")
    data.movieList.forEach(item => {
      item.img = item.img.replace("w.h", "128.180");
    });
    this.listData=data.movieList;
  }
};
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  overflow: scroll;
}
</style>
