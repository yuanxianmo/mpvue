// pages/order/confirm/confirm.js
var app = getApp();
Page({

   /**
    * 页面的初始数据
    */
   data: {
      address: {},
      coverMode: "none",
      majorAnimation: null,
      minorAnimation: null
   },
   chooseAddress: function() {
      var that = this;
      wx.chooseAddress({
         success: function(res) {
            that.setData({
               address: res
            });
         }
      })
   },
   coverMode: function(e) {
      this.setData({
         coverMode: e.currentTarget.dataset.mode
      });
      wx.navigateTo({
         url: '#',
      })
   },
   hideSelect: function() {
      app.animate("toRight", this, function() {
         this.setData({
            coverMode: "none",
            majorAnimation: null
         });
      }.bind(this), 200);
   },
   friendPay: function() {
      wx.navigateTo({
         url: '/pages/order/friendPay/friendPay?id=3',
      })
   },
   wxPay: function() {
      wx.navigateTo({
         url: '/pages/order/paySuccess/paySuccess',
      })
   },
   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function(options) {

   },

   /**
    * 生命周期函数--监听页面初次渲染完成
    */
   onReady: function() {

   },

   /**
    * 生命周期函数--监听页面显示
    */
   onShow: function() {

   },

   /**
    * 生命周期函数--监听页面隐藏
    */
   onHide: function() {

   },

   /**
    * 生命周期函数--监听页面卸载
    */
   onUnload: function() {

   },

   /**
    * 页面相关事件处理函数--监听用户下拉动作
    */
   onPullDownRefresh: function() {

   },

   /**
    * 页面上拉触底事件的处理函数
    */
   onReachBottom: function() {

   },

   /**
    * 用户点击右上角分享
    */
   onShareAppMessage: function() {

   }
})