const path =  require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './template/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    watch: true,
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            /*
            {
              loader: 'style-loader',
            },
            */
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: true,
                url: false
              }
            },
            {
              loader: 'postcss-loader',
            },
          ]
        },
      ],
    },
    plugins: [
      new CopyPlugin([
        { from: 'template/index.html', to: './' },
        { from: 'apps/receiver/dist/', to: 'receiver' },
      ]),
      new MiniCssExtractPlugin({
        //filename: '[name].css',
        filename: 'style.css',
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      hot: true,
      compress: true,
      port: 8000
    },
}