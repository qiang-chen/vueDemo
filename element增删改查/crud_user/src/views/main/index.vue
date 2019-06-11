<template>
  <div class="main">
    <el-container>
      <el-header class="header">主页面</el-header>
      <el-container>
        <el-aside width="200px">
          <el-row class="tac">
            <el-col>
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
              >
                <el-submenu index="1">
                  <template slot="title">
                    <span>导航一</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">
                        <router-link to="/main/user" tag="span">用户列表</router-link>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <router-link to="/main/add" tag="span">添加新用户</router-link>
                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    background-color: red;
    color: #fff;
  }
  .el-container {
    height: 100%;
  }
  .el-row,
  .el-col,
  .el-menu {
    width: 100%;
    height: 100%;
  }
  .el-menu-item{
      width: 100%;
    height: 100%;
      background-color: skyblue;
      span{
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
      }
  }
  .is-active{
      color: red !important;
  }
}
</style>
