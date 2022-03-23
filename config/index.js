var path = require('path')

module.exports = {
    build: {
        env: {
            NODE_ENV: "'production'"
        },
        index: path.resolve(__dirname, '../elm/index.html'),
        assetsRoot: path.resolve(__dirname, '../elm'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '', // 打完包之后的访问路由起点
        productionSourceMap: true,
        productionGzip: false,
        productionGzipExtensions: ['js', 'css']
    },
    dev: {
        env: {
            NODE_ENV: "'development'"
        },
        port: 8000,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        cssSourceMap: false,
        proxypath: '',
        context: [
            // 
        ]
    }
}