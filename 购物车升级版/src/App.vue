<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    
    <router-view/>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
html,body,#app{
  height: 100%;
  width: 100%;
}
#app>div{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

}
.page{
  flex: 1;
  width: 100%;
}
footer{
  height: 50px;
  width: 100%;
  background: cornflowerblue;
  display: flex;
}
footer a{
  flex: 1;
  line-height: 50px;text-align: center;
}
</style>
