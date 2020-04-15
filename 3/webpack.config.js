
const HtmlWebpackPlugin = require("html-webpack-plugin")
const fs=require("fs")
module.exports = {
    entry: './src/js/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.(scss|sass|css)$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },{ //js加载图片到页面中
                test:/\.(jpe?g|png|gif|svg)$/i,
                use:{
                    loader:"url-loader",
                    //url-loader处理不了自动转换file-loader处理
                    options:{
                        limit:10240, 
                        //当小于10kb的时候用代码加载出这个图片 
                        //默认8kb左右 设置大小的作用
                        name:"assets/[name].[hash:6].[ext]"
                    }
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    devServer: {
        open: true,
        hot: true,
        //host:"0.0.0.0",
        port: 8000,
        before(app){
            app.get("/api/nav",(req,res)=>{
                fs.readFile("./mock/nav.json",(err,data)=>{
                    data=JSON.parse(data.toString());
                    res.send(data)
                })
            });

            app.get("/api/img",(req,res)=>{
                let {id}=req.query;
                fs.readFile("./mock/data.json",(err,data)=>{
                    
                    data=JSON.parse(data.toString());
                    res.send(data.find(item=>item.id==id))
                })
            });

        }
    }
}