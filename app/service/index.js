const Service=require('egg').Service;
class IndexService extends Service{
    getCatItems(){
        return{
            "message": [{
                "name": "分类",
                "image_src": "http://www.linweiqin.cn/img/cat1.png",
                "open_type": "switchTab",
                "navigator_url": "/pages/user/index"
              }, {
                "name": "秒杀拍",
                "image_src": "http://www.linweiqin.cn/img/cat2.png",
                "open_type": "switchTab",
                "navigator_url": "/pages/user/index"
              }, {
                "name": "超市购",
                "image_src": "http://www.linweiqin.cn/img/cat3.png",
                "open_type": "switchTab",
                "navigator_url": "/pages/user/index"
              }, {
                "name": "母婴品",
                "image_src": "http://www.linweiqin.cn/img/cat4.png",
                "open_type": "switchTab",
                "navigator_url": "/pages/user/index"
              }, {
                "name": "母婴品",
                "image_src": "http://www.linweiqin.cn/img/cat5.png",
                "open_type": "switchTab",
                "navigator_url": "/pages/user/index"
              }],
              "meta": {
                "msg": "获取成功",
                "status": 200
              }
        }
    }
}
module.exports =IndexService;