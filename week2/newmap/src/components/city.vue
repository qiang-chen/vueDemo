<template>
  <div class="list">
    <span v-for="(item,index) in cityData" :key="index">{{item}}</span>
  </div>
</template>

<script>
export default {
  //接受根组件传过来的参数
  props: ["cityData"]
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: center;
  align-content: flex-start;
  span {
    width: 100%;
    height: 60%;
    border: solid 1px #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.08rem;
    width: 30%;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.2rem 0;
  }
}
</style>
