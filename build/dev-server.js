var config = require('../config')
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
var path = require('path')
// webpack server
var webpack = require('webpack')
var webpackDevServer = require('webpack-dev-server')

var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
    // Define HTTP proxies to your custom API backend
    // https://github.com/chimurai/http-proxy-middleware

var compiler = webpack(webpackConfig)

// `hot` and `client` options are disabled because we added them manually
const server = new webpackDevServer({ hot: true, client: false }, compiler);

(async () => {
  await server.start();
  console.log('dev server is running');
})();
