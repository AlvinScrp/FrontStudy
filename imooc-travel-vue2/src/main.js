import Vue from 'vue';
import './qiankun.js';
import App from './App.vue';
import store from './store';
import router from './router';
import './assets/style/reset.css';
import './assets/style/border.css';
import actions from '@/shared/actions';

Vue.config.productionTip = false;

let instance = null;

function render(props = {}) {
  if (props) {
    actions.setActions(props);
  }
  const { container } = props;
  const mountNode = container ? container.querySelector('#app') : '#app';

  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(mountNode);
}

// 独立运行时
if (window.__POWERED_BY_WUJIE__) {
  let instance;
  window.__WUJIE_MOUNT = () => {
    render();
  };
  window.__WUJIE_UNMOUNT = () => {
    if (instance) {
      instance.$destroy();
    }
  };
} else {
  if (!window.__POWERED_BY_QIANKUN__) {
    render();
  }
}


/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log('[vue] vue app mounted', props);
  render(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  console.log('[vue] vue app unmounted');
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
}

