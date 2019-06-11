import aa,{format} from "./util";

import "./css/index.scss"

//创建一个标签
let p=document.createElement("p");
document.body.appendChild(p);
setInterval(()=>{
    p.innerText=aa(+new Date())
},1000);

//创建一个input框 里面输入数字在下面用千分符的形式显示出来
let input=document.createElement("input");
document.body.appendChild(input);
let b=document.createElement("h6");
document.body.appendChild(b);

input.addEventListener("input",function(){
    b.innerText=format(input.value)
})