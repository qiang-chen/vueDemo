<template>
    <div id="app">
       <el-container>
            <el-header>
                header
            </el-header>
            <div class="wrap">
                <router-view></router-view>
            </div>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>
<style lang="scss">
 *{
     margin:0;
     padding:0;
     list-style: none;
     box-sizing: border-box;
       
 }

 html,body,#app,.el-container,.wrap{
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
  
  
</style>

