
const Mock=require("mockjs")
module.exports= function data(){
    return Mock.mock({
        "list|100": [
            {
                'id|+1': 1,//id排列
    
                'color': '@color()',//随机颜色
    
                'date': '@datetime()',//随机时间
    
                'img': '@image()',//随机图片
    
                'url': '@url(http)',//随机url地址
    
                'email': '@email()',//随机email
    
                'name': "@name(1,2)",//随机英文名字
    
                'text': '@paragraph()',//随机英文句子
                'title':'@ctitle',//穗子中文题目
                'city':'@county(true)',//随机城市名字
                'price': '@integer(100,2000)'//随机价格
            }
        ]
    })
}