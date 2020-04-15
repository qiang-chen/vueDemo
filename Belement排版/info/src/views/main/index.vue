<template>
  <el-container>
    <el-header>
      <el-steps :active="active" finish-status="success">
        <el-step title="业务详情"></el-step>
        <el-step title="服务器详情"></el-step>
        <el-step title="确认"></el-step>
      </el-steps>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <el-button style="margin-top: 12px;" @click="prev" v-show="active==3||2">上一步</el-button>
      <!-- <el-button style="margin-top: 12px;" @click="next" v-show="active==1||2">下一步{{active}}</el-button> -->
      <el-button style="margin-top: 12px;" @click="next" v-show="active!=3">下一步{{active}}</el-button>
      <el-button style="margin-top: 12px;" @click="config" v-show="active==3">确认</el-button>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      active: 1
    };
  },

  methods: {
      config(){},
    prev() {
        this.active--;
        switch (this.active) {
        case 1:
          this.$router.push("/main/business");
          break;
        case 2:
          this.$router.push("/main/details");
          break;
        case 3:
          this.$router.push("/main/affirm");
          break;
        default:
          break;
      }
    },
    next() {
        this.active++;
        console.log(this.active)
      //if (this.active++ > 2) return;
      switch (this.active) {
        case 1:
          this.$router.push("/main/business");
          break;
        case 2:
          this.$router.push("/main/details");
          break;
        case 3:
          this.$router.push("/main/affirm");
          break;
        default:
          break;
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log(to.path)
    if(to.path!="/main/business"){
      next("/main/business")
    }else{
      next()
    }
  }
};
</script>