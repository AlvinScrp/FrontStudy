const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080,
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // 目标服务器的地址
        changeOrigin: true, // 是否改变请求源
        pathRewrite: { '^/api': '/static/moc' }  // 重写路径
      }
    },
  },
  configureWebpack: {
    output: {
      library: 'imooc-travel-vue',
      libraryTarget: 'umd',
      // webpack 5 需要把 jsonpFunction 替换成 chunkLoadingGlobal
      chunkLoadingGlobal: `webpackJsonp_imooc-travel-vue`,
    }
  }
});
