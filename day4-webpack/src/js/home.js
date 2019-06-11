
//引入axios
import axios from "axios";

import BScroll from "better-scroll"
//引入一个图片 放在HTML中
import tap1 from "../assets/img/1.png";
img.src = tap1;


export class Home {
    constructor() {
        this.page=1;
        this.limit=10;
        this.bs=new BScroll(".box",{
            
        })
        this.listDom=document.querySelector(".list");
        this.init()
    }
    init() {
        this.tap();
        this.list()
    }
    tap() {
        const span = document.querySelectorAll(".nav span");
        span.forEach((item, index) => {
            item.onclick = () => {
                img.src=`../src/assets/img/${index+1}.png`
            }
        })
    }
    list(){
        //点击列表页面发送请求
        const btn=document.querySelector(".btn");
        btn.onclick=()=>{
            console.log(266)
            axios.post("/api/list",{
                page:this.page,
                limit:this.limit
            }).then(res=>{
                this.listRender(res.data)
            })
        }
    }
    listRender(data){
        console.log(data)
        this.listDom.innerHTML+=data.map(item=>{
            return `<div class="item">
            <div class="left">
                <img src="${item.img}" alt="">
            </div>
            <div class="right" style="background-color:${item.color}">
                <h2>${item.title}</h2>
                <p>${item.date}</p>
                <p>${item.id}</p>
            </div></div>`
        }).join("")
    }
}