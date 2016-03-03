const path = require('path')
const webpack = require('webpack')
const cssnext = require('postcss-cssnext')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  context: path.join(__dirname, '../../client'),
  entry: [
    'webpack-hot-middleware/client',
    './index.js',
    './index.html'
  ],
  output: {
    path: path.join(__dirname, '../../dist'),
    filename: 'app.bundle.js',
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
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
    })
  ]
}
