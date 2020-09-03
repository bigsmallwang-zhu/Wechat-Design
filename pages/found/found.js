// pages/found/found.js
var fouList=require("../../utils/foudata.js");
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
    this.setData({ fouList: fouList.fouList});
    console.log(this.data.fouList);
  }
})