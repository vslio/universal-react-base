'use strict'

require('babel-core/register')({})
require('babel-polyfill')

var path = require('path')
var isDevelopment = (process.env.NODE_ENV !== 'production')

var WebpackIsomorphicTools = require('webpack-isomorphic-tools')
var webpackIsomorphicToolsConfig = require('./webpack-isomorphic-tools.config')

var projectRoot = path.join(__dirname, '/src/shared')

global.webpackIsomorphicTools = new WebpackIsomorphicTools(webpackIsomorphicToolsConfig)
  .development(isDevelopment)
  .server(projectRoot, function () {
    var server = require('./server').default
    var PORT = process.env.PORT || 3000

    server.listen(PORT, function () {
      console.log('\n[ Server listening on: ' + PORT + ' ]')
    })
  })
