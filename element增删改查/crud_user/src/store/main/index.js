//用户数据管理仓库

//引进网络请求
import {getList,addList,removeList,editList} from "@/api/index"


const state = {
  userList: [], //用来储存默认列表渲染页面
}

const mutations = {
  updataUserList(state,payload) {
    state.userList=[...payload]
  }
}

//异步请求
const actions = {
  //请求列表数据
  getList({
    commit
  }, payload) {
    return new Promise((resolve, reject) => {
      getList().then(res => {
        //console.log(res, "后台返回数据")
        commit("updataUserList", res)
        resolve()
      })
    })
  },
  addList({commit},payload){
      //console.log("触发氢气球")
      return new Promise((resolve,reject)=>{
        addList(payload).then(res=>{
            //console.log(res,"添加是否成功")
            resolve(res)
        })
      })
  },
  removeList({commit},payload){
      return new Promise((resolve,reject)=>{
        //console.log(payload,"这里有数据吗")
        removeList(payload).then(res=>{
          if(res.code==1){
            //删除成功后触发列表更新数据
            commit("updataUserList",res.data)
          }
            resolve(res)
        })
      })
  },
  editList({commit,dispatch},payload){
    return new Promise((resolve,reject)=>{
      //发送异步请求
      editList(payload).then(res=>{
        console.log(res,"编辑成功，后台返回提示")
        if(res.code==1){
          //如果编辑成功后重新向后台发送请求列表请求来更新列表
          dispatch("getList")
        }
      })
    })
  }
}


export default {
  namespaced: true,
  state,
  actions,
  mutations
}
