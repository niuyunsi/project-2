const childProcess = require('child_process');
const electron = require('electron');
const webpack = require('webpack');
const config = require('./webpack.app.config');

const env = 'development';

webpack(config(env), (err, stats) => {
  if (err || stats.hasErrors()) {
    // Handle errors here
  }
  // Done processing
  console.log('Done')
});
