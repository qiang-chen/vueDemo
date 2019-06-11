import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import Logger from 'vuex/dist/Logger';

//引入我的子模块 user 数据
import user from './main/index' ;

//抛出
//生成一个vuex实例
export default new Vuex.Store({
    modules:{
        user
    },
    plugins:[Logger()]
});
