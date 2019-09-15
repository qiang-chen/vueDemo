<template>
  <div>
    <h1>订单页面</h1>
    <h4 v-for="item in arr" :key="item.id">
      <span>{{item.title}}</span>
      <span>{{item.num}}</span>
    </h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: []
    };
  },
  created() {
    //接受公交车
    this.$bus.$on("buylist", arr => {
      console.log(arr, "订单页面接受到公交车");
      this.arr = arr;
    });
    if (!this.arr.length) {
      this.arr = JSON.parse(localStorage.getItem("buy"));
      console.log(this.arr, "订单！！");
    }
  }
};
</script>