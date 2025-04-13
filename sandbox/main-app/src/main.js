import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerApplication, start } from 'single-spa'

const loadScript = async (url) => {
  await new Promise((resolve, reject) => {
    const script = document.createElement("script")
    script.src = url
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}

window.__SINGLE_SPA__ = 1234

// 注册子应用
registerApplication({
  name: "sub1app",
  app: async () => {
    await loadScript("http://localhost:8080/js/chunk-vendors.js")
    await loadScript("http://localhost:8080/js/app.js")
    return window.sub1app
  },
  activeWhen: ["/sub1"],
  customProps: {
    domElement: document.querySelector('sub-container')
  }
})

start()

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
