var app      = getApp();
var qmap = require('../../libs/qqmap-wx-jssdk.js');
var wxMarkerData = []; 

var openid = ''

var pageData = {
  data: {
  	"swiper":{
  		"type":"carousel",
      "style":"height:500.4375rpx;margin-left:auto;margin-right:auto;margin-top:0;opacity:1;",
  		"content":[{
  			"customFeature":[],
  			"pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5a602a74da515.jpg",
  			"content":"",
        "parentCompid":"swiper",
        "style":"",
        "openid":"",
        "lat":0,
        "lng":0,
        "like_num":"",
        "comment_num":"",
        "timestamp":"",
        "pid":""
  		},{
  			"customFeature":[],
        "pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5a602a7511171.jpg",
  			"content":"",
        "parentCompid":"swiper",
        "style": "",
        "openid": "",
        "lat": 0,
        "lng": 0,
        "like_num": "",
        "comment_num": "",
        "timestamp": "",
        "pid": ""
  		}],
  		"customFeature":{
  			"autoplay":true,
  			"interval":2,
  			"carouselgroupId":"668825"
  		},
  		"animations":[],
  		"page_form":"",
      "compId":"swiper"
  	},
  	"album2":{
  		"style":"background-color:rgba(0, 0, 0, 0);font-size:23.4375rpx;margin-top:28.125rpx;opacity:1;text-align:center;margin-left:auto;",
  		"ul_style":"padding-left:7.03125rpx;padding-top:7.03125rpx;margin-left:auto;",
  		"html_mode":"",
  		"li":[{
  			"action":"",
  			"li_class":"album-pic",
  			"pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5a602a74da515.jpg",
  			"title":"\u4e00\u8d77\u6765\u64b8\u732b\uff01\uff01",
  			"li_style":"width:240.62500000001rpx;margin-right:7.03125rpx;margin-bottom:7.03125rpx;margin-left:auto;",
        "img_style": "height:328.125rpx;margin-left:auto;",
        "openid": "",
        "lat": 0,
        "lng": 0,
        "like_num": "",
        "comment_num": "",
        "timestamp": "",
        "pid": ""
  		},{
  			"action":"",
  			"li_class":"album-pic",
  			"pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5a602a7511171.jpg",
  			"title":"\u672a\u540d\u6e56\u51b0\u573a43\u7801\u4ee5\u4e0a\u7684\u978b\u90fd\u6709\u95ee\u9898\u554a\u540c\u5b66\u4eec\uff0c\u4e0d\u8981\u6765\u501f\ud83d\ude43",
  			"li_style":"width:240.62500000001rpx;margin-right:7.03125rpx;margin-bottom:7.03125rpx;margin-left:auto;",
        "img_style": "height:328.125rpx;margin-left:auto;",
        "openid": "",
        "lat": 0,
        "lng": 0,
        "like_num": "",
        "comment_num": "",
        "timestamp": "",
        "pid": ""
  		},{
  			"action":"","li_class":"album-pic",
  			"pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5a602a7528421.jpg",
  			"title":"\u535a\u96c5\u5854\u706f\u4eae\u4e86~~",
  			"li_style":"width:240.62500000001rpx;margin-right:7.03125rpx;margin-bottom:7.03125rpx;margin-left:auto;",
        "img_style": "height:328.125rpx;margin-left:auto;",
        "openid": "",
        "lat": 0,
        "lng": 0,
        "like_num": "",
        "comment_num": "",
        "timestamp": "",
        "pid": ""
  		},{
  			"action":"",
  			"li_class":"album-pic",
  			"pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5a602a75d116f.jpg",
  			"title":"\u51b0\u573a\u4eba\u597d\u591a\u3002\u3002",
  			"li_style":"width:240.62500000001rpx;margin-right:7.03125rpx;margin-bottom:7.03125rpx;margin-left:auto;",
        "img_style": "height:328.125rpx;margin-left:auto;",
        "openid": "",
        "lat": 0,
        "lng": 0,
        "like_num": "",
        "comment_num": "",
        "timestamp": "",
        "pid": ""
  		},{
  			"action":"",
  			"li_class":"album-pic",
  			"pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5a602a75dce33.jpg",
        "title":"这人6的不行啊~~~这人6的不行啊~~~这人6的不行啊~~~这人6的不行啊~~~这人6的不行啊~~~这人6的不行啊~~~这人6的不行啊~~~这人6的不行啊~~~这人6的不行啊~~~这人6的不行啊~~~这人6的不行啊~~~这人6的不行啊~~~这人6的不行啊~~~这人6的不行啊~~~这人6的不行啊~~~这人6的不行啊~~~这人6的不行啊~~~这人6的不行啊~~~这人6的不行啊~~~",
  			"li_style":"width:240.62500000001rpx;margin-right:7.03125rpx;margin-bottom:7.03125rpx;margin-left:auto;",
        "img_style": "height:328.125rpx;margin-left:auto;",
        "openid": "",
        "lat": 0,
        "lng": 0,
        "like_num": "",
        "comment_num": "",
        "timestamp": "",
        "pid": ""
  		},{
  			"action":"none",
  			"li_class":"album-pic",
  			"pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5a602a760c253.jpg",
  			"title":"\u55b5\u55b5\u7761\u89c9\u89c9(\uff61\uff65\u03c9\uff65)\uff89\uff9e",
  			"li_style":"width:240.62500000001rpx;margin-right:7.03125rpx;margin-bottom:7.03125rpx;margin-left:auto;",
        "img_style": "height:328.125rpx;margin-left:auto;",
        "openid": "",
        "lat": 0,
        "lng": 0,
        "like_num": "",
        "comment_num": "",
        "timestamp": "",
        "pid": ""
  		}],
  		"itemType":"album",
  		"itemParentType":null,
  		"itemIndex":"album2",
  		"content":""
  	},
  	"has_tabbar":1,
  	"page_hidden":true,
  	"page_form":"",
  	"top_nav":{
  		"navigationBarBackgroundColor":"#000000",
  		"navigationBarTextStyle":"white",
  		"navigationBarTitleText":"\u70ed\u56fe"
  	}},
    need_login: false,
    page_router: 'index',
    page_form: 'none',
      list_compids_params: [],
      user_center_compids_params: [],
      goods_compids_params: [],
  prevPage:0,
      tostoreComps: [],
      carouselGroupidsParams: [{"compid":"carousel1","carouselgroupId":"668825"}],
      relobj_auto: [],
      bbsCompIds: [],
      dynamicVesselComps: [],
      communityComps: [],
      franchiseeComps: [],
      cityLocationComps: [],
      seckillOnLoadCompidParam: [],
      dynamicClassifyGroupidsParams: [],
      videoListComps: [],
      videoProjectComps: [],
      returnToVersionFlag: true,
  requesting: false,
  requestNum: 1,
  modelChoose: [],
  modelChooseId: '',
  modelChooseName: [],

  onLoad: function (e) {
    //获取用户openID
    wx.login({
      success: function (res) {
        var logcode = res.code
        //获取用户其他信息
        wx.getUserInfo({
          success: function (res) {
            var userInfo = res.userInfo
            var name = userInfo.nickName
            var avatar = userInfo.avatarUrl
            console.log(name)
            console.log(avatar)
            //上传新用户
            wx.request({
              url: 'https://www.katouspace.com/table_user.php?method=insert&logcode=' + logcode + '&avatar=' + avatar + '&name=' + name,
              data: {},
              method: 'GET',
              success: function (res) {
                // success
                // 获取openID
                app.userdata.openid = res.data.openid
                console.log(app.userdata.openid)
              },
              fail: function () {
                // fail
              },
              complete: function () {
                // complete
              }
            })
          },
          fail: function (res) {
            wx.showModal({
              title: '提示',
              content: '获取用户信息失败，这将影响您使用小程序，是否重新设置授权？',
              showCancel: true,
              cancelText: "否",
              confirmText: "是",
              success: function (res) {
                if (res.confirm) {
                  wx.openSetting({
                    success: function (res) {
                      if (res.authSetting['scope.userInfo'] === true) {
                        that._requestUserWxInfo(options);
                      }
                    }
                  })
                } else if (res.cancel) {
                  console.log('用户取消授权个人信息');
                  typeof options.fail == 'function' && options.fail();
                }
              }
            })
          }
        })
      },
      fail: function (res) {
        wx.showModal({
          title: '提示',
          content: '获取用户信息失败，这将影响您使用小程序，是否重新设置授权？',
          showCancel: true,
          cancelText: "否",
          confirmText: "是",
          success: function (res) {
            if (res.confirm) {
              wx.openSetting({
                success: function (res) {
                  if (res.authSetting['scope.userInfo'] === true) {
                    that._requestUserWxInfo(options);
                  }
                }
              })
            } else if (res.cancel) {
              console.log('用户取消授权个人信息');
              typeof options.fail == 'function' && options.fail();
            }
          }
        })
      }
    })
    app.onPageLoad(e);
  },

  dataInitial: function () {
    app.pageDataInitial();
  },
  //图片上传
  clickPicUpBtn: function (e) {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        wx.navigateTo({
          url: '../update/update?pic=' + tempFilePaths,
        })
      }
    })
  },
  //下拉刷新
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
    //刷新后操作（内容刷新代码预留）
    wx.showModal({
      title: '刷新操作监控',
      content: '刷新成功',
    })
  },
  onShareAppMessage: function (e) {
    return app.onPageShareAppMessage(e);
  },
  onShow: function () {
    var that = this
    var qqmapsdk = new qmap({
      key: 'EECBZ-OAH3X-H3G4Y-7UQA6-HMN7F-PNB3D'
    });
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: function (addressRes) {
            /*
            wx.showModal({
              title: '经纬度（腾讯）',
              content: addressRes.result.formatted_addresses.recommend + ', ' + res.latitude + ', ' + res.longitude,
            })
            */
            wx.setNavigationBarTitle({
              title: addressRes.result.formatted_addresses.recommend,
            })
          }
        })
      }
    })
    // 获取图片内容数据，配置文字图片
    wx.request({
      url: 'https://www.katouspace.com/table_publish.php?method=select_lid_time&lid=1',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        var len = res.data.length - 1
        // success
        console.log(res.data)
        for (var i = 0; i < 7; i++) {
          if (i === 0) {
            that.setData({
              "swiper.content[0].pic": res.data[i].picURL,
              "swiper.content[0].pid": res.data[i].Pid,
              "swiper.content[0].timestamp": res.data[i].upload_time,
              "swiper.content[0].comment_num": res.data[i].comment_num,
              "swiper.content[0].like_num": res.data[i].like_num,
              "swiper.content[0].lat": res.data[i].lat,
              "swiper.content[0].lng": res.data[i].lng,
              "swiper.content[0].openid": res.data[i].openID,
              "album2.li[0].pic": res.data[i].picURL,
              "album2.li[0].title": res.data[i].detail_text,
              "album2.li[0].pid": res.data[i].Pid,
              "album2.li[0].timestamp": res.data[i].upload_time,
              "album2.li[0].comment_num": res.data[i].comment_num,
              "album2.li[0].like_num": res.data[i].like_num,
              "album2.li[0].lat": res.data[i].lat,
              "album2.li[0].lng": res.data[i].lng,
              "album2.li[0].openid": res.data[i].openID
            })
          }
          else if (i === 1) {
            that.setData({
              "swiper.content[1].pic": res.data[i].picURL,
              "swiper.content[1].pid": res.data[i].Pid,
              "swiper.content[1].timestamp": res.data[i].upload_time,
              "swiper.content[1].comment_num": res.data[i].comment_num,
              "swiper.content[1].like_num": res.data[i].like_num,
              "swiper.content[1].lat": res.data[i].lat,
              "swiper.content[1].lng": res.data[i].lng,
              "swiper.content[1].openid": res.data[i].openID,
              "album2.li[1].pic": res.data[i].picURL,
              "album2.li[1].title": res.data[i].detail_text,
              "album2.li[1].pid": res.data[i].Pid,
              "album2.li[1].timestamp": res.data[i].upload_time,
              "album2.li[1].comment_num": res.data[i].comment_num,
              "album2.li[1].like_num": res.data[i].like_num,
              "album2.li[1].lat": res.data[i].lat,
              "album2.li[1].lng": res.data[i].lng,
              "album2.li[1].openid": res.data[i].openID
            })
          }
          else if (i === 2) {
            that.setData({
              "swiper.content[2].pic": res.data[i].picURL,
              "swiper.content[2].pid": res.data[i].Pid,
              "swiper.content[2].timestamp": res.data[i].upload_time,
              "swiper.content[2].comment_num": res.data[i].comment_num,
              "swiper.content[2].like_num": res.data[i].like_num,
              "swiper.content[2].lat": res.data[i].lat,
              "swiper.content[2].lng": res.data[i].lng,
              "swiper.content[2].openid": res.data[i].openID,
              "album2.li[2].pic": res.data[i].picURL,
              "album2.li[2].title": res.data[i].detail_text,
              "album2.li[2].pid": res.data[i].Pid,
              "album2.li[2].timestamp": res.data[i].upload_time,
              "album2.li[2].comment_num": res.data[i].comment_num,
              "album2.li[2].like_num": res.data[i].like_num,
              "album2.li[2].lat": res.data[i].lat,
              "album2.li[2].lng": res.data[i].lng,
              "album2.li[2].openid": res.data[i].openID
            })
          }
          else if (i === 3) {
            that.setData({
              "swiper.content[3].pic": res.data[i].picURL,
              "swiper.content[3].pid": res.data[i].Pid,
              "swiper.content[3].timestamp": res.data[i].upload_time,
              "swiper.content[3].comment_num": res.data[i].comment_num,
              "swiper.content[3].like_num": res.data[i].like_num,
              "swiper.content[3].lat": res.data[i].lat,
              "swiper.content[3].lng": res.data[i].lng,
              "swiper.content[3].openid": res.data[i].openID,
              "album2.li[3].pic": res.data[i].picURL,
              "album2.li[3].title": res.data[i].detail_text,
              "album2.li[3].pid": res.data[i].Pid,
              "album2.li[3].timestamp": res.data[i].upload_time,
              "album2.li[3].comment_num": res.data[i].comment_num,
              "album2.li[3].like_num": res.data[i].like_num,
              "album2.li[3].lat": res.data[i].lat,
              "album2.li[3].lng": res.data[i].lng,
              "album2.li[3].openid": res.data[i].openID
            })
          }
          else if (i === 4) {
            that.setData({
              "swiper.content[4].pic": res.data[i].picURL,
              "swiper.content[4].pid": res.data[i].Pid,
              "swiper.content[4].timestamp": res.data[i].upload_time,
              "swiper.content[4].comment_num": res.data[i].comment_num,
              "swiper.content[4].like_num": res.data[i].like_num,
              "swiper.content[4].lat": res.data[i].lat,
              "swiper.content[4].lng": res.data[i].lng,
              "swiper.content[4].openid": res.data[i].openID,
              "album2.li[4].pic": res.data[i].picURL,
              "album2.li[4].title": res.data[i].detail_text,
              "album2.li[4].pid": res.data[i].Pid,
              "album2.li[4].timestamp": res.data[i].upload_time,
              "album2.li[4].comment_num": res.data[i].comment_num,
              "album2.li[4].like_num": res.data[i].like_num,
              "album2.li[4].lat": res.data[i].lat,
              "album2.li[4].lng": res.data[i].lng,
              "album2.li[4].openid": res.data[i].openID
            })
          }
          else if (i === 5) {
            that.setData({
              "swiper.content[5].pic": res.data[i].picURL,
              "swiper.content[5].pid": res.data[i].Pid,
              "swiper.content[5].timestamp": res.data[i].upload_time,
              "swiper.content[5].comment_num": res.data[i].comment_num,
              "swiper.content[5].like_num": res.data[i].like_num,
              "swiper.content[5].lat": res.data[i].lat,
              "swiper.content[5].lng": res.data[i].lng,
              "swiper.content[5].openid": res.data[i].openID,
              "album2.li[5].pic": res.data[i].picURL,
              "album2.li[5].title": res.data[i].detail_text,
              "album2.li[5].pid": res.data[i].Pid,
              "album2.li[5].timestamp": res.data[i].upload_time,
              "album2.li[5].comment_num": res.data[i].comment_num,
              "album2.li[5].like_num": res.data[i].like_num,
              "album2.li[5].lat": res.data[i].lat,
              "album2.li[5].lng": res.data[i].lng,
              "album2.li[5].openid": res.data[i].openID
            })
          }
        }
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
    app.onPageShow();
  },
  reachBottomFuc: [],
  onReachBottom: function () {
    app.onPageReachBottom( this.reachBottomFuc );
  },
  onUnload: function () {
    app.onPageUnload();
  },
  tapPrevewPictureHandler: function (e) {
    app.tapPrevewPictureHandler(e);
  },
  suspensionBottom: function () {
    app.suspensionBottom();
  },
  pageScrollFunc: function (e) {
    app.pageScrollFunc(e);
  },
  dynamicVesselScrollFunc: function (e) {
    app.dynamicVesselScrollFunc(e);
  },
  goodsScrollFunc: function (e) {
    app.goodsScrollFunc(e);
  },
  takeoutStyleScrollFunc: function(e){
    app.takeoutStyleScrollFunc(e);
  },
  franchiseeScrollFunc: function (e) {
    app.franchiseeScrollFunc(e);
  },
  seckillScrollFunc: function (e) {
    app.seckillScrollFunc(e);
  },
  videoScrollFunc: function (e) {
    app.videoScrollFunc(e);
  },
  carouselVideoClose: function(e) {
    app.carouselVideoClose(e);
  },
  changeCount: function (e) {
    app.changeCount(e);
  },
  inputChange: function (e) {
    app.inputChange(e);
  },
  bindDateChange: function (e) {
    app.bindDateChange(e);
  },
  bindTimeChange: function (e) {
    app.bindTimeChange(e);
  },
  bindSelectChange: function (e) {
    app.bindSelectChange(e);
  },
  bindScoreChange: function (e) {
    app.bindScoreChange(e);
  },
  submitForm: function (e) {
    app.submitForm(e);
  },
  udpateVideoSrc: function (e) {
    app.udpateVideoSrc(e);
  },
  tapMapDetail: function (e) {
    app.tapMapDetail(e);
  },
  uploadFormImg: function (e) {
    app.uploadFormImg(e);
  },
  deleteUploadImg: function (e) {
    app.deleteUploadImg(e);
  },
  listVesselTurnToPage: function (e) {
    app.listVesselTurnToPage(e);
  },
  dynamicVesselTurnToPage: function (e) {
    app.dynamicVesselTurnToPage(e);
  },
  userCenterTurnToPage: function (e) {
    app.userCenterTurnToPage(e);
  },
  turnToGoodsDetail: function (e) {
    app.turnToGoodsDetail(e);
  },
  turnToFranchiseeDetail: function (e) {
    app.turnToFranchiseeDetail(e);
  },
  turnToSeckillDetail: function (e) {
    app.turnToSeckillDetail(e);
  },
  sortListFunc: function (e) {
    app.sortListFunc(e);
  },
  bbsInputComment: function (e) {
    app.bbsInputComment(e);
  },
  bbsInputReply: function (e) {
    app.bbsInputReply(e);
  },
  uploadBbsCommentImage: function (e) {
    app.uploadBbsCommentImage(e);
  },
  uploadBbsReplyImage: function (e) {
    app.uploadBbsReplyImage(e);
  },
  deleteCommentImage: function (e) {
    app.deleteCommentImage(e);
  },
  deleteReplyImage: function (e) {
    app.deleteReplyImage(e);
  },
  bbsPublishComment: function (e) {
    app.bbsPublishComment(e);
  },
  clickBbsReplyBtn: function (e) {
    app.clickBbsReplyBtn(e);
  },
  bbsPublishReply: function (e) {
    app.bbsPublishReply(e);
  },
  searchList: function (e) {
    app.searchList(e);
  },
  selectLocal: function (e) {
    app.selectLocal(e);
  },
  cancelCity: function (e) {
    app.cancelCity(e);
  },
  bindCityChange: function (e) {
    app.bindCityChange(e);
  },
  submitCity: function (e) {
    app.submitCity(e);
  },
  openTakeoutLocation: function (e) {
    app.openTakeoutLocation(e);
  },
  callTakeout: function (e) {
    app.callTakeout(e);
  },
  getMoreAssess: function (e) {
    app.getMoreAssess(e);
  },
  changeEvaluate: function (e) {
    app.changeEvaluate(e)
  },
  deleteAllCarts: function (e) {
    app.deleteAllCarts(e);
  },
  clickCategory: function (e) {
    app.clickCategory(e);
  },
  goodsListMinus: function (e) {
    app.goodsListMinus(e);
  },
  goodsListPlus: function (e) {
    app.goodsListPlus(e);
  },
  cartListMinus: function (e) {
    app.cartListMinus(e);
  },
  cartListPlus: function (e) {
    app.cartListPlus(e);
  },
  changeAssessType: function (e) {
    app.changeAssessType(e);
  },
  showShoppingCartPop: function (e) {
    app.showShoppingCartPop(e);
  },
  hideShoppingCart: function (e) {
    app.hideShoppingCart(e);
  },
  showGoodsDetail: function (e) {
    app.showGoodsDetail(e);
  },
  hideDetailPop: function (e) {
    app.hideDetailPop(e);
  },
  hideModelPop: function (e) {
    app.hideModelPop(e);
  },
  chooseModel: function (e) {
    app.chooseModel(e);
  },
  sureChooseModel: function (e) {
    app.sureChooseModel(e);
  },
  clickChooseComplete: function (e) {
    app.clickChooseComplete(e);
  },
  reLocalAddress: function(e){
    app.reLocalAddress(e);
  },
  tapGoodsTradeHandler: function (e) {
    app.tapGoodsTradeHandler(e);
  },
  tapVideoHandler: function(e){
    app.tapVideoHandler(e);
  },
  tapVideoPlayHandler: function(e){
    app.tapVideoPlayHandler(e);  
  },
  tapVideoHandler: function(e){
    app.tapVideoHandler(e);
  },
  tapInnerLinkHandler: function (e) {
    app.tapInnerLinkHandler(e);
  },
  tapPhoneCallHandler: function (e) {
    app.tapPhoneCallHandler(e);
  },
  tapRefreshListHandler: function (e) {
    app.tapRefreshListHandler(e);
  },
  tapGetCouponHandler: function (e) {
    app.tapGetCouponHandler(e);
  },
  tapCommunityHandler: function (e) {
    app.tapCommunityHandler(e);
  },
  tapPageShareHandler:function(e) {
    app.tapPageShareHandler(e);
  },
  turnToCommunityPage: function (e) {
    app.turnToCommunityPage(e);
  },
  tapToFranchiseeHandler: function (e) {
    app.tapToFranchiseeHandler(e);
  },
  tapToTransferPageHandler: function () {
    app.tapToTransferPageHandler();
  },
  tapToSeckillHandler: function (e) {
    app.tapToSeckillHandler(e);
  },
  tapToPromotionHandler: function () {
    app.tapToPromotionHandler();
  },
  tapToCouponReceiveListHandler: function () {
    app.tapToCouponReceiveListHandler();
  },
  tapToRechargeHandler: function () {
    app.tapToRechargeHandler();
  },
  tapToXcx: function (e) {
    app.tapToXcx(e);
  },
  tapFranchiseeLocation: function (e) {
    app.tapFranchiseeLocation(e);
  },
  showAddShoppingcart: function (e) {
    app.showAddShoppingcart(e);
  },
  hideAddShoppingcart: function () {
    app.hideAddShoppingcart();
  },
  selectGoodsSubModel: function (e) {
    app.selectGoodsSubModel(e);
  },
  resetSelectCountPrice: function () {
    app.resetSelectCountPrice();
  },
  // 电商
  clickGoodsMinusButton: function (e) {
    app.clickGoodsMinusButton();
  },
  clickGoodsPlusButton: function (e) {
    app.clickGoodsPlusButton();
  },
  sureAddToShoppingCart: function () {
    app.sureAddToShoppingCart();
  },
  sureAddToBuyNow: function () {
    app.sureAddToBuyNow();
  },
  clickTostoreMinusButton: function (e) {
    app.clickTostoreMinusButton(e);
  },
  clickTostorePlusButton: function (e) {
    app.clickTostorePlusButton(e);
  },
  readyToPay: function () {
    app.readyToTostorePay();
  },
  getValidateTostore: function () {
    app.getValidateTostore();
  },
  goToShoppingCart: function () {
    app.goToShoppingCart();
  },
  getCartList: function () {
    app.getTostoreCartList();
  },
  stopPropagation: function () {
  },
  turnToSearchPage:function (e) {
    app.turnToSearchPage(e);
  },
  previewImage: function (e) {
    var dataset = e.currentTarget.dataset;
    app.previewImage({
      current : dataset.src,
      urls: dataset.previewImgarr,
    });
  },
  scrollPageTop: function () {
    app.pageScrollTo(0);
  },
  suspensionTurnToPage: function (e) {
    app.suspensionTurnToPage(e);
  },
   tapToLuckyWheel: function (e) {
    app.tapToLuckyWheel(e);
  },
  tapToGoldenEggs: function (e) {
    app.tapToGoldenEggs(e);
  },
  tapToScratchCard: function (e) {
    app.tapToScratchCard(e);
  },
  tapToLuckyWheel: function (e) {
    app.tapToLuckyWheel(e);
  },
  keywordList:{},
  bindSearchTextChange: function (e) {
    this.keywordList[e.currentTarget.dataset.compid] = e.detail.value;
  },
  // 文字组件跳到地图
  textToMap: function(e) {
    app.textToMap(e);
  },
  tapDynamicClassifyFunc: function(e){
    app.tapDynamicClassifyFunc(e);
  },
  // 跳转到视频详情
  turnToVideoDetail : function(e) {
    app.turnToVideoDetail(e);
  },
  // 单个视频组件播放视频
  startPlayVideo : function(e) {
    app.startPlayVideo(e);
  },
  // 视频播放报错
  videoError: function(e) {
    app.showModal({
      content: e.detail.errMsg
    });
  }
};
Page(pageData);
