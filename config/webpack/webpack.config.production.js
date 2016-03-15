const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, '../../shared'),
  entry: {
    vendors: ['react', 'react-dom', 'react-router', 'redux', 'react-redux', 'redux-thunk', 'isomorphic-fetch', 'babel-polyfill'],
    app: ['./index.js']
  },
  output: {
    path: path.join(__dirname, '../../dist'),
    filename: './app.bundle.js'
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
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[hash:base64:5]',
          'postcss-loader'
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: path.join(__dirname, '../../shared')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  postcss: [],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: './vendors.bundle.js'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production') }
    })
  ]
}
