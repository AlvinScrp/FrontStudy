const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
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
    // module: {
    //   rules: [
    //     {
    //       test: /\.ts$/,
    //       use: 'ts-loader',
    //       exclude: '/node_modules/',
    //     }
    //   ]
    // },
    // resolve: {
    //   extensions: ['.ts', '.js'],
    // },
  },
  lintOnSave: false,
})
