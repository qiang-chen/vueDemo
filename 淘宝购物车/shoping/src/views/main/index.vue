<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
        <router-view></router-view>
    </el-main>
    <el-footer>
        <router-link to="/main/home" tag="span">
        首页
        </router-link>
        <router-link to="/main/shop" tag="span">
        购物车
        </router-link>
        <!-- <span>首页</span>
        <span>购物车</span> -->
        <router-link to="/main/my" tag="span">
        我的
        </router-link>
        <!-- <span>我的</span> -->
    </el-footer>
  </el-container>
</template>




<style lang="scss" scoped>
    .el-container{
        width: 100%;
        height: 100%;
        .el-header{
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: red;
            color: #ffffff;
            font-size: .45rem;
        }
        .el-main{
            padding: 0;
        }
        .el-footer{
            padding: 0;
            display: flex;
            justify-content: space-around;
            align-items: center;
            border-top: 1px solid #000;
        }
    }
</style>