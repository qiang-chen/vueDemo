<template>
  <div id="app">
    <header>
      <span>返回</span>
      <span>个人中心</span>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
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
  header {
    background: red;
    color: #fff;
    width: 100%;
    height: 50px;
    display: flex;
    span {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
