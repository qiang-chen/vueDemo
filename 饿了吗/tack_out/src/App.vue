<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import home from './views/home'

export default {
  name: "App",
  components:{
    home
  }
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
html {
  font-size: calc(100 / 750 * 100vw);
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 0.34rem;
}
</style>
