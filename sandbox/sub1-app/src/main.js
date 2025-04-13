import Vue from "vue";
import App from "./App.vue";
import singleSpaVue from "single-spa-vue";
import router from "./router";

const appOptions = {
  // el: "#sub-container",
  router,
  render: (h) => h(App),
}
// 在非子应用中正常挂载应用
if (!window.singleSpaNavigate) {
  // delete appOptions.el
  new Vue(appOptions).$mount("#sub1-app")
}
const vueLifeCycle = singleSpaVue({
  Vue,
  appOptions,
})
// 子应用必须导出 以下生命周期 bootstrap、mount、unmount
export const bootstrap = vueLifeCycle.bootstrap
export const mount = vueLifeCycle.mount
export const unmount = vueLifeCycle.unmount
export default vueLifeCycle
