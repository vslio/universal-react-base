const path = require('path')
const webpack = require('webpack')
const cssnext = require('postcss-cssnext')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  context: path.join(__dirname, '../../client'),
  entry: {
    vendors: ['react', 'react-dom', 'react-router', 'redux', 'react-redux', 'redux-thunk', 'isomorphic-fetch', 'babel-polyfill', 'webpack-hot-middleware/client'],
    app: ['./index', 'webpack-hot-middleware/client']
  },
  output: {
    path: path.join(__dirname, '../../dist'),
    filename: '[name].bundle.js',
    publicPath: '/dist'
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
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: path.join(__dirname, '../../client')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  postcss: () => {
    return [cssnext]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: './vendors.bundle.js'
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
    })
  ]
}
