<template>
  <div class="list">
    <dl :class="{'border':layout=='border'}">
      <dt v-if="icon">
        <img :src="icon" alt>
      </dt>
      <dd>{{label}}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  //接受根组件过来的参数
  props: ["label", "icon", "layout"],
  created() {
      //在这里可以打印根组件传过来的参数
      //console.log(this.label,"9999")
  },
};
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}
.list {
  /* 给style加上这个scoped这个属性就保证这些样式只能在这篇组件中使用根组件也就是父子组件不能使用 */
  width: 25%;
  dl {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    dt {
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      width: 100%;
      height: 100%;
    }
    dd {
      width: 100%;
      text-align: center;
      height: 40px;
      line-height: 40px;
    }
  }
  .border {
    border: solid 1px;
    img {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
