var app      = getApp();
var qmap = require('../../libs/qqmap-wx-jssdk.js');
var wxMarkerData = []; 

var detail_text = ''
var openid = ''
var picURL = '/var/www/hexo/rooftop/picture'
var uptime = '20111111111111'
var uplat = 0
var uplng = 0

var pageData = {
  data: {
    "free_vessel1":{
      "type":"free-vessel",
      "style":"width:750rpx;height:485.3125rpx;margin-bottom:auto;margin-right:auto;opacity:1;margin-left:auto;",
      "content":[{
        "type":"picture",
        "style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:440.4375rpx;width:703.125rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:23.4375rpx;top:23.4375rpx;",
        "content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5a6490962c096.jpg",
        "customFeature":{
          "boxShadow":"('#000','0','0','5')",
          "boxColor":"#000","boxX":"0",
          "boxY":"0","boxR":"5"
        },
        "animations":[],
        "compId":"data.content[0]",
        "parentCompid":"free_vessel1"
      },{
        "type":"text",
        "style":"background-color:rgb(53, 53, 53);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(178, 178, 178);font-size:23.4375rpx;height:133.53125rpx;width:703.125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:23.4375rpx;top:332.8125rpx;margin-right:0;opacity:0.7;",
        "content":"\u8f93\u5165\u6587\u5b57...",
        "customFeature":{
          "boxColor":"rgb(0, 0, 0)",
          "boxR":"5",
          "boxStyle":false,
          "boxX":"0",
          "boxY":"0"
        },
        "animations":[],
        "compId":"data.content[1]",
        "parentCompid":"free_vessel1",
        "markColor":"",
        "mode":0
      }],
      "customFeature":{
        "boxColor":"rgb(0, 0, 0)",
        "boxR":5,
        "boxStyle":false,
        "boxX":0,
        "boxY":0
      },
      "animations":[],
      "page_form":"",
      "compId":"free_vessel1"
    },
    "free_vessel2":{
      "type":"free-vessel",
      "style":"width:750rpx;height:232.03125rpx;margin-bottom:auto;margin-right:auto;opacity:1;margin-left:auto;",
      "content":[{
        "type":"picture",
        "style": "opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:187.5rpx;width:703.125rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:23.4375rpx;top:23.4375rpx;border:1px solid #000",
        "content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5a602a7231c37.jpg",
        "customFeature":{
          "boxShadow":"('#000','0','0','5')",
          "boxColor":"#000",
          "boxX":"0",
          "boxY":"0",
          "boxR":"5"
        },
        "latitude": "39.992617",
        "longitude": "116.317001",
        "markers": [{
          "id": "0",
          "latitude": "39.992617",
          "longitude": "116.317001",
          "name": "北京大学物理学院\n北京市海淀区成府路209号",
          "compId": "data.markers[0]",
          "parentCompid": "free_vessel2.content[0]"
        }],
        "animations":[],
        "compId":"data.content[0]",
        "parentCompid":"free_vessel2"
      }],
      "customFeature":{
        "boxColor":"rgb(0, 0, 0)",
        "boxR":5,
        "boxStyle":false,
        "boxX":0,
        "boxY":0
      },
      "animations":[],
      "page_form":"",
      "compId":"free_vessel2"
    },
    "button3":{
      "type":"button",
      "style":"background-color:rgb(255, 255, 255);border-color:rgb(204, 204, 204);border-style:solid;border-width:2.34375rpx;color:rgb(136, 136, 136);font-size:32.8125rpx;height:70.3125rpx;line-height:70.3125rpx;margin-left:auto;margin-right:auto;margin-top:23.4375rpx;opacity:1;text-align:center;width:771.09375rpx;",
      "content":"发布",
      "customFeature":{
        "boxColor":"rgb(0, 0, 0)",
        "boxR":"5px",
        "boxStyle":false,
        "boxX":"0",
        "boxY":"0"
      },
      "animations":[],
      "page_form":"",
      "compId":"button3",
      "parentCompid":"button3"
    },
    "has_tabbar":0,
    "page_hidden":true,
    "page_form":"",
    "top_nav":{
      "navigationBarBackgroundColor":"#000000",
      "navigationBarTextStyle":"white",
      "navigationBarTitleText":"\u8be6\u7ec6"
    }},
    need_login: false,
    page_router: 'update',
    page_form: 'none',
      list_compids_params: [],
      user_center_compids_params: [],
      goods_compids_params: [],
  prevPage:0,
      tostoreComps: [],
      carouselGroupidsParams: [],
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
    //图片加载
    this.setData({
      "free_vessel1.content[0].content": e.pic
    })
    //定位
    var that = this
    var lat = 0;
    var lng = 0;
    var qqmapsdk = new qmap({
      key: 'EECBZ-OAH3X-H3G4Y-7UQA6-HMN7F-PNB3D'
    });
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        lat = res.latitude,
        lng = res.longitude,
        uplat = res.latitude,
        uplng = res.longitude,
        that.setData({
          "free_vessel2.content[0].latitude": lat,
          "free_vessel2.content[0].longitude": lng,
          "free_vessel2.content[0].markers[0].latitude": lat,
          "free_vessel2.content[0].markers[0].longitude": lng
        })
      }
    })
    app.onPageLoad(e);

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
                openid = res.data.openid
                console.log(openid)
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

    //上传图片
    var pic = this.data.free_vessel1.content[0].content
    wx.uploadFile({
      url: 'https://www.katouspace.com/upload_pic.php',
      filePath: pic,
      name: 'up_file',
      formData: {
        'user': 'test'
      },
      success: function (res) {
        var data = JSON.parse(res.data)
        //返回图片上传后路径
        picURL = data.site
        uptime = data.upload_time
        console.log(uptime) 
      }
    })
  },

  //大图加载
  previewImage2: function (e) {
    var a = this.data.free_vessel1.content[0].content
    console.log(a)
    wx.previewImage({
      urls: this.data.free_vessel1.content[0].content.split(',')
      // 需要预览的图片http链接  使用split把字符串转数组。不然会报错  
    })
  }, 

  //图文上传
  clickPicUpBtn: function (e) {
    var pic = this.data.free_vessel1.content[0].content
    //lid应从线上匹配获取
    var lid = 1
    console.log(detail_text)
    var like_num = 0
    var comment_num = 0

    //图文上传
    wx.request({
      url: 'https://www.katouspace.com/table_publish.php?method=insert&openID="' + openid + '"&lid=' + lid + '&picURL="' + picURL + '"&detail_text="' + detail_text + '"&like_num=' + like_num + '&comment_num=' + comment_num + '&lat=' + uplat + '&lng=' + uplng + '&upload_time=' + uptime,
      data: {},
      method: 'GET',
      success: function (res) {
        // success
        console.log(res)
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
    wx.navigateBack()
  },

  //获取中间点的经纬度，并mark出来
  getLatLng: function() {
    var that = this;
    this.mapCtx = wx.createMapContext("map");
    this.mapCtx.getCenterLocation({
      success: function (res) {
        uplat = res.latitude,
        uplng = res.longitude,
        that.setData({
          "free_vessel2.content[0].markers[0].latitude": res.latitude,
          "free_vessel2.content[0].markers[0].longitude": res.longitude
        })
      }
    })
  },

  //地图光标移动
  regionchange(e) {
    if (e.type == 'end') {
      this.getLatLng()
    }
  },

  //输入监听
  bindTextAreaBlur: function (e) {
    detail_text = e.detail.value
  },

  dataInitial: function () {
    app.pageDataInitial();
  },
  onShareAppMessage: function (e) {
    return app.onPageShareAppMessage(e);
  },
  onShow: function () {
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
