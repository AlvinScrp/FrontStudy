// pages/goods/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    id: 0,
    pageSize: 10,
    pageNum: 0,
    list: [],
    noMoreData: false

  },

  getInfo({ pageSize, pageNum, callback }) {
    wx.request({
      url: 'https://api.hjdshop.cc/goods',
      method: 'GET',
      data: { pageSize, pageNum },
      success: (res) => {
        let goods = res.data.entry
        callback(goods)

      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let title = options.title
    console.log("title ", title)
    wx.setNavigationBarTitle({
      title: title,
    })
    wx.setNavigationBarColor({
      backgroundColor: '#000',
      frontColor: '#fff',
    })

    this.initGoods()

  },
  initGoods() {
    this.getInfo({
      pageNum: 0,
      pageSize: 10,
      callback: (goods) => {
        wx.stopPullDownRefresh()
        let newList = [...goods]
        this.setData({
          pageNum: 1,
          list: newList,
          noMoreData: false
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

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
    setTimeout(() => {
      this.initGoods()
    }, 500);

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    let pageNumNew = this.data.pageNum + 1
    console.log("onReachBottom:", pageNumNew)
    this.getInfo({
      pageNum: pageNumNew,
      pageSize: 10,
      callback: (goods) => {
        if (goods && goods.length != 0) {

          let newList = [...this.data.list, ...goods]
          this.setData({
            pageNum: pageNumNew,
            list: newList,
            noMoreData: false
          })
        } else {
          this.setData({
            noMoreData: true
          })
        }

      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})