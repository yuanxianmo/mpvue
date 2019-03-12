//index.js
//获取应用实例
const app = getApp()
Page({
   data: {
      userInfo: {},
      config: app.config,
      code: "aaa"
   },
   //事件处理函数
   bindViewTap: function() {
      wx.navigateTo({
         url: '../logs/logs'
      })
   },
   onLoad: function() {
      var that = this;
      this.setData({
         "route": this.route
      });
      wx.login({
         success(res) {
            console.log(res.code)
         }
      });
   }
})