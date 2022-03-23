var config = require('../config')
var webpack = require('webpack')
var { merge } = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

// add hot-reload related code to entry chunks
// webpack dev server hot mode 
// entry 
Object.keys(baseWebpackConfig.entry).forEach(function(name) {
    // 导入热重载组件
    baseWebpackConfig.entry[name] = [].concat("webpack-dev-server/client/index.js?hot=true&live-reload=true").concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.dev.cssSourceMap
        })
    },
    // webpack 5
    devtool: 'inline-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV' : JSON.stringify('production')
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        // new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
})