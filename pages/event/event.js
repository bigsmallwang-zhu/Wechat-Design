var douban = require("../../cityact/cityact.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this=this;
    douban.getSameCity('guangzhou',function(scList){
      _this.setData({
        scList: scList
      });
    });
  },
  showCityMess:function(e){
    this.setData({idx:e.currentTarget.dataset.idx});
    var tdsel = this.data.scList.events;
    wx.navigateTo({
      url: '../event-detail/event-detail?id='+this.data.idx,
    })
  }
})