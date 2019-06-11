//封装第三方的方法用来处理文件
const fs=require("fs");
const path=require("path")


module.exports={
    //读取文件函数
    fileRead(){
        return new Promise((resolve,reject)=>{
            fs.readFile(path.join(__dirname,"../mock/data.json"),(err,data)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(data)
                }
            })
        })
    },
    //写入文件函数
    fileWrite(params){
        return new Promise((resolve,reject)=>{
            fs.writeFile(path.join(__dirname,"../mock/data.json"),params,(err)=>{
                if(err){
                    reject(err)
                }else{
                    resolve()
                }
            })
        })
    }
}