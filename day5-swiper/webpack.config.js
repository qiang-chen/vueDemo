
const HtmlWebpackPlugin

module.export = {
    entry: "./src/indec.html",

    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/indec.html"
        })
    ],

    devServer: {
        port: 8000,
        open: true,
        hot: true
    }
}