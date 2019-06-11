<template>
    <div>
        <el-container>
            <el-aside width="200px">
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item index="0">
                    <span slot="title">
                        <div style="display:flex;justify-content:space-between; align-items: center;">
                            <span>项目</span>
                            <i class="el-icon-menu" @click="changeDialog(true)"></i>
                        </div>
                    </span>
                </el-menu-item>
                <el-menu-item index="1" @click="$router.push('/product/all')">
                    <i class="el-icon-menu"></i>
                    <span slot="title">所有的{{all.length}}</span>
                </el-menu-item>
                <el-menu-item index="2" @click="$router.push('/product/meCreate')">
                    <i class="el-icon-menu"></i>
                    <span slot="title">我创建的{{meCreate.length}}</span>
                </el-menu-item>
                <el-menu-item index="3" @click="$router.push('/product/mePartake')">
                    <i class="el-icon-setting"></i>
                    <span slot="title">我参与的{{mePartake.length}}</span>
                </el-menu-item>
                <el-menu-item index="4" @click="$router.push('/product/filed')">
                    <i class="el-icon-setting"></i>
                    <span slot="title">已归档{{filed.length}}</span>
                </el-menu-item>
            </el-menu>
            </el-aside>
            <el-container>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
        <el-dialog title="新建项目" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="项目名称" :label-width="formLabelWidth">
                <el-input v-model="form.title" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item :label-width="formLabelWidth">
                        <el-checkbox v-model="form.checked">是否公开源码</el-checkbox>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="changeDialog(false)">取 消</el-button>
                <el-button type="primary" @click="curFun">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import {mapActions,mapGetters,mapState,mapMutations} from 'vuex'
export default {
    created(){
        this.getData();
    },
    methods:{
        ...mapActions(['getData','cur']),
        ...mapMutations(['changeDialog']),
        curFun(){
            this.cur(this.form);
        }
    },
    computed:{
        ...mapGetters(['meCreate','mePartake','filed']),
        ...mapState(['all','dialogFormVisible'])
    },
    data(){
        return {
            form:{
                title: '',
                checked:false
            },
            formLabelWidth: '120px'
        }
    }
}
</script>

<style>

  .el-aside {
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


