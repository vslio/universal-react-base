import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import ProgressPlugin from 'webpack/lib/ProgressPlugin'
import ProgressBar from 'progress'
import WebpackIsomorphicTools from 'webpack-isomorphic-tools'
import WebpackIsomorphicToolsPlugin from 'webpack-isomorphic-tools/plugin'
import WebpackProductionConfig from './webpack.config.production.js'
import WebpackIsomorphicToolsConfig from './webpack-isomorphic-tools'
import cssNext from 'postcss-cssnext'

const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(WebpackIsomorphicToolsConfig)

export default function(server) {
  const config = {
    context: path.join(__dirname, '/src/shared'),
    devtool: 'inline-source-map',
    entry: {
      vendors: [
        'webpack-hot-middleware/client',
        'react',
        'react-dom',
        'react-router',
        'redux',
        'react-redux',
        'axios',
        'babel-polyfill'
      ],
      app: [
        'webpack-hot-middleware/client',
        '../client'
      ]
    },
    output: {
      path: path.join(__dirname, '/dist'),
      filename: '[name].bundle.js',
      publicPath: '/dist/'
    },
    module: {
      loaders: [
        {
          test: /\.html$/,
          loader: 'file?name=[name].[ext]'
        },
        {
          test: /\.css$/,
          loaders: [
            'style-loader',
            'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
            'postcss-loader'
          ]
        },
        {
          test: /\.jsx?$/,
          loader: 'babel',
          query: {
            presets: ['react-hmre']
          },
          exclude: /node_modules/,
          include: path.join(__dirname, '/src')
        }
      ]
    },
    resolve: {
      modulesDirectories: ['node_modules', 'shared'],
      extensions: ['', '.js', '.jsx']
    },
    postcss: function() {
      return [cssNext]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('development')
        }
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors',
        filename: 'vendors.bundle.js'
      }),
      webpackIsomorphicToolsPlugin.development()
    ]
  }

  const webpackCompiler = webpack(config)
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
    publicPath: config.output.publicPath
  }))

  server.use(webpackHotMiddleware(webpackCompiler))
}
