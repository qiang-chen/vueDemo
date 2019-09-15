<template>
  <div id="app">

      <homes></homes>
   
  </div>
</template>

<script>
import homes from "./views/home/index.vue";

export default {
  name: "home",
  components: {
    homes
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
  font-size: 13.333333vw;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
