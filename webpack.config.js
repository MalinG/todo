var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src/app');
var IMG_DIR = path.resolve(__dirname, 'src/img');

var config = {
  devtool: 'eval',
  entry: [
    // For hot style updates
    //'webpack/hot/dev-server',
    // The script refreshing the browser on none hot updates
    //'webpack-dev-server/client?http://localhost:8080',

    // Our application
  APP_DIR + '/index.jsx'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      },

      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.svg$/,
        loader : 'file-loader?name=img/img-[hash:6].[ext]'
      }
    ]
  }
};

module.exports = config;
