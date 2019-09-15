
export function getLeft(){
    return fetch("/api/left").then(res=>res.json())
}