// import axios from 'axios'

// //封装两个函数 分别是post请求和get请求的函数

// //get请求函数
// export function getData(str){
//     return axios.get(str).then(res=>{
//         return res.data
//     })
// }

// //get请求传params对象函数
// //这个函数作用是用于主页面home列表做上拉加载使用的
// //data是我们需要动态传的参数
// export function parmasGet(data){
//     return axios.get("/api/list",data)
// }



// //post请求函数
// export function postData(str,data){
//     return axios.post(str,data).then(res=>{
//         return res.data
//     })
// }




// 获取正在热映 
export function getHotList() {
  return fetch('/api/ajax/movieOnInfoList')
    .then(response => response.json())
}



// 获取最受期待
export function getExpectList(params) {
  return fetch(`/api/ajax/mostExpected?ci=1&limit=10&offset=${params.offset}&token`)
    .then(response => response.json())
}


// 获取城市列表
export function getCityList() {
  console.log("请求城市数据函数封装")
  return fetch('/api/dianying/cities.json')
    .then(response => response.json())
}
