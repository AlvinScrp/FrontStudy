if (window.__POWERED_BY_QIANKUN__) {
  // 仅在子应用下执行
  window.__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

window._QIANKUN_YD = window._QIANKUN_YD || {
  // 通信
  event: (() => {
    class Emitter {
      constructor() {
        this.events = {};
        this.watchs = [];
      }

      add(eventName, callback, count) {
        if (!eventName || typeof callback !== 'function') return;
        if (!this.events[eventName]) {
          this.events[eventName] = [];
          this.events[eventName].push({ callback, count });
        } else {
          const hasExist = this.events[eventName].some(
            (item) => item.callback === callback && item.count === count
          );
          !hasExist && this.events[eventName].push({ callback, count });
        }
      }

      emit(...args) {
        const [eventName, ...restArgs] = args;
        const callbacks = this.events[eventName] || [];
        if (eventName && this.watchs.length > 0) {
          this.watchs.forEach((item) => {
            item.apply(this, [eventName, ...restArgs]);
          });
        }
        if (eventName && callbacks.length > 0) {
          callbacks.forEach(({ callback, count }) => {
            callback.apply(this, [eventName, ...restArgs]);
            count && this.off(eventName, callback);
          });
        }
      }

      on(eventName, callback) {
        this.add(eventName, callback, 0);
      }

      once(eventName, callback) {
        this.add(eventName, callback, 1);
      }

      off(eventName, callback) {
        const callbacks = this.events[eventName] || [];
        if (callbacks.length <= 0) return;
        if (!callback) this.events[eventName] = [];
        callbacks.forEach((item, index) => {
          if (item.callback === callback) {
            callbacks.splice(index, 1);
          }
        });
      }

      watch(callback) {
        if (typeof callback !== 'function') return;
        this.watchs.push(callback);
      }
    }
    return new Emitter();
  })(),
  // 数据共享（具备持久化能力）
  store: (() => { })(),
};
