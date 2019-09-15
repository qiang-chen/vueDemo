
//仓库处理js

import Vue from 'vue';//引入vue

//引入vuex 
import Vuex from 'vuex';
import Logger from 'vuex/dist/logger'
//挂载vuex

Vue.use(Vuex);

//引入左边子模块

import left from './modules/home/left/index';

//console.log(left,"左边数据")

//引入右边数据抛出

import right from './modules/home/right/index';

//创造Vuex的实例
export default new Vuex.Store({
    modules:{
        left,
        right,
    },
    plugins:[Logger()]
})