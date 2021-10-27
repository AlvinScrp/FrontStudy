import { Observer } from "../src/core/observer/index.js";
import { Watcher } from "../src/core/observer/watcher.js"


export const observer_watcher = 1
// export function observer_watcher_test() {

const user = {
  name: "zhangsan",
  body: { weight: 100 },
  teacher: { math: "lisi" },
  phones: [1, 2, 3],
  scores: [{ name: "math", value: 101 }]
}

new Observer(user)
new Watcher(user, "body", { deep: false })
new Watcher(user, "teacher", { deep: true })
new Watcher(user, "phones")
new Watcher(user, (user) => {
  //JSON.stringify 会递推访问scores的子孙元素，从而让watcher挂上子孙元素内部的Dep
  console.log(JSON.stringify(user.scores))
})
// user.body.weight = 30
// user.scores.push({ name: "sport", value: 200 })
user.scores[0].value = 300
user.phones.push(4)
user.body.weight = 200
user.teacher.math = "wangwu"

// }
