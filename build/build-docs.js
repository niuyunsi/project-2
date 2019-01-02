const webpack = require('webpack');
const config = require('./webpack.docs.config');

const env = 'production';

webpack(config(env), (err, stats) => {
  if (err || stats.hasErrors()) {
    // Handle errors here
  }
  // Done processing
  console.log('Done')
});
