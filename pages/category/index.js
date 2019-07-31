import {
  request
} from "../../request/index.js"
Page({
  data: {
    leftMenuList: [],
    rightMenuList: [],
    currentIndex:0,
    scrollTop:0
  },
  resData:[],
  onLoad: function (options) {
    this.getGoodsData()
  },
  getGoodsData(){
    request({
      url:"/categories"
    }).then(res=>{
      this.resData=res
      console.log(this.resData);
      let leftMenuList = res.map(v => ({
        cat_name: v.cat_name, cat_id: v.cat_id 
      }))
      let rightMenuList =  this.resData[0].children; 
      this.setData({
        leftMenuList,
        rightMenuList
      })
    })
  },
  hanrdleIndex(e){
    let {index}=e.currentTarget.dataset
    let rightMenuList=this.resData[index].children
    this.setData({
      currentIndex:index,
      rightMenuList,
      scrollTop:0
    })
  }
})