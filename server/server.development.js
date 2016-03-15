/**
 * Module requires
 */
import path from 'path'
import express from 'express'
import jsonServer from 'json-server'

import webpack from 'webpack'
import webpackConfig from '../config/webpack/webpack.config.development'
import ProgressPlugin from 'webpack/lib/ProgressPlugin'
import ProgressBar from 'progress'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'

const server = express()
const port = 3000

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
  res.sendFile(path.join(__dirname, '../shared/index.html'))
})

server.listen(port, 'localhost', (err) => {
  if (err) {
    console.log(err)

    return
  }
})
