// pages/tickey/tickey.js
var views = require("../../utils/datajson.js");
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
    this.setData({ views: views.local_data });
  },
  showView:function(e){
    wx.navigateTo({
      url: '../view/view?id=' + e.target.dataset.id,
    })
  }
})