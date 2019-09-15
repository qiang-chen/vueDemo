<template>
  <div>
    <!--加加减减模块  -->
    <b @click="sumChange('-')">-</b>
    <span>{{num}}</span>
    <b @click="sumChange('+')">+</b>
  </div>
</template>

<script>
export default {
  //接受一波右边父组件传过来props
  props: ["num","id"],
  created() {
    //console.log(this.num,this.id,"父组件传过来的")
  },
  methods: {
    sumChange(type) {
      let newNum;
      if(type=="-"){
          newNum=this.num-1;
      }else{
          newNum=this.num+1;
      }
     //将改变后的newNum发回给仓库通知改变仓库的数据达到修改视图
     let id=this.id;
     console.log(this)
    this.$store.commit("right/sumChange",{newNum,id})

    }
  }
};
</script>