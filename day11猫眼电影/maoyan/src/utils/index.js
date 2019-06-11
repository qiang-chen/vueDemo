import Cookie from 'js-cookie';

export default{
    getCook(){
        //获取本地存储的cookie值
        return Cookie.get("token")
    },
    setCook(value){
        //设置本地存储内容
        return Cookie.set("token",value)
    }
}