//右边数据存放地

const state = {
  rightData: [],
  cur: [], //符合条件的渲染结果
  buyList: [] //购买列表用来显示购买商品的
}

//接受left的数据改变
const mutations = {
    buyDefault(state,payload){
        //默认修改buyList的初始值的
        //console.log(payload,"初始值")
        state.buyList=[...payload];
      console.log(state.buyList,"默认进来的购买列表")
    },
  rightchange(state, payload) {
    state.cur = state.rightData.filter(item => item.type == payload);
    //console.log(payload,"右边修改了吗")
  },
  updateRightData(state, payload) {
    state.rightData = payload.map(item => {
      item.num = 0;
      //循化列表用来改变初始的num
      //console.log(state.buyList,"num赋值的时候")
      state.buyList.forEach(el=>{
        if(el.id==item.id){
          //console.log(el.num,"刷新后")
            item.num=el.num
        }
    })
      return item;
    })
  },
  sumChange(state, payload) {
    //console.log(state,payload,"数据库")
    let {
      newNum,
      id
    } = payload;
    //let list=[...state.cur];
    //console.log(list,"深拷贝")
    if(newNum<=0){
      newNum=0
    }
    let index = state.cur.findIndex(item => item.id == id);
    state.cur[index].num = newNum;
    //console.log(list,"深拷贝结束后的值")
    //state.cur=list
    //console.log(index,"-------")

    //购买列表的处理
    let i=state.buyList.findIndex(item=>item.id==id);
    //console.log(i)
    if(i==-1){
        //证明购买列表没有这个数据
        state.buyList.push(state.cur[index])
    }else{
        //console.log(state.buyList[i],"++++===")
        state.buyList[i].num=newNum 
    }
    localStorage.setItem('buylist',JSON.stringify(state.buyList))
    //console.log(state.buyList, "购买列表-------------")
  }
}


//抛出右边数据

export default {
  namespaced: true,
  state,
  mutations
}
