const app = getApp();
Page({
  data:{
    cid : 0
  },
  onLoad: function(options){
    this.Global = app.Global;
    this.Api = this.Global.Api;
  },
  onShow : function() {
    this.getData();
  },
  onClear : function() {
    this.setData({
      kw : ''
    });
    this.getData();
  },
  getData : function() {
    this.Global.getUser().then(obj=>{
      this.Api.subList({
        uid : obj.id,
        user_type : 0,
        kw : this.data.kw || ''
      }).then(obj=>{
        this.setData({
          list : obj
        })
      })
    })
  },
  //带看
  goGenjin: function(e) {
    var item = e.currentTarget.dataset.item;
    this.Global.WxService.navigateTo('/pages/baobei/daikan?id=' + item.id);
  },
  //去详情
  goDetail : function(e) {
    var item = e.currentTarget.dataset.item;
    this.Global.WxService.navigateTo('/pages/baobei/order?id=' + item.id);
  },
  onSearch : function(e) {
    var kw = e.detail;
    this.setData({
      kw : kw
    });
    this.getData();
  },
  changeCid : function(e) {
    var cid = e.currentTarget.dataset.index;
    this.setData({
      cid : cid
    });
  }
})
