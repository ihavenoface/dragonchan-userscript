'use strict';

var path = require('path');

module.exports = {
  context: __dirname,
  entry: ['./index.js'],
  devServer: {
    contentBase: __dirname
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'stage-2'],
      }
    }, {
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader"
      }],
      exclude: /node_modules/,
    }]
  },
};

if(process.env.NODE_ENV === 'development')
  module.exports.devtool = 'cheap-module-eval-source-map';
