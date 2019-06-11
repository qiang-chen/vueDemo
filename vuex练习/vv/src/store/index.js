import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);

//引入中间件 记录操作日志的作用
import Logger from 'vuex/dist/logger'

//引入子模块

import index from './modules/index'


//生成一个vuex实例

export default new Vuex.Store({
    modules:{
        index
    },
    plugins:[Logger()]
});