
export function query(el) {
  const selected = document.querySelector(el)
  if (!selected) {
    return document.createElement('div')
  }
  return selected
}
export function removeAllChildren(node) {
  node.innerHTML = ''
}

export function removeChildNode(node, child) {
  node && child && node.removeChild(child)
}

export function createElement(tagName) {
  const elm = document.createElement(tagName)
  return elm
}

export function createTextNode(text) {
  return document.createTextNode(text)
}

export function createComment(text) {
  return document.createComment(text)
}

export function appendChild(node, child) {
  if (node) {
    node.appendChild(child)
  }
}

export function parentNode(node) {
  return node ? node.parentNode : undefined
}

export function tagName(node) {
  return node.tagName
}

export function setTextContent(node, text) {
  node.textContent = text
}
export function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode)
}
export function nextSibling (node){
  return node.nextSibling
}
