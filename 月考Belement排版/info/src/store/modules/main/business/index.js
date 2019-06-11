//采集信息的主页面使用的变量

const state = {
  value1: "",
  ruleForm: {
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
  }
}


//将其抛出
export default {
    namespaced: true,
    state
}