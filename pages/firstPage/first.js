Page({
  data:{
     text:"这是一个页面",
     textBtn:"花花花",
     show:true,
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  clickBtn:function(){
    var isShow = this.data.show;
    console.log("click is show="+isShow);
    this.setData({
      text:"小宇小宇",
      show:!isShow,
    })
  },
  view1Click:function(event){
    console.log("click view1");
    console.log(event);
  },
   view2Click:function(){
    console.log("click view2");
  },
   view3Click:function(event){
    console.log("click view3");
    console.log(event);
  }
})