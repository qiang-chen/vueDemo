//仓库主页面列表数据

//引入网络请求
import {getList} from "@/api/index"

const state={
    product:[]
}

//同步方法
const mutations={
    updataProduct(state,payload){
        state.product=payload.map(item=>{
            item.num=0;
            return item;
        })
    }
}




//异步网络请求

const actions={
    getList({commit}){
        return new Promise((resolve,reject)=>{
            getList().then(res=>{
                //console.log(res.data)
                //借助commit调用同步方法将请求到数据赋值给state里面的product
                commit("updataProduct",res.data)
                resolve()
            })
        })
    }
}



//抛出
export default {
    namespaced: true,
    actions,
    mutations,
    state,
}