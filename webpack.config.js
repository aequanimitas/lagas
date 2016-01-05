var webpack = require('webpack');
var debug = process.env.NODE_ENV !== 'production';

var plugins = [
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: 'production'}
    })
  ]

module.exports = {
  entry: './client.js',
  output: {
    filename: 'public/bundle.js',
  },
  module: {
    loaders: [{
      exclude: /(node_modules|app-server.js)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  }
};
