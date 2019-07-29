// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getSwiperList()
  },
  // 获取轮播图数据
  getSwiperList() {
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
      success: (result) => {
        this.setData({
          swiperList:result.data.message
        })
        
     
      },
    });

  }
})