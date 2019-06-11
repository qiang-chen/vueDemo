//仓库的主文件抛出

import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex)

//引入日志

import Logger from "vuex/dist/logger";


//将采集信息的模块抛出

import business from "./modules/main/business/index"



//抛出
export default new Vuex.Store({
    modules: {
        business
    },
   plugins:[Logger()]
})