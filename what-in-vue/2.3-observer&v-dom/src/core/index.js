import { createElement } from "./vdom/create-element.js"
// import { patch } from "./vdom/patch"
import { createElm } from "./vdom/patch.js"
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
  const { render } = vm.$options
  let el = query(elId)
  vm.$el = el
  let vnode = render.call(vm, vm.$createElement)
  vnode.elm = el
  vm._vnode = vnode
  vm.$el = createElm(vnode)
}

export default Vue


