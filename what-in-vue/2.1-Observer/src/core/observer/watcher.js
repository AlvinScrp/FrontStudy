import { Dep } from "./dep.js";
import { isObject } from "../util/index.js"
export class Watcher {
  constructor(vm, expOrFn, options = { deep: false }) {
    this.deps = []
    this.vm = vm;
    this.deep = options && options.deep ? options.deep : false;
    this.expOrFn = expOrFn

    if (typeof expOrFn === 'function') {
      this.getter = expOrFn
    } else {
      this.getter = parsePath(expOrFn)
    }

    this.value = this.get()

  }

  get() {
    Dep.target = this
    const vm = this.vm
    let value = this.getter.call(vm, vm)
    if (this.deep) {
      traverse(value)
    }
    // console.log(value)
    Dep.target = undefined
    return value
  }

  update() {
    console.log(`update: ${this.expOrFn} 相关数据的变化`)
  }
  addDep(dep) {
    if (this.deps.indexOf(dep) >= 0) {
      return
    }
    this.deps.push(dep)
    dep.addSub(this)

  }
}

/**
 * Parse simple path.
 * 把一个形如'data.a.b.c'的字符串路径所表示的值，从真实的data对象中取出来
 * 例如：
 * data = {a:{b:{c:2}}}
 * parsePath('a.b.c')(data)  // 2
 */
const bailRE = /[^\w.$]/
export function parsePath(path) {
  if (bailRE.test(path)) {
    return
  }
  const segments = path.split('.')
  return function (obj) {
    for (let i = 0; i < segments.length; i++) {
      if (!obj) return
      obj = obj[segments[i]]
    }
    return obj
  }
}

const seenObjects = new Set()

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
export function traverse(val) {
  _traverse(val, seenObjects)
  seenObjects.clear()
}

function _traverse(val, seen) {
  let i, keys
  const isA = Array.isArray(val)
  if ((!isA && !isObject(val))) {
    return
  }
  if (val.__ob__) {
    const depId = val.__ob__.dep.id
    if (seen.has(depId)) {
      return
    }
    seen.add(depId)
  }
  if (isA) {
    i = val.length
    while (i--) _traverse(val[i], seen)
  } else {
    keys = Object.keys(val)
    i = keys.length
    while (i--) _traverse(val[keys[i]], seen)
  }
}