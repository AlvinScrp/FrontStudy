/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 不需要使用 Vue.use，因为 wujie 不是一个 Vue 插件
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
