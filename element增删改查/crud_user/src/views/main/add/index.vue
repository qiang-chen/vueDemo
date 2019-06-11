<template>
  <div>
    <el-radio-group v-model="labelPosition" size="small">
      <el-radio-button label="left">左对齐</el-radio-button>
      <el-radio-button label="right">右对齐</el-radio-button>
      <el-radio-button label="top">顶部对齐</el-radio-button>
    </el-radio-group>
    <div style="margin: 20px;"></div>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="标题">
        <el-input v-model="formLabelAlign.title"></el-input>
      </el-form-item>
      <el-form-item label="内容介绍">
        <el-input v-model="formLabelAlign.content"></el-input>
      </el-form-item>
    </el-form>
    <div class="btn">
        <el-button type="primary" :loading="load" @click="btn">加载中</el-button>
    </div>
  </div>
</template>
<script>

import {mapActions} from 'vuex'

export default {
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        id: "",
        title: "",
        content: "",
      },
      load:false
    };
  },
  methods: {
      ...mapActions({
          addList:"user/addList"
      }),
      btn(){
          //触发仓库的异步增加请求
          console.log("点击")
          this.load=true;
          this.addList(this.formLabelAlign).then(res=>{
              if(res.code==1){
                  this.load=false;
                  this.$alert("添加成功")
              }
          })
      }
  },
};
</script>

<style lang="scss">
    .btn{
        width: 100%;
        height: 100%;
    }
</style>