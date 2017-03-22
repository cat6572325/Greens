var app = getApp()
const date = new Date()
const olds = []
const days = []
for (var y = 0; y < 7; y++) {
  olds.push(y + '岁')
}
for (var i = 1; i < 365; i++) {
  days.push(i + '天')
}
Page({
  data: {
    olds: olds,
    days: days,

    old: olds[0],
    day: ''
  },

  oldChange: function (e) {
    const val = e.detail.value
    this.setData({
      old: this.data.olds[val[0]] ,
      day: this.data.days[val[1]],
    })
    app.setOld(this.data.old,this.data.day)
  },

})