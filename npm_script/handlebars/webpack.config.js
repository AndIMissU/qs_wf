const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        path: path.resolve(__dirname, './dist/js'),
        filename: "bundle.js"
    },
    devtool: 'source-map',
    watch: true,
    watchOptions: {
        ignored: /node_modules|dist|build|docs|css/,
        poll:1000
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test:/\.hbs/,
                loader: 'handlebars-loader'
            }
        ]
    }
}