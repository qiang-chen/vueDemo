// 处理html
const HtmlWebPackPlugin = require('html-webpack-plugin')
// 清空dist
const CleanWebpackPlugin = require('clean-webpack-plugin')
// 分离CSS
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 压缩js
const TerserJSPlugin = require('terser-webpack-plugin');
// 压缩css
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// 处理文件的绝对路径
const path = require('path');
// body-parser中间件，处理post请求传参
const bodyParser = require('body-parser');


module.exports = {
    // 入口文件
    entry: './src/index.js',
    // entry: {
    //     index2: './src/index2.js',
    // },


    // 出口配置
    output: {
        filename: 'assets/[name].[hash:6].js',  // 生成文件的名字
        path: path.join(__dirname, 'dist')  // 生成文件的路径
    },


    // 加载模块，配置各种loader
    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                      // 1024 = 1kb
                      limit: 10240,
                      name: 'assets/[name].[hash:6].[ext]',
                    }
                }
            },
            {
                test: /\.(eot|ttf|svg|woff2?)$/,
                use: ['url-loader']
            }
        ]
    },
    // 插件
    plugins: [
        // 打包前清空
        new CleanWebpackPlugin(),
        // 自动注入
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: true
        }),
        // 抽离css
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css',
            chunkFilename: 'assets/[id].css'
        })
    ],
    // 服务配置
    devServer: {
        // open: true, // 自动打开浏览器
        port: 10001,    // 指定端口号
        host: '0.0.0.0',
        hot: true,   // 热更新
        before(app){    // 请求拦截
            app.post('/loaderst', bodyParser.json(), (req, res, next)=>{
                console.log('req...', req);
                console.log('查询参数...', req.query);
                console.log('body体...', req.body)
                res.json({
                    code: 1,
                    msg: '请求成功',
                    data: ['node-sass', 'sass-loader', 'css-loader', 'file-loader', 'url-loader', 'style-loader']
                })
            })
        }
    },
    resolve: {
        // 配置别名
        alias: {
            '@': path.join(__dirname, 'src')
        }
    },
    // 优化的配置
    optimization: {
        minimizer: [
            // 压缩js
            new TerserJSPlugin({}),
            // 压缩css
            new OptimizeCSSAssetsPlugin({})
        ],
       
    }
}
