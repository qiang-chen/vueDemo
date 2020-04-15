<template>
  <div id="app">
   
    <keep-alive include="city">
     <router-view/>
    </keep-alive>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
    *{
      margin: 0;
      padding: 0;
    }
    html,body{
      width: 100%;
      height: 100%;
    }
    html{
      font-size: calc(100/750*100vw);
    }
    #app{
      width: 100%;
      height: 100%;
    }
</style>
