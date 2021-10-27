import {
  def,
  isObject,
  hasProto
} from '../util/index.js'
import { arrayObj } from './array.js'
import { Dep } from './dep.js'
export class Observer {

  constructor(value) {
    this.value = value
    this.dep = new Dep("Observe:" + JSON.stringify(value))
    def(value, '__ob__', this)
    if (Array.isArray(value)) {
      augment(value, arrayObj)
      this.observeArray(value)
    } else {
      this.walk(value)
    }

  }
  walk(obj) {
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i])
    }
  }
  observeArray(items) {
    for (let i = 0, l = items.length; i < l; i++) {
      observe(items[i])
    }
  }

}


export function defineReactive(obj, key, val) {
  if (arguments.length === 2) {
    val = obj[key]
  }
  let valOb = observe(val)

  const dep = new Dep("defineReactive: key-" + JSON.stringify(key))


  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      // console.log(`${key}属性被读取了`);
      const value = val
      if (Dep.target) {
        //Watcher构建(a.b.c)时候，通过逐级get,最终让c依赖a,b,c
        Dep.target.addDep(dep)
        depObject(value)
      }

      return value
    },
    set(newValue) {
      if (newValue === val) {
        return
      }
      // console.log(`${key}属性被修改了`);
      val = newValue
      valOb = observe(newValue)
      dep.notify()
    }
  })
}
export function observe(obj) {
  if (!isObject(obj)) {
    return
  }
  if (obj.hasOwnProperty("__ob__")) {
    return obj.__ob__
  }
  return new Observer(obj)
}

/**
 * @param {*} obj 
 */
export function depObject(obj) {
  if (Dep.target && obj && obj.__ob__) {
    Dep.target.addDep(obj.__ob__.dep)
    if (Array.isArray(obj)) {
      depArray(obj)
    }
  }
}

export function depArray(items) {
  for (let i = 0, item, l = items.length; i < l; i++) {
    item = items[i]
    depObject(items[i])
  }
}

export function augment(target, src) {
  if (hasProto) {
    target.__proto__ = src
  } else {
    const keys = Object.getOwnPropertyNames(src)
    for (let i = 0, l = keys.length; i < l; i++) {
      const key = keys[i]
      def(target, key, src[key])
    }
  }

}


