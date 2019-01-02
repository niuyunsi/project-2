const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: 'index.html',
  excludeChunks: ['background']
});

const translateEnvToMode = env => {
  if (env === 'production') {
    return 'production';
  }
  return 'development';
};

module.exports = env => {
  return {
    target: 'electron-renderer',

    mode: translateEnvToMode(env),

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
};
