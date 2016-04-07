import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import ProgressPlugin from 'webpack/lib/ProgressPlugin'
import ProgressBar from 'progress'
import webpackDevelopmentConfig from './webpack.config.development.js'

export default function(server) {
  const webpackCompiler = webpack(webpackDevelopmentConfig)
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
    publicPath: webpackDevelopmentConfig.output.publicPath
  }))

  server.use(webpackHotMiddleware(webpackCompiler))
}
