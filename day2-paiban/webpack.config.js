const HtmlWebPackPlugin=require("html-webpack-plugin");
module.exports={
    entry:"./src/js/index.js",
    module:{
        rules:[
            {
                test:/\.(sass|scss|css)$/,
                use:['style-loader','css-loader','sass-loader']
            },{
                test:/\.(jpe?g|png|gif|svg)$/i,
                use:{
                    loader:"url-loader",
                    options:{
                        limit:10240,
                        name:"assets/[name].[hash:6].[ext]"
                    }
                }
            },{
                test:/\.(eot|ttf|svg|woff2?)$/,
                use:["url-loader"]
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template:"./src/index.html",
            filename:"index.html",
            inject:true
        })
    ],
    devServer:{
        open:true,
        hot:true
    }
}