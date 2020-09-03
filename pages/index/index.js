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

  },
  zbview:function(){
    wx.navigateTo({
      url: '../event/event',
    })
  },
  buytic:function(){
    wx.navigateTo({
      url: '../tickey/tickey',
    })
  },
  hotel:function(){
    wx.navigateTo({
      url: '../hotel/hotel',
    })
  }
})