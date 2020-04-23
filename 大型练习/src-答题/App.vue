<template>
  <div id="app">
      <div class="con">
         <router-view/>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
 *{
     margin:0;
     padding:0;
     list-style: none;
     box-sizing: border-box;
 }

 html,body,#app{
     width:100%;
     height:100%;
     overflow: hidden;
 }
</style>
