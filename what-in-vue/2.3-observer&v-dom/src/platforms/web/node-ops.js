
export function query(el) {
  const selected = document.querySelector(el)
  if (!selected) {
    return document.createElement('div')
  }
  return selected
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
  console.log("appendChild-----satrt")
  console.log(node)
  console.log(child)
  if (node) {
    node.appendChild(child)
  }
  console.log("appendChild-----end")

}