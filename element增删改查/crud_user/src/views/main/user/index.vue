<template>
  <div>
    <el-table
      :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="标题" prop="title"></el-table-column>
      <el-table-column label="内容" prop="content"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <!-- 模糊搜索功能 -->
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 放一个弹框用来做编辑 -->
    <el-dialog title="修改信息" :visible.sync="dialogFormVisible">
      <el-form label-width="80px" :model="formLabelAlign">
        <el-form-item label="标题">
          <el-input v-model="formLabelAlign.title"></el-input>
        </el-form-item>
        <el-form-item label="内容介绍">
          <el-input v-model="formLabelAlign.content"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="btn">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>


<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      dialogFormVisible: false,
      search: "",
      formLabelAlign: {
        id: "",
        title: "",
        content: ""
      }
    };
  },
  watch:{
    search(oldmsg,newmsg){
      console.log(oldmsg,newmsg)
    }
  },
  computed: {
    ...mapState({
      tableData: state => state.user.userList
    })
  },
  created() {
    this.getList().then(res => {
      //console.log("user数据", res);
      console.log(this.tableData, "页面数据");
    });
  },
  methods: {
    ...mapActions({
      getList: "user/getList",
      removeList: "user/removeList",
      editList: "user/editList"
    }),

    handleEdit(index, row) {
      //点击编辑的时候出现弹框
      this.dialogFormVisible = true;
      this.formLabelAlign.title = row.title;
      this.formLabelAlign.content = row.content;
      this.formLabelAlign.id = row.id;
      //console.log(row.id);
    },
    handleDelete(index, row) {
      //console.log(row)
      this.open().then(res => {
        if (res.code == 1) {
          this.removeList(row.id).then(res => {
            console.log(res, "删除返回结果");
            this.$message({
              type: "success",
              message: "删除成功!"
            });
          });
        }
      });
      // this.removeList(row.id).then(res => {
      //   console.log(res, "删除返回结果");
      // });
    },
    btn() {
      //点击确定的时候关闭弹框 然后向后台发送请求
      this.dialogFormVisible = false;
      //顺带调用仓库的异步方法发送请求
      this.editList(this.formLabelAlign);
    },
    open() {
      return new Promise((resolve, reject) => {
        this.$confirm("此操作将永久删除该条信息, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
          center: true
        })
          .then(() => {
            resolve({ code: 1 });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
      });
    }
  }
};
</script>