// pages/process/process.js
Page({
  data: {
    lists: []
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    for (var i = 0; i < 3; i++) {
      this.setData({
        lists: this.data.lists.concat({ title: '第' + i + '步', state: 'no' })
      })
    }
    for (var e = 7; e < 12; e++) {
      this.setData({
        lists: this.data.lists.concat({ title: '第' + e + '步', state: 'yes' })
      })
    }

  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})