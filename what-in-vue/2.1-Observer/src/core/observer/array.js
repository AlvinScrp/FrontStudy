import { def } from "../util/index.js"

const arrayProto = Array.prototype
export const arrayObj = Object.create(arrayProto)

const methodsToPatch = [
  'push',
  'pop',
  // 'shift',
  // 'unshift',
  // 'splice',
  // 'sort',
  // 'reverse'
]
methodsToPatch.forEach(function (methodName) {
  const originMethod = arrayProto[methodName]
  def(arrayObj, methodName, function mutator(...args) {
    const result = originMethod.apply(this, args)
    const ob = this.__ob__
    switch (methodName) {
      case "push":
        break
      case "pop":
        break
    }
    console.log(`数组方法${methodName}被执行了`)
    ob.dep.notify()
    return result
  })

})