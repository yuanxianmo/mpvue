//app.js
App({
   onLaunch: function() {
      var that = this;
      // 登录
      wx.login({
         success: res => {
            // 发送 res.code 到后台换取 openId, sessionKey, unionId
         }
      })
   },
   config: {
      staticPath: "http://192.168.1.39/mz/"
   },
   data: {
      userInfo: {}
   },
   animate: function(name, node, fn = function() {}, time = 400, minor = false) {
      var animation=wx.createAnimation();
      node.animation=animation;
      switch (name) {
         case "fadeIn":
            node.animation.opacity(1).step({
               duration: 300
            });
            break;
         case "fadeOut":
            node.animation.opacity(0).step({
               duration: 200
            });
            break;
         case "zoomIn":
            node.animation.scale(1.07).step({
               duration: 200
            });
            node.animation.scale(1).step({
               duration: 100
            });
            break;
         case "toBottom":
            node.animation.translateY('100%').step({
               duration: 200
            });
            break;
         case "toRight":
            node.animation.translateX('100%').step({
               duration: 200
            });
            break;
      }
      if (minor) {
         node.setData({
            minorAnimation: node.animation.export()
         })
      } else {
         node.setData({
            majorAnimation: node.animation.export()
         })
      }
      setTimeout(fn, time);
   }
})