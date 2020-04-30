'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async getCatItems() {
    const { ctx } = this;
    ctx.body =ctx.service.index.getCatItems();
  }
  async getFloorData() {
    const { ctx } = this;
    ctx.body ={
      "message": [{
        "floor_title": {
          "name": "时尚服装",
        },
        "product_list": [{
          "name": "服饰",
          "image_src": "http://www.linweiqin.cn/img/floor1.jpg",
          "open_type": "navigate",
          "navigator_url": "/pages/goodsList/index?query=服饰"
        }, {
          "name": "服饰",
          "image_src": "http://www.linweiqin.cn/img/floor2.jpg",
          "open_type": "navigate",
          "navigator_url": "/pages/goodsList/index?query=服饰"
        }, {
          "name": "服饰",
          "image_src": "http://www.linweiqin.cn/img/floor3.jpg",
          "open_type": "navigate",
          "navigator_url": "/pages/goodsList/index?query=服饰"
        }, {
          "name": "服饰",
          "image_src": "http://www.linweiqin.cn/img/floor4.jpg",
          "open_type": "navigate",
          "navigator_url": "/pages/goodsList/index?query=服饰"
        }, {
          "name": "服饰",
          "image_src": "http://www.linweiqin.cn/img/floor5.jpg",
          "open_type": "navigate",
          "navigator_url": "/pages/goodsList/index?query=服饰"
        }, {
          "name": "服饰",
          "image_src": "http://www.linweiqin.cn/img/floor6.jpg",
          "open_type": "navigate",
          "navigator_url": "/pages/goodsList/index?query=服饰"
        }]
      }],
      "meta": {
        "msg": "获取成功",
        "status": 200
      }
    } ;
  }
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async getSwiperList() {
    const { ctx } = this;
    ctx.body ={
      "message": [{
        "image_src": "http://www.linweiqin.cn/img/banner1.jpg",
        "goods_id": 1229,
      }, {
        "image_src": "http://www.linweiqin.cn/img/banner2.jpg",
        "goods_id": 3295,
      }, {
        "image_src": "http://www.linweiqin.cn/img/banner3.jpg",
        "goods_id": 382,
      }],
      "meta": {
        "msg": "获取成功",
        "status": 200
      }
    };
  }

}

module.exports = HomeController;
