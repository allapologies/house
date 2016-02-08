'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
  context: __dirname + "\\frontend",
  entry: "./app",
  output: { path: __dirname + "\\public\\javascripts", filename: "bundle.js"},
  devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map": null,
  watch:NODE_ENV == "development",
  module: {
    loaders: [
    {
      test: /\.js$/,
      exclude: [/node_modules/,/lib/],
      loaders: ['babel-loader']
    }
  ]},
  query: {
    presets: ['es2015']
  },
  plugins: [
    new webpack.NodeEnvironmentPlugin('NODE_ENV'),
  ]
  ,
  resolve: {
    alias: {
      jquery: "./lib/jquery-2.2.0.min"
    }
  }
};