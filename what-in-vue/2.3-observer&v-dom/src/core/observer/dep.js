
import { remove } from "../util/index.js"

let uid = 0
export class Dep {

  static target;

  constructor(when) {
    this.subs = []
    this.id = uid++
    this.when = when
  }

  addSub(sub) {
    this.subs.push(sub)
  }
  removeSub(sub) {
    remove(this.subs, sub)
  }

  depend() {

    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }

  notify() {
    const subs = this.subs.slice()
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }

}