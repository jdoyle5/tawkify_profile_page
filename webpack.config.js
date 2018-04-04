var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './frontend/profile-assets.jsx',
  output: {
    filename: './bundle.js',
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg)$/,
        loader: ['url-loader?limit=8192']
      },
      {
       test: /.(ttf|otf|eot|svg|woff|jpeg(2)?)(\?[a-z0-9]+)?$/,
       use: [{
         loader: 'file-loader',
         options: {
           name: '[name].[ext]',
           outputPath: './assets/font_files/',
           publicPath: '../'       // override the default path
         }
       }]
     },
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
