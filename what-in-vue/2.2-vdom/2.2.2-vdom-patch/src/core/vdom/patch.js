import { isUndef, isDef, isPrimitive, isHTMLTag } from "../util/index.js"
import * as nodeOps from "../../platforms/web/node-ops.js"
import { VNode } from "./vnode.js"

//old null，comment,text, element no child , element has child
export function patch(old, vnode, isOldRealElement = false) {
  if (isUndef(vnode)) {
    return undefined
  }
  if (isUndef(old)) {
    createElm(vnode)
  } else if (!isOldRealElement && sameVnode(old, vnode)) {
    patchVnode(old, vnode)
  } else {
    const oldVnode = isOldRealElement ? newVnode(old) : old
    const parentElm = nodeOps.parentNode(oldVnode.elm)
    if (isDef(parentElm)) {
      removeVnodes(parentElm, [oldVnode], 0, 0)
    }
    createElm(vnode, parentElm)

  }
  return vnode.elm
}

function newVnode(elm) {
  return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
}

function sameVnode(a, b) {
  // return false
  return a.key === b.key && a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data)
}
/**
 * 前提same Vnode
 * @param {VNode} oldVnode 
 * @param {VNode} vnode 
 */
function patchVnode(oldVnode, vnode) {
  const elm = vnode.elm = oldVnode.elm
  const ch = vnode.children
  const oldCh = oldVnode.children

  console.log("patchVnode------------")
  console.log(oldVnode)
  console.log(vnode)
  //vnode 文本节点
  if (isDef(vnode.text)) {
    if (vnode.text !== oldVnode.text) {
      nodeOps.setTextContent(elm, vnode.text)
    }
  } else {
    //vnode 非文本节点
    if (isDef(oldCh) && isDef(ch)) {
      if (oldCh !== ch) updateChildren(elm, oldCh, ch)
    } else if (isDef(ch)) {
      addVnodes(elm, null, ch, 0, ch.length - 1)
    } else if (isDef(oldCh)) {
      removeVnodes(elm, oldCh, 0, oldCh.length - 1)
    } else if (isDef(oldVnode.text)) {
      nodeOps.setTextContent(elm, "")
    }
  }

}

function updateChildren(parentElm, oldCh, newCh) {
  let oldStartIdx = 0
  let newStartIdx = 0
  let oldEndIdx = oldCh.length - 1
  let newEndIdx = newCh.length - 1
  let oldStartVnode = oldCh[0]
  let oldEndVnode = oldCh[oldEndIdx]
  let newStartVnode = newCh[0]
  let newEndVnode = newCh[newEndIdx]

  let oldKeyToIdxMap = undefined



  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (isUndef(oldStartVnode)) {
      oldStartVnode = oldCh[++oldStartIdx]
    } else if (isUndef(oldEndVnode)) {
      oldEndVnode = oldCh[--oldEndIdx]
    } else if (sameVnode(oldStartVnode, newStartVnode)) {
      patchVnode(oldStartVnode, newStartVnode)
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx]
    } else if (sameVnode(oldEndVnode, newEndVnode)) {
      patchVnode(oldEndVnode, newEndVnode)
      oldEndVnode = oldCh[--oldEndIdx]
      newEndVnode = newCh[--newEndIdx]
    } else if (sameVnode(oldStartVnode, newEndVnode)) {
      patchVnode(oldStartVnode, newEndVnode)
      nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm))
      oldStartVnode = oldCh[++oldStartIdx]
      newEndVnode = newCh[--newEndIdx]
    } else if (sameVnode(oldEndVnode, newStartVnode)) {
      patchVnode(oldEndVnode, newStartVnode)
      nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)
      oldEndVnode = oldCh[--oldEndIdx]
      newStartVnode = newCh[++newStartIdx]
    } else {
      //尽力在oldCh中找到与newStartVnode匹配的vnode
      //如果newStartVnode有key，必须通过key匹配。(其实这是优化，强行sameNode也可以)
      //否则通过sameNode匹配
      if (isUndef(oldKeyToIdxMap)) {
        oldKeyToIdxMap = createKeyToIdxMap(oldCh, oldStartIdx, oldEndIdx)
      }
      let idxInOld = isDef(newStartVnode.key)
        ? oldKeyToIdxMap[newStartVnode.key]
        : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx)

      if (isUndef(idxInOld)) {
        //在oldCh中没有匹配的node,创建新的elm，并插入oldStart之前
        createElm(newStartVnode, parentElm, oldStartVnode.elm)
      } else {
        let oldVnodeToMove = oldCh[idxInOld]
        patchVnode(oldVnodeToMove, newStartVnode)
        nodeOps.insertBefore(parentElm, oldVnodeToMove.elm, oldStartVnode.elm)
        oldCh[idxInOld] = undefined
      }
      newStartVnode = newCh[++newStartIdx]
    }
  }
  if (oldStartIdx > oldEndIdx) {
    //old匹配完了，添加剩余新的
    let refElm = isDef(newCh[newEndIdx + 1]) ? newCh[newEndIdx + 1].elm : null
    addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx)
  } else if (newStartIdx > newEndIdx) {
    //new匹配完了，移除剩余旧的
    removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx)
  }
}

function createKeyToIdxMap(children, startIdx, endIdx) {
  const map = {}
  for (let i = startIdx, key; i <= endIdx; ++i) {
    key = children[i].key
    if (isDef(key)) map[key] = i
  }
  return map
}
function findIdxInOld(node, oldCh, start, end) {
  for (let i = start; i < end; i++) {
    const c = oldCh[i]
    if (isDef(c) && sameVnode(node, c)) return i
  }
}

function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx) {
  for (; startIdx <= endIdx; ++startIdx) {
    createElm(vnodes[startIdx], parentElm, refElm)
  }
}

function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
  for (; startIdx <= endIdx; ++startIdx) {
    nodeOps.removeChildNode(parentElm, vnodes[startIdx].elm)
  }
}

export function createElm(vnode, parentElm, refElm) {
  const children = vnode.children
  const tag = vnode.tag
  if (isDef(tag) && isHTMLTag(tag)) {
    vnode.elm = nodeOps.createElement(tag)
    createChildren(vnode, children)
    insert(parentElm, vnode.elm, refElm)
  } else {
    vnode.elm = vnode.isComment
      ? nodeOps.createComment(vnode.text)
      : nodeOps.createTextNode(vnode.text)
    insert(parentElm, vnode.elm, refElm)
  }
}

function insert(parent, elm, ref) {
  if (isDef(parent)) {
    if (isDef(ref)) {
      if (nodeOps.parentNode(ref) === parent) {
        nodeOps.insertBefore(parent, elm, ref)
      }
    } else {
      nodeOps.appendChild(parent, elm)
    }
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
