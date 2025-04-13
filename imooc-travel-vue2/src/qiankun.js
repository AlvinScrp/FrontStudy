if (window.__POWERED_BY_QIANKUN__) {
  // 设置webpack publicPath
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  console.log('qiankun环境，设置publicPath:', __webpack_public_path__);
} else {
  console.log('非qiankun环境，使用默认publicPath');
}
