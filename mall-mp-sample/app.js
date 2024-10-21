// app.js
import { promisifyAll } from 'miniprogram-api-promise'
const wxp = wx.p = {}

promisifyAll(wx, wxp)

App({
  globalData: {
    avatar: "https://cdn.webuy.ai/base-service-webserver/127128329/assets/img/2024/07/27/84324501-a4bc-412a-a8c4-c9525382e2bd__191KB____size800x800.jpg"
  },
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
