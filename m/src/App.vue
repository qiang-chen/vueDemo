<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
      gg:null
    }
  },
};
</script>

<style>
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
  font-size: 13.333333vw;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
