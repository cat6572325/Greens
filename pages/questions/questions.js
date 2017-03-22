var util = require('../../utils/util.js')
Page({
  data: {
    inputOfvalue: '',
    toView: 1,
    lists: [],
    sliders: 0,
    stora: [],
  },
  onLoad: function (options) {

    for (var i = 0; i < 10; i++)
      this.setData({
        lists: this.data.lists.concat({ id: util.formatTostr(i.toString()), title: util.formatTostr(i.toString()) })
      })
    for (var e = 0; e < 10; e++) {
      this.setData({
        stora: this.data.stora.concat({ src: 'https://img.alicdn.com/bao/uploaded/i4/TB1481EQXXXXXXyXXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg', title: 'Intel/英特尔 i5-6500 LGA1151 中文盒装处理器 酷睿i5第6代CPU' })

      })
    }
  },

  // sliderchange: function (e) {
  //   util.formatTostr(e.detail.value.toString(), (backData) => {
  //     this.setData({
  //       toView: backData,
  //       sliders: e.detail.value
  //     })
  //   })
  // },
  scroll_change: function (e) {
    this.setData({
      sliders: e.detail.value
    })
  },
  inputYes: function (e) {
    this.data.lists.map((data) => {
      if (data.title == e.detail.value) {
        this.setData({
          toView: data.id,
          sliders: e.detail.value,
          inputOfvalue: ''
        })
      }
    })
  }, item_click: function () {
  }
})