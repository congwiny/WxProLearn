Page({
  data:{
    // text:"这是一个页面"
    articleId:null
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log('logs onLoad');
    console.log(options);
    this.setData({articleId:options.ids});
  },
  onReady:function(){
    // 页面渲染完成
    console.log('logs onReady');
  },
  onShow:function(){
    // 页面显示
    console.log('logs onShow');
  },
  onHide:function(){
    // 页面隐藏
    console.log('logs onHide');
  },
  onUnload:function(){
    // 页面关闭
    console.log('logs onUnload');
  }
})