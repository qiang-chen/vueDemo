<template>
  <div>
    <header>订单</header>
    <h1>{{aa}}</h1>
  </div>
</template>

<script>
export default {
  props: ["aa"]
};
</script>


<style lang="scss" scoped>
header {
  margin-top: 0.2rem;
  width: 100%;
  height: 1rem;
  background-color: red;
  color: #fff;
  text-align: center;
  line-height: 1rem;
}
h1 {
  text-align: center;
}
</style>
