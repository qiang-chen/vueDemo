import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        business:JSON.parse(localStorage.getItem('business')) || {
            line: '',
            person: '',
            unit:'',
            pv:'',
            rqs:'',
            tps:'',
            time:''
        },
        active:1,
        serverData:JSON.parse(localStorage.getItem('serverData')) || {
            system:'6.8',
            cpu:'2',
            memory:'2',
            disk:'20',
            software:[]
        }
    },
    mutations:{
        changeForm(state,obj){
            state.business = obj;
            localStorage.setItem('business',JSON.stringify(state.business));
        },
        next(state,num){
            if(num){
                state.active = num;
            }else{
                state.active++;
            }
            
        },
        changeServer(state,obj){
            state.serverData = obj;
            localStorage.setItem('serverData',JSON.stringify(state.serverData));
        }
    }
})