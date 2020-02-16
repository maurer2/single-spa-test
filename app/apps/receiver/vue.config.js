module.exports = {
  chainWebpack: (config) => {
    // config.devServer.set('inline', false);
    // config.devServer.set('hot', true);
    if (process.env.NODE_ENV !== 'production') {
      config.output.filename(`[name].js`)
    }
    config.externals(['vue', 'vue-router']);
  },
  filenameHashing: false,
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  }
};
