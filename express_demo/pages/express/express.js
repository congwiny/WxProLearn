Page({
  data:{
    // text:"这是一个页面"
    eno:null,
    expressInfo:null
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
  queryExpress:function(expressNo,callback){
      wx.request({
        url: 'http://q.kdpt.net/api?id=testkey&com=auto&nu='+expressNo+'&show=json&order=desc&format=kuaidi100',
        data: {
            x: '' ,
            y: ''
        },
        header: {
            'Content-Type': 'application/json'
        },
        success: function(res) {
            //调用回调方法
            callback(res.data);
        }
    })
  },
  clickQuery:function(){
      var thisPage = this;
      this.queryExpress(this.data.eno,function(data){
          //输出数据
          thisPage.setData({expressInfo:data})
          console.log(data);
      });
  },
  inputEno:function(event){
      //console.log(event.detail.value);
      this.setData({eno:event.detail.value});
  }
})