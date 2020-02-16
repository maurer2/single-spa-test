const postcssNormalize = require('postcss-normalize');

module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    postcssNormalize,
    // 'postcss-import': {},
    // 'postcss-preset-env': {},
    // 'cssnano': {}
  ],
}
