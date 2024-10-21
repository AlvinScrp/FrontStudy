// pages/info/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  navBack() {
    wx.navigateBack()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
 console.log("info page onLoad");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log("info page onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log("info page onShow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log("info page onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log("info page onUnload");
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