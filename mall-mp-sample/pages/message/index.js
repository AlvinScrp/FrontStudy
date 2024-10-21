// pages/message/index.js
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../store/index'
import { reaction } from 'mobx-miniprogram'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  observers: {
    'numA': function (numA) {
      console.log("observer numA:", numA);
    }
  },

  /**
  * 生命周期函数--监听页面加载
  */
  onLoad(options) {
    console.log("message page onLoad");
    this.storeBindings = createStoreBindings(this, {
      store,
      fields: ["numA", "numB", "sum"],
      actions: ['updateNum1']
    })
    reaction(
      () => store.numA,
      (numA, reaction) => {
        console.log(`messagePage numA 变化  -> ${numA} ${this.data.numA}`);

      }
    )
  },
  btnHandler(e) {
    this.updateNum1(e.target.dataset.step)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log("message page onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log("message page onShow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log("message page onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log("message page onUnload");
    this.storeBindings.destroyStoreBindings();
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})