var app = getApp()
Page({
  data:{
    winWidth: '',
    winHeight: '',
    array: ['男', '女'],
    index: 0,
    old: '',
  },
  onLoad:function(options){
     wx.getSystemInfo({
      success: (res) => {
        this.setData(
          {
            winWidth: res.windowWidth,
            winHeight: res.windowHeight,
          });
      }
    })
  },
  onShow: function()
  {
    this.setData({
      old: app.globalData.old + ' (' + app.globalData.day + ')'
    })
    wx.setStorageSync('old', this.data.old)
  },
  itinput: function(e)
  {
    wx.setStorageSync('name', e.detail.value)
  },
  ToSetOld: function(event)
  {
    wx.navigateTo({url: '/pages/index/index'})
  },
  sexChange: function(e)
  {
    this.setData({
      index: e.detail.value
    })
    wx.setStorageSync('sex', e.detail.value)
  },
  sure_click: function(e)
  {
    
  }
})