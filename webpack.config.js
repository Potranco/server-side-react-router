var path = require('path');
module.exports = {
  resolve: {
    extensions: ['.js']
  },
  entry: {
    main: './src/main.js',
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname,'dist/'),
    filename: '[name].js',
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3030
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
