// pages/home/index.js
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../store/index'
import { fetchHome } from '../../services/home/home';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    avatar: "",
    searchKeys: ['iphone 16 火热发售中', '你好朋友', '搜一搜 有好东西'],
    banners: [],
    tabItems: [],
    tabIndex: 0,
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
        tabItems: tabList,
        banners: swiper,
        pageLoading: false,
      });
      // this.loadGoodsList(true);
    });

  },

  onTabClick(e) {
    console.log("onTabClick ", e.detail.key);
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.storeBindings = createStoreBindings(this, {
      store,
      actions: ['updateNum2']
    })
    const app = getApp();
    this.setData({ avatar: app.globalData.avatar })
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