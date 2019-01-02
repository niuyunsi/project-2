const childProcess = require('child_process');
const webpack = require('webpack');
const config = require('./webpack.docs.config');

const env = 'development';
const compiler = webpack(config(env));

let serverStarted = false;

const watching = compiler.watch({}, (err, stats) => {
  console.log('compiling...done');
  if (!err && !stats.hasErrors() && !serverStarted) {
    serverStarted = true;

    childProcess
      .spawn('http-server', ['docs/'])
      .on('close', () => {
        watching.close();
      });
  }
});
