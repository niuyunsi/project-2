const merge = require('webpack-merge');
const path = require('path');

const base = require('./webpack.base.config');

module.exports = env => {
  return merge(base(env), {
    entry: './src/app.js',

    output: {
      filename: '[name].[hash].js',
      path: path.resolve(__dirname + '/../docs')
    }
  });
};
