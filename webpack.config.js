const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: 'index.html'
});

module.exports = {
  target: 'electron-renderer',

  entry: {
    app: './src/app.js',
    background: './src/background.js'
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname + '/app')
  },

  node: {
    __dirname: false,
    __filename: false
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },

  module: {
    rules: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  plugins: [htmlPlugin]
};
