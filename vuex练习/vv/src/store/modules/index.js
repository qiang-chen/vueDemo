//index模块的数据
const state = {
  count: 100
}

//同步数据的改变
const mutations = {
  //state表示当前模块的状态 payload表示触发当前mutations携带的数据
  changeCount(state, payload,a) {
      console.log(payload,a)
    payload == "+" ? state.count++ : state.count--
  }
}


export default {
  state,
  mutations
}
