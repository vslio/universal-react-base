var webpack = require('webpack')
var path = require('path')

module.exports = {
  context: path.join(__dirname, './client'),
  entry: './index.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
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
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: path.join(__dirname, 'client')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  postcss: [],
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    })
  ],
  devServer: {
    contentBase: './client',
    hot: true
  }
}
