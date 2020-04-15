import axios from "axios";
export class Tap{
    constructor(){
        this.nav=document.querySelector(".nav");
        this.content=document.querySelector(".content")
        this.id=1;
        this.init()
    }
    init(){
        this.getData();
        this.getImgData();
        this.tap()
    }
    getData(){
        axios.get("/api/nav").then(res=>{
            console.log(res)
            this.navrender(res.data)
        })
    }
    getImgData(){
        axios.get("/api/img?id="+this.id).then(res=>{
            console.log(res.data.content,"------")
            this.imgRender(res.data.content)
        })
    }
    navrender(data){
        this.nav.innerHTML=data.map((item,index)=>` <span dataId="${item.id}" class=${index==0?"active":""}>${item.title}</span>`).join("")
    }
    imgRender(data){
        this.content.innerHTML=data.map(item=>`<dl>
        <dd><img src="${item.img}" alt=""></dd><dt>${item.title}</dt></dl>`)
    }
    tap(){
        this.nav.onclick=(e)=>{
            let target=e.target;
            for(let i=0;i<this.nav.children.length;i++){
                this.nav.children[i].classList.remove("active")
            }
            target.classList.add("active")
            this.id=target.getAttribute("dataId");
            this.getImgData()
        }
    }
}
