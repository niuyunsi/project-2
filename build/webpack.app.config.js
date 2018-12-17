const merge = require('webpack-merge');
const path = require('path');

const base = require('./webpack.base.config');

module.exports = env => {
  return merge(base(env), {
    entry: {
      app: './src/app.js',
      background: './src/background.js'
    },

    output: {
      filename: '[name].js',
      path: path.resolve(__dirname + '/../app')
    }
  });
};
