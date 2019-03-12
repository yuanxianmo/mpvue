// modules/confirm/confirm.js
var app = getApp();
Component({
   /**
    * 组件的属性列表
    */
   properties: {
      text: {
         type: String,
         value: "确定进行此操作？"
      },
      cancelText: {
         type: String,
         value: "取消"
      },
      okText: {
         type: String,
         value: "确定"
      },
   },

   /**
    * 组件的初始数据
    */
   data: {
      majorAnimation: {},
      minorAnimation: {}
   },

   /**
    * 组件的方法列表
    */
   methods: {
      cancelFn: function() {
         this.triggerEvent("close");
      },
      okFn: function() {
         this.triggerEvent("ok");
      },
      hide: function() {
         app.animate("fadeOut", this, function() {
            this.triggerEvent("hide");
         }.bind(this), 300);
      },
      noop: function() {}
   },
   ready: function() {
      var animation = wx.createAnimation()
      this.animation = animation;
   }
})