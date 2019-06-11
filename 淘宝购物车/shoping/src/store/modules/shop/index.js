//购物车页面的数据
const state={
    buyList:[]
}

//同步方法

const mutations={
    //声明一个方法在点击添加购物车的时候能够把点击的这个数据方法buyList这个数组中去
    updatebuyList(state,payload){
        //payload得到是添加购物车的那一项 结构出id来
        //判断buyList中是否含有这一项 有则让数量加1
        //没有让其添加
        let {id}=payload;
        let index=state.buyList.findIndex(item=>item.id==id);
        if(index==-1){
            //没有
            payload.num=1;
            state.buyList.push(payload)
        }else{
            //console.log( state.buyList[index].num)
            state.buyList[index].num++;
        }
        //console.log(state.buyList)
    },
    change(state,payload){
        //console.log(payload)
        let {type,id}=payload;
        let index=state.buyList.findIndex(item=>item.id==id);
        //console.log(type)
        if(type=="+"){
            state.buyList[index].num++;
            console.log(state.buyList[index])
        }else{
            state.buyList[index].num--;
            if(state.buyList[index].num<=0){
                state.buyList[index].num=0;
            }
        }
    }
}


export default {
    namespaced: true,
    state,
    mutations
}