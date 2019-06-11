<template>
  <div>
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purples">系统硬盘</div>
      </el-col>
      <el-col :span="20">
        <el-col :span="20" class="row">
          <div class="grid-content bg-purples bg-purple-light">系统</div>
          <el-radio-group v-model="radio1">
            <el-radio-button label="centos6.8"></el-radio-button>
            <el-radio-button label="centos7.0"></el-radio-button>
            <el-radio-button label="Windows2008"></el-radio-button>
          </el-radio-group>
        </el-col>
        <el-col :span="20" class="row">
          <div class="grid-content bg-purples bg-purple-light">CPU</div>
          <el-radio-group v-model="radio2">
            <el-radio-button label="2"></el-radio-button>
            <el-radio-button label="4"></el-radio-button>
            <el-radio-button label="16"></el-radio-button>
            <el-radio-button label="32"></el-radio-button>
            <el-radio-button label="64"></el-radio-button>
          </el-radio-group>
        </el-col>
        <el-col :span="20" class="row">
          <div class="grid-content bg-purples bg-purple-light">内存</div>
          <el-radio-group v-model="radio3" class="ge">
            <el-radio-button label="2"></el-radio-button>
            <el-radio-button label="4"></el-radio-button>
            <el-radio-button label="16"></el-radio-button>
            <el-radio-button label="32"></el-radio-button>
            <el-radio-button label="64"></el-radio-button>
            <el-radio-button label="128"></el-radio-button>
            <el-radio-button label="258"></el-radio-button>
          </el-radio-group>
        </el-col>

        <el-col :span="20" class="row">
          <div class="grid-content bg-purples bg-purple-light">硬盘</div>
          <el-radio-group v-model="radio4">
            <el-radio-button label="20"></el-radio-button>
            <el-radio-button label="40"></el-radio-button>
            <el-radio-button label="100"></el-radio-button>
            <el-radio-button label="600"></el-radio-button>
            <el-radio-button label="800"></el-radio-button>
            <el-radio-button label="1T"></el-radio-button>
          </el-radio-group>
        </el-col>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purples">安装软件</div>
      </el-col>
      <el-col :span="20" class="rowcheck">
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="1号软件"></el-checkbox>
          <el-checkbox label="2号软件"></el-checkbox>
          <el-checkbox label="3号软件"></el-checkbox>
          <el-checkbox label="4号软件"></el-checkbox>
          <el-checkbox label="5号软件"></el-checkbox>
          <el-checkbox label="6号软件"></el-checkbox>
          <el-checkbox label="8号软件"></el-checkbox>
          <el-checkbox label="9号软件"></el-checkbox>
          
        </el-checkbox-group>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio1: "centos6.8",
      radio2: "2",
      radio3: "2",
      radio4: "20",
      checkList: ["1号软件"]
    };
  },
  destroyed () {
    let opj={radio1:this.radio1,radio2:this.radio2,radio3:this.radio3,radio4:this.radio4,check:this.checkList};
    localStorage.setItem("detail",JSON.stringify(opj))
  }
};
</script>

<style lang="scss">
.grid-content {
  width: 80px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-checkbox{
    margin-top: 15px;
}
.rowcheck {
  margin: 20px 0;
}
.row {
  display: flex;
  margin: 10px 0;
}
.bg-purple-light {
  display: flex;
  align-items: center;
  margin-right: 30px;
}
.el-radio-group {
  width: 100%;
  display: flex;
  .el-radio-button {
    flex: 1;
    .el-radio-button__inner {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

