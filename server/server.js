/**
 * Module requires
 */
import path from 'path'
import express from 'express'
import jsonServer from 'json-server'

import webpack from 'webpack'
import webpackDevConfig from '../config/webpack/webpack.config.development'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import ProgressPlugin from 'webpack/lib/ProgressPlugin'
import ProgressBar from 'progress'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'

const server = express()
const port = 3000
const isDevelopment = process.env.NODE_ENV !== 'production'

if (isDevelopment) {
  /**
   * Progressbar setup and initialisation
   */
  const webpackCompiler = webpack(webpackDevConfig)
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
   * Adding middleware
   */
  server.use(webpackDevMiddleware(webpackCompiler, {
    noInfo: true,
    publicPath: webpackDevConfig.output.publicPath
  }))

  server.use(webpackHotMiddleware(webpackCompiler))

  server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../shared/index.html'))
  })
}

server.listen(port, 'localhost', (err) => {
  if (err) {
    console.log(err)

    return
  }
})
