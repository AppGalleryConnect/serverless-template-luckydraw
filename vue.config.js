module.exports = {
  productionSourceMap: false,
  publicPath: "./",
  lintOnSave: false,
  assetsDir: "static",
  chainWebpack: config => {
    config.plugins.delete('prefetch');
    config.optimization.minimize(true);
    config.optimization.minimizer('terser').tap((args) => {
      const opts = args[0];
      opts.test = /^(.+)chunk\-vendors(.+)\.js$/g;
      return args;
    });
    config.plugin('html').tap((args) => {
      args[0].minify = false;
      return args;
    });
  },
  devServer: {
  }
};