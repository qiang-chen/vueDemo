<template>
  <div id="app">
    <header>
      <span>首页</span>
      <span>个人中心</span>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style  lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
html {
  font-size: calc(100 / 750 * 100vw);
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 0.34rem;
  header{
    width:100%;
    height:1rem;
    background:magenta;
    display:flex;
    color: #fff;
    span{
      flex:1;
      display:flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
