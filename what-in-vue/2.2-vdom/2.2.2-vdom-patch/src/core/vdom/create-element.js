import { isUndef, isDef, isPrimitive, isFalse, isHTMLTag } from "../util/index.js"
import { createEmptyVNode, createTextVNode, VNode } from "./vnode.js"

export function createElement(tag, data, children) {
  if (!tag) {
    return createEmptyVNode()
  }
  children = normalizeChildren(children)
  return new VNode(tag, data, children)

}

export function normalizeChildren(children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}
function normalizeArrayChildren(children) {
  const res = []
  for (let i = 0, l = children.length; i < l; i++) {
    const child = children[i]
    const vnode = isPrimitive(child)
      ? createTextVNode(child)
      : child
    vnode && res.push(vnode)
  }
  return res

}