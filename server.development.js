const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.development');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const ProgressBar = require('progress');

const server = express();
const webpackCompiler = webpack(webpackConfig);
const bar = new ProgressBar(':bar :message', {total: 100});

webpackCompiler.apply(new ProgressPlugin(function(percentage, msg) {
  bar.update(percentage, {
    message: msg
  });
}));

server.use(require('webpack-dev-middleware')(webpackCompiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

server.use(require('webpack-hot-middleware')(webpackCompiler));

server.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/client/index.html'));
});

server.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }
});
