import {
  request
} from "../../request/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    categoryList: [],
    goodsList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getSwiperList(),
      this.getCategoryList(),
      this.getGoosList()
  },
  // 获取轮播图数据
  getSwiperList() {
    request({
        url: '/home/swiperdata'
      })
      .then(res => {
        this.setData({
          swiperList: res
        })
      })
  },
  // 分类导航菜单数据
  getCategoryList() {
    request({
      url: '/home/catitems'
    })
    .then(res => {
      this.setData({
        categoryList: res
      })
    })
  },
  getGoosList() {
      request({
        url: '/home/floordata'
      })
      .then(res => {
        this.setData({
          goodsList: res
        })
      })
  }
})