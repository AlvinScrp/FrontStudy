import { createElement } from "./vdom/create-element.js"
import { patch } from "./vdom/patch.js"
import { query } from "../platforms/web/node-ops.js"
class Vue {
  constructor(options) {
    this.$options = options
    this.$data = (options && options.data) ? options.data : {}
    this.$createElement = (a, b, c) => createElement(a, b, c)
    this.$mount(options.el)

  }
}


Vue.prototype.$mount = function (elId) {
  const vm = this
  let el = query(elId)
  vm.$el = el
  vm.$update()

}
Vue.prototype.$update = function () {
  const vm = this
  let vnode = vm.$options.render.call(vm, vm.$createElement)
  vnode.elm = vm.$el
  let oldVnode = vm._vnode
  patch(oldVnode, vnode)
  vm._vnode = vnode
}


export default Vue


