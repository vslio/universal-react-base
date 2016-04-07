var webpack = require('webpack')
var path = require('path')
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')
var WebpackIsomorphicToolsConfig = require('./webpack-isomorphic-tools')
var webpackIsomorphicToolsPluginInstance = new WebpackIsomorphicToolsPlugin(WebpackIsomorphicToolsConfig)
var cssNext = require('postcss-cssnext')

module.exports = {
  context: path.join(__dirname, '/src/shared'),
  devtool: 'cheap-module-eval-source-map',
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
    webpackIsomorphicToolsPluginInstance.development()
  ]
}