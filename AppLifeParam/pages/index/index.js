Page({
  data:{
    // text:"这是一个页面"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log('index onLoad');
  },
  onReady:function(){
    // 页面渲染完成
    console.log('index onReady');
  },
  onShow:function(){
    // 页面显示
    console.log('index onShow');
  },
  onHide:function(){
    // 页面隐藏
    console.log('index onHide');
  },
  onUnload:function(){
    // 页面关闭
    console.log('index onUnload');
  },
  clickArticle1:function(){
    wx.navigateTo({//跳转到logs页面，index页面会调用onHide方法，并且在logs页面有返回按钮
      url:'../logs/logs?ids=1'
    });

    // wx.redirectTo({ //跳转到logs页面，index页面会调用onUnload方法（页面被卸载）；并且在logs页面没有返回按钮
    //   url:'../logs/logs'
    // });
  }
})