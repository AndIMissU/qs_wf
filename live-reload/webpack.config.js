const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname + '/src/main.js'),
    output: {
        path: path.resolve(__dirname + '/dist/js'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test:/\.vue$/,
                loader:'vue-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js','.vue'],
        alias: {
            'vue$':'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        inline: true , //实时刷新
        hot: true
    },
    plugins: [
        new htmlWebpackPlugin({
            template: __dirname + '/index.tmpl.html'
        }),
        new webpack.HotModuleReplacementPlugin({

        })
    ]
}