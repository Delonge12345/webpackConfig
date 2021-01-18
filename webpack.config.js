const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname,'src'),
    entry: {
        main:'./app.js',
        analytics: './analytics.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module:{
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'] //from right to left


            },
            {
                test:/\.(png|jpg||svg)|gif$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)/,
                use: ['file-loader']
            },
            {
                test: /\.xml$/,
                use:['xml-loader']
            }
        ]
    }
}


///////////////////////////////////////////// It was base of webpack 50:00
