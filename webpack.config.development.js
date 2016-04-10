var webpack = require('webpack')
var path = require('path')

var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')
var WebpackIsomorphicToolsConfig = require('./webpack-isomorphic-tools.config')
var webpackIsomorphicToolsPluginInstance = new WebpackIsomorphicToolsPlugin(WebpackIsomorphicToolsConfig)

var postcssImport = require('postcss-import')
var postcssNext = require('postcss-cssnext')

module.exports = {
  context: path.join(__dirname, '/src/shared'),
  devtool: 'cheap-module-eval-source-map',
  entry: {
    vendors: [
      'webpack-hot-middleware/client',
      'axios',
      'babel-polyfill',
      'react',
      'react-dom',
      'react-helmet',
      'react-redux',
      'react-router',
      'redux'
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
  postcss: function (webpack) {
    return [
      postcssImport({
        path: ['./'],
        addDependencyTo: webpack
      }),
      postcssNext
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'vendors.bundle.js'
    }),
    webpackIsomorphicToolsPluginInstance.development()
  ]
}
