//网络请求函数

export function getList() {
  return fetch("/api/list").then(res => res.json())
}

//发送增加请求

export function addList(content) {
  return fetch("/api/add", {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(content)
  }).then(res => res.json())
}


//发送删除请求
export function removeList(content) {
    return fetch("/api/delete", {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({content})
    }).then(res => res.json())
  }


//发送编辑请求

export function editList(payload){
  return fetch("/api/edit",{
    method:'PUT',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({payload})
  }).then(res=>res.json())
}