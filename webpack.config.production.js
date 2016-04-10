var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var webpackIsomorphicToolsConfig = require('./webpack-isomorphic-tools.config')
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')
var webpackIsomorphicToolsPluginInstance = new WebpackIsomorphicToolsPlugin(webpackIsomorphicToolsConfig)

var postcssImport = require('postcss-import')
var postcssNext = require('postcss-cssnext')

module.exports = {
  context: path.join(__dirname, '/src/shared'),
  entry: {
    vendors: [
      'axios',
      'babel-polyfill',
      'react',
      'react-dom',
      'react-helmet',
      'react-redux',
      'react-router',
      'redux'
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
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?modules&localIdentName=[hash:base64:5]&importLoaders=1!postcss-loader'
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
  postcss: [
    postcssImport({
      path: ['./']
    }),
    postcssNext
  ],
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
    new ExtractTextPlugin('[name]-[chunkhash].css', {
      allChunks: true
    }),
    webpackIsomorphicToolsPluginInstance
  ]
}
