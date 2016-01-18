var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: ['webpack-hot-middleware/client', './src/index.js'],
  output: { path: path.join(__dirname, 'dist'), publicPath: '/static/', filename: 'bundle.js' },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'react-hot!babel', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!sass'}
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
