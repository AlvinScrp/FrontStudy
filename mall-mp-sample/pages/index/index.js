// index.js
Page({
  data: {
    info: 'init data',
    msgList: [{ id: 121, msg: "hello" }, { id: 122, msg: "world" }],
    imageUrl: 'https://cdn.webuy.ai/message/assets/img/2024/10/16/b61a88b3-c08a-4398-8991-e62e7655b2ce__666KB____size750x1090.png',
    random: Math.random() * 10,
    randomInfo: '',
    inputText: 'init value',
    inputTextCopy: ''
  },
  onLoad() {
    console.log("onload");
  },
  tabMsg(e) {
    console.log("tabMsg:", e.currentTarget)
  },
  /**
   * 返回[0-10)小数
   */
  random(e) {
    console.log("sdsd: ", e.currentTarget.dataset.infoTd)
    console.log(e);
    let value = Math.random() * 10
    console.log(value);
    this.setData({ random: value, randomInfo: e.currentTarget.dataset.infoTd })
  },
  handlerInput(e) {
    console.log("input:", e);
    this.setData({ inputTextCopy: e.detail.value })
  }

}


)
