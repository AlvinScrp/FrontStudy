import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerApplication, start } from 'single-spa'
import { loadApp } from './loader';




window.__Alvin_SINGLE_SPA__ = true
window.aaaFlag = '1111111111111'

console.log('before registerApplication', document)
// 注册子应用
registerApplication({
  name: "sub1app",
  app: async () => {
    console.log("=====>in register app call1")
    console.log('before loadApp', window.aaaFlag)
    const appConfigGetter = await loadApp({
      appName: 'sub1app',
      htmlEntry: 'http://localhost:8080/index.html',
      container: document.querySelector('.sub-container')
    })
    console.log("=====>in register app call2")
    return appConfigGetter()
  },
  activeWhen: ["/sub1"],
  // customProps: () => {
  //   //指定基座挂载点，也可以在子应用中指定
  //   return { domElement: document.querySelector('.sub-container') }
  // }
})

console.log("=====>start")
start()

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

