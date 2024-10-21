// app.js
import { promisifyAll } from 'miniprogram-api-promise'
const wxp = wx.p = {}

promisifyAll(wx, wxp)

App({
  onLaunch: function () {
    console.log("ONL");
  },
  onShow: function (options) {
    console.log("onShow:", options)
  },
  onHide: function () {
    console.log("onHide")
  }
})
