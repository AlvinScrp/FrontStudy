const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    publicPath: 'http://localhost:8080',
    output: {
      library: "sub1app",
      libraryTarget: "window"
    },
    devServer: {
      port: 8080,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    },
  },
  lintOnSave: false,
})
