// https://github.com/shelljs/shelljs
require('shelljs/global')
env.NODE_ENV = 'production'

var path = require('path') // 路径解析
var config = require('../config') // 配置文件
var ora = require('ora') // 控制台操作
var webpack = require('webpack') // 
var webpackConfig = require('./webpack.prod.conf') // 生产环境配置

var spinner = ora('building for production...')
spinner.start()

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)

rm('-rf', assetsPath)
mkdir('-p', assetsPath)
// cp('-R', 'static/*', assetsPath) // cp: no such file or directory: static/*

// const compiler = webpack(webpackConfig)

webpack(webpackConfig, function(err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n')
})