// pages/tor/tor.js
var tors = require("../../utils/datators.js");
var pertors = require("../../utils/othertors.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sethid: true,
    currentTab: '',
    value: '',
    tabItemsArray: [{ name: '团导' }, { name: '私导' }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ tors: tors.torsList, pertors: pertors.otherList});
    console.log(this.data.tors);
    console.log(this.data.pertors);
  },

  // 搜索框隐藏
  sethidden: function () {
    this.setData({
      sethid: false,
    });
  },
  // 搜索按钮事件
  soupat: function (e) {

  },
  // 输入框内容
  showinput: function (e) {
    this.setData({
      value: e.detail.value
    });
    console.log(this.data.value);
  },

  // 取消搜索按钮
  btmhid: function (e) {
    this.setData({
      sethid: true,
    });
  },

  swichNav: function (e) {
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      this.setData({
        currentTab: e.target.dataset.current,
      })
    };
  }
})