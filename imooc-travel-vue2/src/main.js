import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import './assets/style/reset.css';
import './assets/style/border.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
