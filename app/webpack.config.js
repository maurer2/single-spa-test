const path =  require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './apps/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 8000
    },
    plugins: [
      new CopyPlugin([
        { from: 'template/index.html', to: './' },
        { from: 'apps/receiver/dist/', to: 'receiver' },
      ]),
    ],
}