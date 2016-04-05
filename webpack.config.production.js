var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpackIsomorphicToolsConfig = require('./webpack-isomorphic-tools')
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(webpackIsomorphicToolsConfig)
var cssnext = require('postcss-cssnext')

module.exports = {
  context: path.join(__dirname, '/src/shared'),
  entry: {
    vendors: [
      'react',
      'react-dom',
      'react-router',
      'redux',
      'react-redux',
      'redux-thunk',
      'axios',
      'babel-polyfill'
    ],
    app: ['../client']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'file?name=[name].[ext]' },
      {
        test: webpackIsomorphicToolsPlugin.regular_expression('images'),
        loader: 'url-loader?limit=10240'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?modules&localIdentName=[hash:base64:5]&importLoaders=1',
          'postcss-loader'
        )
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
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
    return [cssnext]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'vendors.bundle.js'
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new ExtractTextPlugin('[name]-[chunkhash].css', { allChunks: true }),
    webpackIsomorphicToolsPlugin
  ]
}
