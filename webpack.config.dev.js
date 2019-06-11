const base = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({}, base, {
  entry: {
    index: './example.tsx',
  },
  plugins: [...base.plugins, new HtmlWebpackPlugin({
    title: 'React-X-Gulu',
    template: 'example.html'
  })],
});
