<template>
    <div id="app">
       <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="200px">
                     <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                        <el-menu-item index="1" @click="$router.push('/demo1')">
                            <i class="el-icon-menu"></i>
                            <span slot="title">demo1</span>
                        </el-menu-item>
                        <el-menu-item index="2" @click="$router.push('/demo2')">
                            <i class="el-icon-menu"></i>
                            <span slot="title">demo2</span>
                        </el-menu-item>
                        <el-menu-item index="3" @click="$router.push('/demo3')">
                            <i class="el-icon-setting"></i>
                            <span slot="title">demo3</span>
                        </el-menu-item>
                        </el-menu>
                </el-aside>
                <el-container>
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                </el-container>
            </el-container>
            <el-footer>Footer</el-footer>
        </el-container>
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
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    height:100%;
    color: #333;
    text-align: center;
    background: #545c64;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  
 .el-container {
    height:100%;
  }
  
</style>
