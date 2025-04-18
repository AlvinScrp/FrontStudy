// 沙箱类
class Sandbox {
  constructor() {
    this.originalWindow = window; // 保存原始的 window 对象
    this.proxyWindow = new Proxy(window, {
      get: (target, key) => {
        // 检查是否已经存在隔离的变量
        if (this[key] !== undefined) {
          return this[key];
        }
        return target[key];
      },
      set: (target, key, value) => {
        // 检查是否已经存在隔离的变量
        // console.log('set1', key, value);
        // if (this[key] !== undefined) {
          // console.log('set2', key, value, this[key]);
          this[key] = value;
          return true;
        // }
        // console.log('set3', key, value, target[key]);
        // target[key] = value;
        // return true;
      }
    });
    
    // 存储当前活跃的窗口对象
    this.currentWindow = this.originalWindow;
  }

  activate() {
    window.myVar = 'Hello, Original!';
    // 激活沙箱，保存对 proxyWindow 的引用
    this.currentWindow = this.proxyWindow;
    // 替代方案：不直接修改 window，而是提供一个方法来获取当前窗口对象
  }

  deactivate() {
    // 恢复使用原始的 window 对象
    this.currentWindow = this.originalWindow;
  }

  // 获取当前活跃的窗口对象
  getCurrentWindow() {
    return this.currentWindow;
  }

  clear() {
    // 清理沙箱中的所有变量
    for (const key in this) {
      if (this.hasOwnProperty(key) && key !== 'originalWindow' && key !== 'proxyWindow' && key !== 'currentWindow') {
        delete this[key];
      }
    }
  }
}

// 使用沙箱
const sandbox = new Sandbox();

// 激活沙箱
sandbox.activate();

// 模拟微应用的全局变量操作 - 使用沙箱的当前窗口
const win = sandbox.getCurrentWindow();
win.myVar = 'Hello, Qiankun!';

// 检查沙箱中的全局变量
console.log(win.myVar); // 输出: Hello, Qiankun!

// 恢复原始的 window 对象
sandbox.deactivate();

// 清理沙箱
sandbox.clear();

// 检查原始的 window 对象
console.log(win.myVar); // 输出: undefined
