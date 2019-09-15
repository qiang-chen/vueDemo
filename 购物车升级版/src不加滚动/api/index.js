//配置各种网络请求

import axios from 'axios';

//获取菜单列表页的数据请求
export function getList(){
    return axios.get("/api/list")
}