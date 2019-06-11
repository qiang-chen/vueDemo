const HtmlWebpackPlugin = require("html-webpack-plugin");
//vue
const VueLoaderPlugin=require("vue-loader/lib/plugin");
const path = require('path');
// 分离CSS
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports={
     //起服务
  entry: "./src/js/index.js",
  // 出口配置
  output: {
    filename: 'assets/[name].[hash:6].js',  // 生成文件的名字
    path: path.join(__dirname, 'dist')  // 生成文件的路径
  },
  module: {
    rules: [{
      test: /\.(scss|sass|css)$/,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader"]
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 88888,
            name: "assets/[name].[hash:6].[ext]"
          }
        }
      ]
    }, {
      test: /\.(eot|ttf|svg|woff2?)$/,
      use: ["url-loader"]
    }, {
      test: /\.vue$/,
      use: 'vue-loader'
    }]
  },
    plugins: [
        //处理单个Vue
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          filename: "index.html",
          inject: true
        }),
        
      ],
      devServer:{
        open:true,
        hot:true,
        port:8000
    },
    resolve: {
        // 配置别名
        alias: {
          '@': path.join(__dirname, 'src')
        }
      }
}