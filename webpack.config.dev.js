const base = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({}, base, {
  entry: {
    index: './lib/index.tsx',
  },
  plugins: [...base.plugins, new HtmlWebpackPlugin({
    title: 'React-Gulu',
    template: 'index.html'
  })],
});
