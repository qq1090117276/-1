import {
  request
} from "../../request/index.js"
Page({
  data: {
    leftMenuList: [],
    rightMenuList: [],
    currentIndex:0
  },
  onLoad: function (options) {
    this.getGoodsData()
  },
  getGoodsData(){
    request({
      url:"/categories"
    }).then(res=>{
      let rightMenuList=res[0].children
      let leftMenuList = res.map(v => ({
        cat_name: v.cat_name, cat_id: v.cat_id 
      }))
      this.setData({
        leftMenuList,
        rightMenuList
      })
    })
  },
  hanrdleIndex(e){
    this.setData({
      currentIndex:e.currentTarget.dataset.index
    })
  }
})