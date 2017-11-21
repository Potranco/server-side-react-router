var path = require('path');
module.exports = {
  resolve: {
    extensions: ['.js']
  },
  entry: {
    app: './src/app.js',
    server: './server.js'
  },
  output: {
    path: path.resolve(__dirname,'dist/'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /(\.js|.jsx)$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
        query: {
          presets: ['es2015','react']
        }
      }
    ]
  }
}
