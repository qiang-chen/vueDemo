'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder');
const bodyParser = require("body-parser")
//引入处理文件函数
let {
  fileRead,
  fileWrite
} = require("../util/index")


const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.dev.cssSourceMap,
      usePostCSS: true
    })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [{
        from: /.*/,
        to: path.posix.join(config.dev.assetsPublicPath, 'index.html')
      }, ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay ? {
      warnings: false,
      errors: true
    } : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },
    before(app) {
      //读取文件列表
      app.get("/api/list", (req, res) => {
        fileRead().then(data => {
          //console.log(res.toString());
          res.send(data.toString())
        })
      });
      app.post("/api/add", bodyParser.json(), (req, res) => {
        fileRead().then(data => {
          data = JSON.parse(data.toString());
          //console.log(req.body)
          req.body.id = data[data.length - 1].id * 1 + 1;
          //console.log(data[data.length-1])
          //console.log(req.body.id)
          data.push(req.body);
          //console.log(data,"a")
          fileWrite(JSON.stringify(data)).then(r => {
            res.send({
              code: 1
            })
          })
        })
      });

      app.delete("/api/delete", bodyParser.json(), (req, res) => {
        //console.log("进来了吗")
        //console.log(req.body, "删除使用")
        let {
          content
        } = req.body;
        fileRead().then(data => {
          data = JSON.parse(data.toString());
          //console.log(req.body)
          let index = data.findIndex(item => item.id == content);
          data.splice(index, 1)
          //console.log(data,"删除成功了吗")
          fileWrite(JSON.stringify(data)).then(r => {
            res.send({
              code: 1,
              data
            })
          })
        })
      });

      app.put("/api/edit", bodyParser.json(), (req, res) => {
        let {
          id
        } = req.body.payload;
        fileRead().then(data => {
          data = JSON.parse(data.toString());
          //console.log(req.body)
          let index = data.findIndex(item => item.id == id);

          //console.log(req.body.payload,"payload传参")
          data[index] = {
            ...data[index],
            ...req.body.payload
          }
          //console.log(data[index],"编辑成功了吗")
          //console.log(data)
          fileWrite(JSON.stringify(data)).then(r => {
            res.send({
              code: 1,
            })
          })
        })
      })

    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../static'),
      to: config.dev.assetsSubDirectory,
      ignore: ['.*']
    }])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors ?
          utils.createNotifierCallback() : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
