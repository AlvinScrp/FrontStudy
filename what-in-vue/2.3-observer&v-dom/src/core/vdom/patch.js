import { isUndef, isDef, isPrimitive, isHTMLTag } from "../util/index.js"
import * as nodeOps from "../../platforms/web/node-ops.js"
export function patch(vnode) {
  // // const insertedVnodeQueue = []
  // if (isUndef(oldVnode)) {
  createElm(vnode)
  // }
  return vnode.elm
}
export function createElm(vnode, parentElm) {
  const children = vnode.children
  const tag = vnode.tag
  console.log(vnode)
  if (isDef(tag) && isHTMLTag(tag)) {
    if (!vnode.elm) {
      vnode.elm = nodeOps.createElement(tag)
    }
    createChildren(vnode, children)
    nodeOps.appendChild(parentElm, vnode.elm)
  } else {
    vnode.elm = vnode.isComment
      ? nodeOps.createComment(vnode.text)
      : nodeOps.createTextNode(vnode.text)
    nodeOps.appendChild(parentElm, vnode.elm)
  }
}
function createChildren(vnode, children) {
  if (Array.isArray(children)) {
    for (let i = 0; i < children.length; ++i) {
      createElm(children[i], vnode.elm)
    }
  } else if (isPrimitive(vnode.text)) {
    nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)))
  }
}
