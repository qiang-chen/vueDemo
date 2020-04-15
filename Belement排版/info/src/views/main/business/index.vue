<template>
  <div>
    <el-form ref="form" label-width="80px">
      <el-form-item label="选择产品线" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择产品">
          <el-option label="产品线一" value="shanghai"></el-option>
          <el-option label="产品线二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="申请人">
        <el-input type="textarea" v-model="ruleForm.desc1"></el-input>
      </el-form-item>
      <el-form-item label="申请部门">
        <el-input type="textarea" v-model="ruleForm.desc2"></el-input>
      </el-form-item>
      <el-form-item label="日PV">
        <el-input v-model="ruleForm.name1"></el-input>
      </el-form-item>
      <el-form-item label="QPS">
        <el-input v-model="ruleForm.name2"></el-input>
      </el-form-item>
      <el-form-item label="TPS">
        <el-input v-model="ruleForm.name3"></el-input>
      </el-form-item>
    </el-form>
    <div class="block">
      <el-date-picker v-model="ruleForm.value1" type="date" placeholder="选择日期"></el-date-picker>
      <span class="demonstration">3-7个工作日开通</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        value1: "",
        name1: "",
        name2: "",
        name3: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc1: "",
        desc2: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  destroyed() {
    //销毁的时候将数据存在本地
    localStorage.setItem("info",JSON.stringify(this.ruleForm))
  }
};
</script>