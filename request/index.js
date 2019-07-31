export const request = (params) =>{
    const baseUrl="http://api.zbztb.cn/api/public/v1"
    return new Promise((reslove,reject)=>{
        wx.request({ 
            ...params, 
            url: baseUrl + params.url, 
            success: (res) => { 
              reslove(res.data.message); 
            }, 
            fail: (error) => { 
              reject(error); 
            } 
          }); 
    })
}