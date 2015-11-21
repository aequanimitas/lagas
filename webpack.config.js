// dev
//

module.exports = {
  entry: './client.js',
  output: {
    filename: 'public/bundle.js',
  },
  module: {
    loaders: [{ 
        exclude: /(node_modules|app-server.js)/,
        loader: 'babel',
        query: {presets:['react','es2015']}
    }]
  }
}
