<template>
  <div class="right">
    <div class="item" v-for="(item,index) in rightData" :key="index">
      <h4>此商品需要:{{item.price}}元</h4>
      <h4>{{item.content}}</h4>
      <div class="count">
        <!-- 使用加加减减的组件 -->
        <count :num="item.num" :id="item.id"></count>
      </div>
    </div>
  </div>
</template>

<script>
//引入加加减减的组件
import count from "./count";

export default {
  //接受根组件传过来的参数
  props: ["rightData"],
  data(){
      return {
          
      }
  },
  components: {
    //注册组件
    count
  },
  created() {
    
  }
};
</script>

<style lang="scss" scoped>
.right {
  flex: 7;
  background-color: pink;
  height: 100%;
  .item {
    width: 100%;
    height: 4rem;
    text-align: center;
    border-bottom: 1px solid #eee;
    display: flex;
    flex-direction: column;
    h4 {
      flex: 5;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .count {
      flex: 5;
    }
  }
}
</style>
