'use strict'

require('babel-core/register')({})

var path = require('path')
var isDevelopment = process.env.NODE_ENV !== 'production'

if (isDevelopment) {
  var fs = require('fs')

  fs.closeSync(fs.openSync(path.join(__dirname, 'webpack-assets.json'), 'w'))
}

var WebpackIsomorphicTools = require('webpack-isomorphic-tools')
var webpackIsomorphicToolsConfig = require('./webpack-isomorphic-tools')
var projectRoot = path.join(__dirname, '/src/shared')

global.webpackIsomorphicTools = new WebpackIsomorphicTools(webpackIsomorphicToolsConfig)
  .development(isDevelopment)
  .server(projectRoot, function() {
    var server = require('./server').default
    var PORT = process.env.PORT || 3000

    server.listen(PORT, function() {
      console.log('Server listening on: ' + PORT)
    })
  })
