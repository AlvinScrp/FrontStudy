module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        "views": "@/views",
        'components': "@/components",
        'network': "@/network",
        'common': "@/common",
        'assets': "@/assets",
      }
    }
  }
}