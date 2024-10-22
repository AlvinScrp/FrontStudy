// pages/home/index.js
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../store/index'
import { fetchHome } from '../../services/home/home';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgSrcs: [],
    tabList: [],
    goodsList: [],
    goodsListLoadStatus: 0,
    pageLoading: false,
    current: 1,
    autoplay: true,
    duration: '500',
    interval: 5000,
    navigation: { type: 'dots' },
    swiperImageProps: { mode: 'scaleToFill' },

  },


  async getInfo() {
    fetchHome().then(({ swiper, tabList }) => {
      this.setData({
        tabList,
        imgSrcs: swiper,
        pageLoading: false,
      });
      // this.loadGoodsList(true);
    });

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