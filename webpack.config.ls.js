var path = require('path')
var webpack = require('webpack')

module.exports = {
  //devtool: 'cheap-module-eval-source-map',
  entry: [
    //'webpack-hot-middleware/client',
    './ls/app'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        include: path.join(__dirname, 'ls')
      },
			{
        test: /\.ls$/,
        loaders: [ "react-hot", "livescript-loader" ],
        include: path.join(__dirname, 'ls')
      }
    ]
  }
}