//网络请求文件
import axios from "axios";

export function getList(){
    return axios.get("/api/list")
}