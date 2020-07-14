const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  // publicPath: required to fix bundle paths to serve as static site
  publicPath: '',
  css: {
    loaderOptions: {
      // Add global sass files here
      sass: {
        additionalData: `@import "@/assets/style/vars.scss";`
      }
    }
  },
  // chainWebpack: code required to nullify the sass loader during test,
  // which has problems resolving the alias paths I have configured
  // See: https://github.com/vuejs/vue-cli/issues/4053
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'test') {
      const scssRule = config.module.rule('scss');
      scssRule.uses.clear();
      scssRule.use('null-loader').loader('null-loader');
    }
  },
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        components: path.resolve(__dirname, 'src/components'),
        mappers: path.resolve(__dirname, 'src/mappers'),
        utils: path.resolve(__dirname, 'src/utils'),
        store: path.resolve(__dirname, 'src/store')
      }
    }
  }
}
