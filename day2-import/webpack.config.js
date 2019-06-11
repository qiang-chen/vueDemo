const HtmlWebPackPlugin=require("html-webpack-plugin");
module.exports={
    //加载模块 配置各种loader
    module:{
        rules:[
            {
                test:/\.(sass|scss|css)$/,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template:"./src/index.html",//设置初始模板
            filename:"index.html",//压缩后在dist下面的名字
            inject:true,//自动让其引入js
        })
    ],
    //配置服务
    devServer:{
        open:true,
        hot:true
    }
}