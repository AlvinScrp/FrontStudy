import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './qiankun'
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false;

registerMicroApps([
  {
    name: 'imooc-travel-vue', // app name registered
    entry: '//localhost:6600',
    container: '#yd-container',
    activeRule: (location) => {
      console.log('location', location.pathname);
      return location.pathname.startsWith('/travel');
    },
  },
  {
    name: 'html',
    entry: '//localhost:5501',
    container: '#xtx-container',
    activeRule: (location) => {
      console.log('location', location.pathname);
      return location.pathname.startsWith('/xtx');
    },
  },
], {
  beforeLoad: [
    (app) => {
      console.log('beforeLoad', app);
    }
  ],
  beforeMount: [
    (app) => {
      console.log('beforeMount', app);
    }
  ],
  afterMount: [
    (app) => {
      console.log('afterMount', app);
    }
  ],
  afterUnmount: [
    (app) => {
      console.log('afterUnmount', app);
    }
  ]
});

start({
  sandbox: {
    experimentalStyleIsolation: true
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
