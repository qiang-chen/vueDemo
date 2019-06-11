<template>
  <div class="itemList">
    <!-- 必须循坏的时候加上这个key 不然会警示这里变红
      每次给个key值让其变成独一无二的
    -->
    <div class="title" v-for="(item,index) in list" :key="index+'a'" >
      <h2>{{item.Subject}}</h2>
      <div class="lists">
        <myDl
          v-for="(listitem,ind) in item.Content"
          :key="ind"
          :label="listitem.Label"
          :icon="listitem.Icon"
          :layout="item.Layout"
        ></myDl>
      </div>
    </div>
  </div>
</template> 

<script>
import myDl from "./my_dl.vue";
import data from "../../mock/catagory";
import titles from "../views/title.vue";

//引入加加减减
import shop from "../views/count.vue"

export default {
  components: {
    myDl,
    titles
  },
  data() {
    return {
      list: data
    };
  },
  methods: {},
  created() {
    console.log(this.list);
  }
};

//通过循坏这个数组然后达到多次调用子组件然后进行页面的渲染 接着需要把参数传给子组件 也就是父子组件之间的传值问题
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
.itemList {
  width: 100%;
  height: 100%;
  .title{
    text-align: center;
    h2{
      height: 60px;
    line-height: 60px;
    }
  }
  .lists {
    width: 100%;
    display: flex;
    flex-flow: row wrap;

  }
}
</style>