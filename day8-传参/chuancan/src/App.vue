<template>
  <div id="app">
    <listItem :num='num' :msg='msg'></listItem>
  </div>
</template>

<script>

import listItem from './components/listItem'

export default {
  name: 'App',
  data(){
    return {
      num:0,
      msg:"测试"
    }
  },
  components: {
    listItem
  },
  created() {
    //接受孙子发过来的修改后的num的值
    this.$bus.$on('count',(newNum)=>{
      this.num=newNum
    });
    console.log(this.$on('btn'))
  },
}
</script>

<style>

</style>
