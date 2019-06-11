import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { read } from 'fs';
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        list: []
    },
    mutations: {
        getTodo(state, data) {
            state.list = data
        },
        add(state, data) {
            state.list.push(data)
        },
        remove(state, id) {
            let index = state.list.findIndex(item => item.id == id)
            state.list.splice(index, 1)
        },
        edit(state, id) {
            let index = state.list.findIndex(item => item.id == id)
            state.list[index].flag = !state.list[index].flag
        },
        checkAll(state, flag) {
            state.list.forEach(item => item.flag = flag)
        }
    },
    actions: {
        //异步
        getData({ commit }) { //获取数据
            axios.get('/api/getData').then(res => {
                if (res.data.code == 1) {
                    commit('getTodo', res.data.data)
                }
            })
        },
        add({ commit }, val) {
            let id = new Date().getTime()
            axios.post('/api/add', { val, id, flag: false }).then(res => {
                if (res.data.code == 1) {
                    commit('add', { val, id, flag: false })
                }
            })
        },
        remove({ commit }, id) {
            axios.get('/api/remove?id=' + id).then(res => {
                if (res.data.code == 1) {
                    commit('remove', id)
                }
            })
        },
        edit({ commit }, id) {
            axios.get(`/api/edit?id=${id}`).then(res => {
                if (res.data.code === 1) {
                    commit('edit', id)
                }
            })
        },
        checkAll({ commit }, checked) {
            axios.get('/api/check?flag=' + checked).then(res => {
                if (res.data.code === 1) {
                    commit('checkAll', checked)
                }
            })
        }
    }
})