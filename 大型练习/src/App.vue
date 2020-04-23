<template>
  <div id="app">
      <div class="con">
          <router-view/>
      </div>
    <footer>
        <router-link to="/">首页</router-link>
        <router-link to="/classify">分类</router-link>
        <router-link to="/car">购物车<span>{{addCount}}</span></router-link>
        <router-link to="/my">我的</router-link>
    </footer>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'App',
    computed:{
        ...mapGetters(['addCount'])
    }
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
 #app{
     display: flex;
     flex-direction: column;
     .con{
         flex:1;
         width:100%;
     }
     footer{
         width:100%;
         height: 44px;
         display: flex;
         align-items: center;
         justify-content:space-around;
         border-top:1px solid gray;
     }
 }
</style>
