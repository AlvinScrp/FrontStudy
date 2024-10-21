// components/scroll-tab/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    tabItems: {
      type: Array,
      value: [{ text: '1sdsdsd', key: 1 }, { text: '2sdsdsd', key: 2 }]
    },
    selectKey2: 0,

  },

  /**
   * 组件的初始数据
   */
  data: {
    selectKey: 0,
    tabs: [{ text: '1sdsdsd', key: 1 }, { text: '2sdsdsd', key: 2 }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTabClick(e) {
      let newKey = e.currentTarget.dataset.key
      this.setData({ selectKey: newKey })
      this.triggerEvent('onTabClick', { key: newKey }, {})
    },
  }
})