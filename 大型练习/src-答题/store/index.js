import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        quesition:[],  //所有题目的数据
        curIndex:0,     //当前是第几题
        active:null     //当前选择的index
    },
    mutations:{
        changeQuesition(state,arr){
            state.quesition = arr;
        },
        chooseAnswer(state,{item,id}){
            state.quesition[state.curIndex].flag = item.is_stand_answer === 1 ? true : false;
            state.active = id;
        },
        changeCurIndex(state){
            if(state.curIndex < state.quesition.length-1){
                state.active = null;
                state.curIndex ++;
            }
        }
    },
    getters:{
        rightNum(state){
            return state.quesition.filter(item => item.flag).length
        }
    },
    actions:{
        getData({commit,state}){
            axios.get('/api/list').then(res => {
                if(res.data.code === 1){
                    commit('changeQuesition',res.data.data);
                }
            })
        },
        nextQuestion({commit}){
            setTimeout(() => {
                commit('changeCurIndex')
            },2000)
        }
    }
})