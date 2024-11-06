const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // 目标服务器的地址
        changeOrigin: true, // 是否改变请求源
        pathRewrite: { '^/api': '/static/moc' }  // 重写路径
      }
    }
  }
});
