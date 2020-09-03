//获取热映电影
function getDouBan(city, start, count, callback) {
  var dbApi;
  dbApi = "https://douban.uieee.com/v2/movie/in_theaters?city="+city+"&start="+start+"&count="+count;
  //发送请求加载信息
  wx.request({
    url: dbApi,
    header:{
      'Content-Type':'json'
    },
    success: function (res) {
      // console.log("--dbApi success--");
      // console.log(res);
      var hw = res.data;
      if (hw.total > 0) {
        callback && callback(hw);
      }
    }
  })
}
//获取待映电影
function getReYing(city, start, count, callback){
  var reApi;
  reApi = "https://douban.uieee.com/v2/movie/coming_soon?city=" + city + "&start=" + start + "&count=" + count;
  wx.request({
    url: reApi,
    header: {
      'content-type': 'json'
    },
    success: function (res) {
      // console.log("--reApi success--");
      // console.log(res);
      var hw1 = res.data;
      if (hw1.total > 0) {
        callback && callback(hw1);
      }
    }
  })
}
// 获取电影详情
function getXqYing(idnum, callback) {
  var xqApi;
  xqApi = "https://douban.uieee.com/v2/movie/subject/"+idnum;
  wx.request({
    url: xqApi,
    header: {
      'content-type': 'json'
    },
    success: function (res) {
      // console.log("success");
      // console.log(res);
      if(res.statusCode==200)
        callback && callback(res.data);
    }
  })
}
//获取同城活动信息
function getSameCity(city, callback) {
  var scApi;
  scApi = "https://douban.uieee.com/v2/event/list?loc="+city;
  wx.request({
    url: scApi,
    header: {
      'content-type': 'json'
    },
    success: function (res) {
      // console.log("success");
      //console.log(res.data);
      if (res.statusCode==200)
        callback && callback(res.data);
    }
  })
}
//搜索电影 功能暂未实现
// function searchMovie(name, callback) {
//   var scApi;
//   scApi = "https://douban.uieee.com/v2/movie/search?p=" + city;
//   wx.request({
//     url: scApi,
//     header: {
//       'content-type': 'json'
//     },
//     success: function (res) {
//       // console.log("success");
//       //console.log(res.data);
//       if (res.statusCode == 200)
//         callback && callback(res.data);
//     }
//   })
// }
module.exports = {
  getDouBan: getDouBan,
  getReYing: getReYing,
  getXqYing: getXqYing,
  getSameCity: getSameCity
};