var path = require('path')
var config = require('../config')

exports.assetsPath = function(_path) {
    var assetsSubDirectory = process.env.NODE_ENV === 'production' ? config.build.assetsSubDirectory : config.dev.assetsSubDirectory
    return path.posix.join(assetsSubDirectory, _path)
}

// webpack5 之后改为 use: ['a-loader', 'b-loader']
exports.cssLoaders = function(options) {
    // console.log(options)
    options = options || {}
        // generate loader string to be used with extract text plugin
    function generateLoaders(loaders) {
        // 对输入参数进行处理
        var sourceLoader = loaders.map(function(loader) {
            var extraParamChar
            if (/\?/.test(loader)) {
                loader = loader.replace(/\?/, '-loader?')
                extraParamChar = '&'
            } else {
                loader = loader + '-loader'
                extraParamChar = '?'
            }
            return loader
            // return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '')
        })
        // console.log(sourceLoader)
        // console.log(ExtractTextPlugin.extract('vue-style-loader', sourceLoader))
        // (which is the case during production build)
        var devLoaders = ['vue-style-loader']
        devLoaders.push.apply(devLoaders, sourceLoader)
        return devLoaders
    }

    // http://vuejs.github.io/vue-loader/en/configurations/extract-css.html
    return {
        css: generateLoaders(['css']),
        postcss: generateLoaders(['css']),
        less: generateLoaders(['css', 'less']),
        sass: generateLoaders(['css', 'sass?indentedSyntax']),
        scss: generateLoaders(['css', 'sass']),
        stylus: generateLoaders(['css', 'stylus']),
        styl: generateLoaders(['css', 'stylus'])
    }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function(options) {
    var output = []
    var loaders = exports.cssLoaders(options)
    for (var extension in loaders) {
        var loader = loaders[extension]
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            use: loader
        })
    }
    return output
}