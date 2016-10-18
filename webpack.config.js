var path = require('path')
var webpack = require('webpack')

var config = {
  entry: {
    index: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: 'kero-server.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版本：1.0.0\n日期：2016-10-18\n作者：Yonyou-FED')
  ]
}

module.exports = config
