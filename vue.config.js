const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  // publicPath: required to fix bundle paths to serve as static site
  publicPath: '', 
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
  },
  // Global sass files
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/style/vars.scss";`
      }
    }
  }
}
