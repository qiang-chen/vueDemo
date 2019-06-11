const HtmlWebpackPlugin = require("html-webpack-plugin");
//加载处理post请求的模块
const bodyParser = require("body-parser");

// 分离CSS
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 压缩css
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// 压缩js
const TerserJSPlugin = require('terser-webpack-plugin');

// 清空dist
const CleanWebpackPlugin = require('clean-webpack-plugin')

//vue
const VueLoaderPlugin=require("vue-loader/lib/plugin")

const path = require('path');
module.exports = {
  //起服务
  entry: "./src/js/main.js",
  // 出口配置
  output: {
    filename: 'assets/[name].[hash:6].js',  // 生成文件的名字
    path: path.join(__dirname, 'dist')  // 生成文件的路径
  },
  module: {
    rules: [{
      test: /\.(scss|sass|css)$/,
      // use: [
      //     "style-loader", 
      //     "css-loader", 
      //     "sass-loader" ]
      //假如将这个style.loader替换成MiniCssExtractPlugin.loader就会把css单独分离出来
      use: [
        MiniCssExtractPlugin.loader,
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
    // 打包前每次删除了dist下面的东西重新生成新的
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: true
    }),
    // 抽离css
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
      chunkFilename: 'assets/[id].css'
    })
  ],
  devServer: {
    open: true,
    hot: true,
    port: 8000,
    //拦截服务
    before(app) {
      app.get("/api/list", (req, res) => {
        const newData=require("./mock/banner.json")
        res.send(newData)
      })
    }
  },
  // 优化的配置
  optimization: {
    minimizer: [   //在这个数组中配置各种压缩使用
      // 压缩css
      new OptimizeCSSAssetsPlugin({}),//这里有个坑 本来js是自动压缩的但是我们配置了压缩css后js就会给我们自动展开
      //所以我们需要在配置一波压缩js的
      // 压缩js
      new TerserJSPlugin({}),
    ],
    // 包的分离，分离出非业务逻辑相关的包
    //就是将我们用到得第三方包和自己的包分离出来
    splitChunks: {
      cacheGroups: {
        vendor: {   // 抽离第三方插件
          test: /node_modules /,   // 指定是node_modules下的第三方包
          chunks: 'initial',
          name: 'vendor',  // 打包后的文件名，任意命名    
          // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
          priority: 10
        },
        utils: { // 抽离自己写的公共代码，utils这个名字可以随意起
          chunks: 'initial',
          name: 'utils',  // 任意命名
          minChunks: 2,   // 引用次数最少两次
          minSize: 0    // 只要超出0字节就生成一个新包
        }
      }
    }
  }, resolve: {
    // 配置别名
    alias: {
      '@': path.join(__dirname, 'src')
    }
  }
}