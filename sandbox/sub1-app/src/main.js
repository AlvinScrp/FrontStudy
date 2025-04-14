import Vue from "vue";
import App from "./App.vue";
// import singleSpaVue from "single-spa-vue";
import router from "./router";

const appOptions = {
  // el: "#sub-container",
  router,
  render: (h) => h(App),
}
// // 在非子应用中正常挂载应用
// if (!window.singleSpaNavigate) {
//   // delete appOptions.el
//   new Vue(appOptions).$mount("#sub1-app")
// }
// const vueLifeCycle = singleSpaVue({
//   Vue,
//   appOptions,
// })
// // 子应用必须导出 以下生命周期 bootstrap、mount、unmount
// export const bootstrap = vueLifeCycle.bootstrap
// export const mount = vueLifeCycle.mount
// export const unmount = vueLifeCycle.unmount
// export default vueLifeCycle

// index.js


Vue.config.productionTip = false

let vueInstance;

// 子应用没有接入 single-spa
if (!window.__Alvin_SINGLE_SPA__) {
  new Vue(appOptions).$mount('#sub1-app')
}

// 提供 bootstrap 生命周期方法
export function bootstrap () {
  console.log('sub1-app bootstrap')
  return Promise.resolve().then(() => {

  });
}
// 提供 mount 生命周期方法
export function mount (props) {
  console.log('sub1-app mount', props)
  return Promise.resolve().then(() => {
    if(props.domElement){
     let div = document.createElement('div')
      props.domElement.appendChild(div);
      appOptions.el = div
    }else{
      if(!appOptions.el){
        let div = document.createElement('div')
        div.id = 'alvin-sub1-app'
        document.body.appendChild(div)
        appOptions.el =div
      }
    }
    vueInstance = new Vue(appOptions)
    // vueInstance.$mount(el)
  })
}

// 提供 unmount 生命周期方法
export function unmount () {
  console.log('sub1-app unmount',vueInstance.$el,vueInstance)
  return Promise.resolve().then(() => {
    vueInstance.$el.parentNode.removeChild(vueInstance.$el)
    vueInstance.$destroy()
  })
}

// 提供 update 生命周期方法
export function update () {
  console.log('sub1-app update');
}

