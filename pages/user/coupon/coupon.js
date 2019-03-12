// pages/user/coupon/coupon.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      dynBorder: {
         left: 0,
         width: "0"
      },
      showPayType: false,
      data: {
         animationData: {}
      }
   },
   switch: function(v) {
      var v = v.target.dataset.index == undefined ? v.detail.current : v.target.dataset.index;
      var $ = wx.createSelectorQuery();
      $.selectAll(".switch .item").boundingClientRect();
      $.exec(function(res) {
         this.setData({
            "dynBorder.left": res[0][v].left + "px",
            "dynBorder.width": res[0][v].width + "px"
         });
      }.bind(this));
      this.setData({
         current: v
      });
   },
   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function(options) {
      var that = this;
      this.setData({
         current: that.options.type == undefined ? 0 : that.options.type
      });
      this.switch({
         target: {
            dataset: {
               index: that.data.current
            }
         }
      });
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