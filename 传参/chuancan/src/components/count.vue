<template>
  <div class="count">
    <div>
      <span @click="hits('-')">-</span>
      <span>{{num}}</span>
    </div>
    <span @click="hits('+')">+</span>
  </div>
</template>

<script>
export default {
  //引入爷爷传过来的参数
  props:['num'],
  methods: {
    hits(type){
      let newNum;
      if(type==="-"){
        newNum=this.num-1;
      }else{
        newNum=this.num+1;
      }
     
     //向爷爷发送更改后的结果
     this.$bus.$emit('count',newNum)
    }
  }
}
</script>