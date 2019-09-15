//书写tap左边数据

const state = {
  leftData: [],
  count: 1
}

//接受left的数据改变
const mutations = {
  change(state, payload) {
    state.count = payload;
    //console.log(payload,"id")
  },
  updateLeftData(state, payload) {
    state.leftData = payload;
  }
}

//异步请求操作
//引入网络请求模块
import {
  getLeft
} from "@/api/index.js";
const actions = {
  getleft(context, payload) {
    //为了获取完左边的时候默认获取右边第一条数据 我们需要给这个函数
    //整上一个promise对象 让其有返回值来让我们知道这个请求已经完成了
    return new Promise((resolve, reject) => {
      let {
        commit
      } = context;
      //console.log(commit)
      getLeft().then(res => {
        //提交局部的mutations
        commit("updateLeftData", res.leftData);
        //提交全局的mutations
        commit("right/updateRightData", res.rightData, {
          root: true
        })
        resolve()
        //console.log(res.leftData, "左边数据的网络请求")
      })
    })

  }
}

//抛出
export default {
  actions,
  namespaced: true,
  state,
  mutations
}
