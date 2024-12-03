const fs = require('fs');
const path = require('path');
class FirstPlugin {
  constructor(options) {
    console.log('firstPlugin options', options);
    this.options = options || {};
  }
  apply(compiler) {
    // 监听 Webpack 的钩子
    compiler.hooks.done.tap('firstPlugin', (stats) => {
      console.log('----------> 构建完成！');
      // 可以在这里执行自定义逻辑
    });

    // 监听编译阶段
    compiler.hooks.compile.tap('firstPlugin', (params) => {
      console.log('----------> 开始编译...');
    });
    compiler.hooks.emit.tapAsync('firstPlugin', (compilation, callback) => {
      let fileSizes = '# File Sizes\n\n';

      // 遍历所有资源，获取文件名和大小
      for (const filename in compilation.assets) {
        const size = compilation.assets[filename].size();
        fileSizes += `- ${filename}: ${(size / 1024).toFixed(2)} KB\n`;
      }

      // 指定输出路径
      const outputPath = this.options.outputPath || compilation.options.output.path;
      const filePath = path.join(outputPath, 'fileSize.md');

      // 写入 fileSize.md 文件
      fs.writeFile(filePath, fileSizes, (err) => {
        if (err) {
          return callback(err);
        }
        console.log('fileSize.md generated.');
        callback();
      });
    });
  }
}

module.exports = FirstPlugin;
