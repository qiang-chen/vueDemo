<template>
  <div class="container">
     <h4>近期最受期待</h4>
    <expect></expect>
    <div class="list"></div>
  </div>
</template>
<script>
//引入影院列表
import expect from "../../components/expect";
export default {
  //注册组件
  components: {
    expect
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding: 0 0.1rem;
  box-sizing: border-box;
  h4 {
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    box-sizing: border-box;
    padding: 0 0.26rem;
  }}
.list {
  width: 100%;
  height: 100%;
}
</style>