import { observable, action, reaction } from 'mobx-miniprogram'

// observable 的返回值就是 store 对象
export const store = observable({
  // 需要挂载的数据 -- 数据字段
  numA: 1,
  numB: 3,
  name: "kk",
  // 计算属性 -- get为修饰符
  get sum() {
    return this.numA + this.numB;
  },
  // actions 函数，专门来修改 store 中数据的值
  updateNum1: action(function (step) {
    this.numA += step;
  }),
  updateNum2: action(function (step) {
    this.numB += step;
  }),
  updateName: action(function (name) {
    this.name = name;
  })
})
reaction(
  () => store.sum,
  (sum, reaction) => {
    console.log(`sum 变化 -> ${sum}`);
  }
)
reaction(
  () => store.numA,
  (numA, reaction) => {
    console.log(`numA 变化 -> ${numA}`);
  }
)
