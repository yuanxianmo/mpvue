// pages/shop/detail/detail.js
var app = getApp();
Page({

   /**
    * 页面的初始数据
    */
   data: {
      images: ["http://192.168.1.39/mz/images/demo2.jpg", "http://192.168.1.39/mz/images/demo2.jpg", "http://192.168.1.39/mz/images/demo2.jpg"],
      config: getApp().config,
      content: "detail",
      coverMode: "none"
   },
   setContent: function(e) {
      this.setData({
         content: e.target.dataset.page
      });
   },
   showSelect: function(e) {
      this.setData({
         coverMode: e.currentTarget.dataset.select
      });
   },
   hideSelect: function() {
      app.animate("fadeOut", this, function() {
         this.setData({
            coverMode: "none",
            majorAnimation: null
         });
      }.bind(this), 200);
      app.animate("toBottom", this, function() {
         this.setData({
            coverMode: "none",
            minorAnimation: null
         });
      }.bind(this), 200, true);
   },
   buyNow:function(){
      wx.navigateTo({
         url: '/pages/order/confirm/confirm'
      })
   },
   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function(options) {},

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