import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        all:[],
        dialogFormVisible:false
    },
    mutations:{
        change(state,arr){
            state.all = arr;
        },
        add(state,obj){
            state.all.push(obj);
        },
        changeDialog(state,bool){
            state.dialogFormVisible = bool;
        }   
    },
    getters:{
        meCreate(state){
            return state.all.filter(item => item.status === 'meCreate')
        },
        mePartake(state){
            return state.all.filter(item => item.status === 'mePartake')
        },
        filed(state){
            return state.all.filter(item => item.status === 'filed')
        }
    },
    actions:{
        getData({commit}){
            axios.get('/api/all').then(res => {
                if(res.data.code === 1){
                    commit('change',res.data.data);
                }
            })
        },
        cur({commit},obj){
            let params = {
                title:obj.title,
                url:'./static/logo.png',
                ipOpen:obj.checked,
                id:new Date().getTime(),
                status:'meCreate'
            }
            axios.post('/api/add',params).then(res => {
                if(res.data.code === 1){
                    commit('add',params);
                    commit('changeDialog',false);
                }
            })
        }
    }
})