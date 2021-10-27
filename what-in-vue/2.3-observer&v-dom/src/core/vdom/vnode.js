export class VNode {

  tag
  data
  children
  text
  elm //Dom Node
  isComment = false
  isCloned = false
  parent //VNode
  constructor(tag, data, children, text, elm) {
    this.tag = tag || ""
    this.data = data || {}
    this.children = children || []
    this.text = text;
    this.elm = elm
    this.isComment = false
    this.parent = undefined
  }



}

export const createEmptyVNode = (text = "") => {
  const node = new VNode()
  node.text = text
  node.isComment = true
  return node
}
export const createTextVNode = (text = "") => {
  const node = new VNode()
  node.text = text
  return node
}

export function cloneVNode(vnode) {
  const node = new VNode(vnode.tag, vnode.data, vnode.children, vnode.text)
  node.isComment = vnode.isComment
  node.isCloned = true
}