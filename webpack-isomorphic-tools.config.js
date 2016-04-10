var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')
var isDevelopment = (process.env.NODE_ENV !== 'production')

var webpackIsomorphicToolsConfig = {
  debug: false,
  webpack_assets_file_path: '../../webpack-assets.json',
  webpack_stats_file_path: '../../webpack-stats.json',
  assets: {
    images: {
      extensions: [
        'jpeg',
        'jpg',
        'png',
        'gif'
      ],
      parser: WebpackIsomorphicToolsPlugin.url_loader_parser
    },
    style_modules: {
      extensions: ['css'],
      filter: function (module, regex, options, log) {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.style_loader_filter(module, regex, options, log)
        } else {
          return regex.test(module.name)
        }
      },
      path: function (module, options, log) {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.style_loader_path_extractor(module, options, log)
        } else {
          return module.name
        }
      },
      parser: function (module, options, log) {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.css_modules_loader_parser(module, options, log)
        } else {
          return module.source
        }
      }
    }
  }
}

if (isDevelopment) {
  webpackIsomorphicToolsConfig.debug = true
}

module.exports = webpackIsomorphicToolsConfig
