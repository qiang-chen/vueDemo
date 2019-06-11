//仓库总文件

import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

//引入日志

import Logger from "vuex/dist/logger";

//引入商品列表数据库

import list from "./modules/list/"

//引入购物车列表

import shop from "./modules/shop/index"


//抛出
export default new Vuex.Store({
    modules: {
        list,
        shop
    },
    plugins:[Logger()]
})