const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
module.exports = {
  transpileDependencies: true,
  chainWebpack: config => {
    config.entry.app = ['babel-polyfill', './src/main.js'],
      config.plugin('provide').use(webpack.ProvidePlugin, [{
        $: 'jquery',
        jquery: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      }])
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://cloud.seeyon.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    client: {
      overlay: false
    },
  }
} 
