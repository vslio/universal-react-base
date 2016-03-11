/**
 * Module requires
 */
const path = require('path')
const express = require('express')
const jsonServer = require('json-server')
const webpack = require('webpack')
const webpackConfig = require('../config/webpack/webpack.config.development')
const ProgressPlugin = require('webpack/lib/ProgressPlugin')
const ProgressBar = require('progress')

/**
 * Server constants declaration
 */
const server = express()

/**
 * Progressbar setup and initialisation
 */
const webpackCompiler = webpack(webpackConfig)
const bar = new ProgressBar(':bar [:percent] :message', {
  total: 50
})

webpackCompiler.apply(
  new ProgressPlugin((percentage, msg) => {
    bar.update(percentage, {
      message: msg
    })
  })
)

/**
 * Server setup and initialisation
 */
server.use(require('webpack-dev-middleware')(webpackCompiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}))

server.use(require('webpack-hot-middleware')(webpackCompiler))

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'))
})

server.listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err)
    return
  }
})
