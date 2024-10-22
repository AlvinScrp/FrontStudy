// pages/home/index.js
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../store/index'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    infos: [1, 2, 3, 4, 5, 6, 7],
    banners: [],
    tools: [],
    custom: {
      pa: "papa",
      pb: "pbpb"
    }

  },

  onSelectComponetClick() {
    const child = this.selectComponent(".c-c");
    console.log(child);
    const child2 = this.selectComponent("#c-c-id");
    console.log(child2);
  },
  onFirstClick(e) {
    console.log("onFirstClick:", e.currentTarget.dataset.index)
    console.log("onFirstClick:", e.detail)
  },
  async getInfo() {
    const { data: bannerData } = await wx.p.request({
      url: 'https://api.hjdshop.cc/banners',
      method: 'POST',
      data: {
        name: "a1",
        age: 1022
      }
    })
    const { data: toolsData } = await wx.p.request({
      url: 'https://api.hjdshop.cc/tools',
      method: 'POST',
      data: {
        name: "a",
        age: 102
      }
    })
    this.setData({
      banners: bannerData.entry.banner,
      tools: toolsData.entry.tools
    })
  },

  onToolClick(e) {
    let tool = e.currentTarget.dataset.tool
    console.log(tool)
    wx.navigateTo({
      url: `/pages/goods/index?title=${tool.name}&id=${tool.id}`,

    })

  },
  navigateIndex() {
    // wx.navigateTo({
    //   url: '/pages/info/index',
    // })
    wx.switchTab({
      url: '/pages/contact/index',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.storeBindings = createStoreBindings(this, {
      store,
      actions: ['updateNum2']
    })
  },

  btnHandler(e) {
    this.updateNum2(e.target.dataset.step)
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log("home onReady");
    this.getInfo()

  },

  onShow() {
    console.log("home onShow");
    this.getTabBar().init();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

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