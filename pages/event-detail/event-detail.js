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
    _this.setData({id:options.id});
    douban.getSameCity('guangzhou', function (edscList) {
      _this.setData({
        edscList: edscList
      });
    });
  },
})