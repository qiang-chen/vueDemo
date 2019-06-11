//封装第三方函数

const fs=require("fs");
const path=require("path");

module.exports={
    readFile(){
        return new Promise((resolve,reject)=>{
            //读文件
            fs.readFile(path.join(__dirname,"../mock/data.json"),"utf8",(err,content)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(JSON.parse(content))
                }
            })
        })
    },
    writeFile(content){
        return new Promise((resolve,reject)=>{
            fs.writeFile(path.join(__dirname,"../mock/data.json"),content,(err)=>{
                if(err){
                    reject()
                }else{
                    resolve()
                }
            })
        })
    }
}