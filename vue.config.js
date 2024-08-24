const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/Creative-Scroll/' : '/Creative-Scroll/',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/_variables.scss";`
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Creative-Scroll';
      return args;
    });
  },
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /^\/Creative-Scroll/, to: '/' }
      ]
    },
  }
});