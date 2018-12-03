'use strict'
const path = require('path')
const config = require('../config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const packageConfig = require('../package.json')

/**
 * 根据传入路径，内部再根据执行环境，判断调用config模块包中静态定义好的输出路径，然后再调用path.posix（跨平台通用路径拼接方法）
 * 最终导出符合执行环境（development/production）的资源路径
 * @param _path
 * @returns {string}
 */
exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

/**
 * 生成css的loader配置对象(对象格式,键值对,需要二次处理成符合webpack格式)
 * @param options
 * @returns {{css: *, postcss: *, less: *, sass: *, scss: *, stylus: *, styl: *}}
 */
exports.cssLoaders = function (options) {
  options = options || {}

  // css-loader配置
  const cssLoader = {
    // 根据options.extract配置返回特定的cssLoader
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // postcss-loader配置
  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // MiniCssExtractPlugin.loader配置
  const MiniCssExtractPluginLoader = {
    loader: MiniCssExtractPlugin.loader,
    options: {
      /*
      * 复写 css 文件中资源路径
      * webpack3.x 配置在 extract-text-webpack-plugin 插件中
      * 因为 css 文件中的外链是相对与 css 的，
      * 我们抽离的 css 文件在可能会单独放在 css 文件夹内
      * 引用其他如 img/a.png 会寻址错误
      * 这种情况下所以单独需要配置 publicPath，复写其中资源的路径
      */
      publicPath: '../../'
    }
  }

  /**
   * 生成与mini-css-extract-plugin一起使用的loader字符串
   */
  function generateLoaders (loader, loaderOptions) {

    // 生成loaders数组（根据options.usePostCSS配置项判断是否加入postcssLoader）
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

    // 如果传入了新loader，就添加在原loaders数组最后，如less、scss等处理
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // options配置中如果定义了extract（非false值即可）,那么就调用mini-css-extract-plugin
    // (生产环境下就是这种配置)
    options.extract ? loaders.unshift(MiniCssExtractPluginLoader) : null

    // 导出最终loaders数组
    return ['vue-style-loader'].concat(loaders)

    // options配置中如果定义了extract（非false值即可）,那么就调用mini-css-extract-plugin
    // (生产环境下就是这种配置)
    /*if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }*/
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less',{javascriptEnabled: true}),
    sass: generateLoaders('sass', {indentedSyntax: true}),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

/**
 * 生成符合webpack格式需求的loader通用配置
 * 包括了css/postcss/less/sass/scss/stylus/styl等后缀格式文件处理的loader
 * 根据项目需求，如未安装相应依赖loader，需要自行安装，否则会报错
 * @param options
 * @returns {Array}
 */
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

/**
 *
 * @returns {Function}
 */
exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}
