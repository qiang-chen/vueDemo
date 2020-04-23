import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        products:[],
        buyList:[]
    },
    mutations:{
        changeProduct(state,arr){
            state.products = arr;
        },
        addProduct(state,obj){
            let bIndex = state.buyList.findIndex(item => item.id === obj.id);
            if(bIndex != -1){
                //已经添加
                state.buyList[bIndex].num++;
            }else{
                //没有添加
                obj.num = 1;
                obj.status = false;
                state.buyList.push(obj);
            }
            console.log(state.buyList);
            state.buyList = state.buyList.concat([])
        },
        choose(state,id){
            let bIndex = state.buyList.findIndex(item => item.id === id);
            state.buyList[bIndex].status = !state.buyList[bIndex].status;
            console.log(state.buyList);
            state.buyList = state.buyList.concat([])
        },
        addNum(state,{id,str}){
            let bIndex = state.buyList.findIndex(item => item.id === id);
            
            if(str === '+'){
                state.buyList[bIndex].num ++;
            }else{
                if(state.buyList[bIndex].num > 1){
                    state.buyList[bIndex].num--;
                }else{
                    state.buyList.splice(bIndex,1);
                }
            }
            state.buyList = state.buyList.concat([])
        },
        checkAll(state,allStatus){
            state.buyList.forEach(item => {
                item.status = allStatus
            })
            console.log(state.buyList);
            state.buyList = state.buyList.concat([])
        }
    },
    getters:{
        addCount(state){
            return state.buyList.reduce((pre,cur) => {
                return pre + cur.num
            },0)
        },
        totalMoney(state){
            return state.buyList.reduce((pre,cur) => {
                let money = cur.status ?  cur.price * cur.num  : 0;
                return pre + money
            },0)
        }
    },
    actions:{
        getData({commit}){
            axios.get('/api/product').then(res => {
                console.log(res);
                if(res.data.code === 1){
                    commit('changeProduct',res.data.data);
                }
            })
        }
    }
})