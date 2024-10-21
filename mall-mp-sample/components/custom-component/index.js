// components/custom-component/index.js
var myBehavior = require('cc-behavior')
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  externalClasses: ['class-f'],

  behaviors: [myBehavior],

  /**
   * 组件的属性列表
   */
  properties: {
    a: {
      type: String,
      value: "oldA"
    },
    b: String,
    myProperty: {
      type: String
    }

  },

  data: {
    myData: 'my-component-data',
    number1: 0,
    number2: 0,
    sum: 0,
    from: 'component'
  },
  observers: {
    'number1,number2': function (number1, number2) {
      console.log("type of number1:", (typeof number1));
      console.log("type of number2:", (typeof number2));
      this.setData({ sum: number1 + number2 })
    }
  },
  created: function () {
    console.log('[my-component] created')
  },
  attached: function () {
    this.setData({ number1: 1, number2: 2 })
    console.log('[my-component] attached')
  },
  ready: function () {
    console.log('[my-component] ready', this.data.from)
  },
  methods: {
    myMethod: function () {
      console.log('[my-component] log by myMethod')
    },
    onFirstTap() {
      var detail = { name: "sdsd", age: 33 }
      this.triggerEvent('firstClickEvent', detail, {})
    },
    changeNum1(e) {
      this.setData({ number1: e.currentTarget.dataset.num })
    },
    changeNum2(e) {
      this.setData({ number2: e.currentTarget.dataset.num })
    }
  }
})