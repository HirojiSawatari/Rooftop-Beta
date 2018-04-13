var app      = getApp();

var pid = ''
var like = 0
var com = 0
var timestamp = '2011-11-11 11:11:11'

var pageData = {
  data: {
    "free_vessel1":{
    	"type":"free-vessel",
    	"style":"width:750rpx;height:602.5rpx;margin-bottom:auto;margin-right:auto;opacity:1;margin-left:auto;",
    	"content":[{
    		"type":"picture",
    		"style":"opacity:1;background-color:transparent;border-color:rgb(255, 255, 255);border-radius:23.4375rpx;border-style:solid;border-width:2.34375rpx;height:117.1875rpx;width:117.1875rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:23.4375rpx;top:15.78125rpx;",
    		"content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5a603a1964c18.jpg",
    		"customFeature":{
    			"boxShadow":"('#000','0','0','5')",
    			"boxColor":"#000",
    			"boxX":"0",
    			"boxY":"0",
    			"boxR":"5"
    		},
    		"animations":[],
    		"compId":"data.content[0]",
    		"parentCompid":"free_vessel1"
    	},{
    		"type":"picture",
    		"style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:46.875rpx;width:46.875rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:597.65625rpx;top:25.78125rpx;",
    		"content":"http:\/\/img.weiye.me\/zcimgdir\/thumb\/t_15162589805a6046a44f4a8.png",
    		"customFeature":{
    			"boxShadow":"('#000','0','0','5')",
    			"boxColor":"#000",
    			"boxX":"0",
    			"boxY":"0",
    			"boxR":"5"
    		},
    		"animations":[],
    		"compId":"data.content[1]",
    		"parentCompid":"free_vessel1"
    	},{
    		"type":"text",
    		"style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(0, 0, 0);font-size:25.78125rpx;height:44.53125rpx;line-height:46.875rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:656.25rpx;top:25.78125rpx;margin-right:0;",
    		"content":11,
        "isLike":0,
    		"customFeature":{
    			"boxColor":"rgb(0, 0, 0)",
    			"boxR":"5",
    			"boxStyle":false,
    			"boxX":"0",
    			"boxY":"0"
    		},
    		"animations":[],
    		"compId":"data.content[2]",
    		"parentCompid":"free_vessel1",
    		"markColor":"",
    		"mode":0
    	},{
    		"type":"picture",
    		"style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:46.875rpx;width:46.875rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:597.65625rpx;top:82.03125rpx;",
    		"content":"http:\/\/img.weiye.me\/zcimgdir\/thumb\/t_15162583015a6043fd3a60b.png",
    		"customFeature":{
    			"boxShadow":"('#000','0','0','5')",
    			"boxColor":"#000",
    			"boxX":"0",
    			"boxY":"0",
    			"boxR":"5"
    		},
    		"animations":[],
    		"compId":"data.content[3]",
    		"parentCompid":"free_vessel1"
    	},{
    		"type":"text",
    		"style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(0, 0, 0);font-size:25.78125rpx;height:44.53125rpx;line-height:46.875rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:656.25rpx;top:82.03125rpx;margin-right:0;",
    		"content":"21",
    		"customFeature":{
    			"boxColor":"rgb(0, 0, 0)",
    			"boxR":"5",
    			"boxStyle":false,
    			"boxX":"0",
    			"boxY":"0"
    		},
    		"animations":[],
    		"compId":"data.content[4]",
    		"parentCompid":"free_vessel1",
    		"markColor":"",
    		"mode":0
    	},{
    		"type":"picture",
  			"style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:440.4375rpx;width:703.125rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:23.4375rpx;top:140.625rpx;",
  			"content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5a6490962c096.jpg",
  			"customFeature":{
  				"boxShadow":"('#000','0','0','5')",
  				"boxColor":"#000",
  				"boxX":"0",
  				"boxY":"0",
  				"boxR":"5"
  			},
  			"animations":[],
  			"compId":"data.content[5]",
  			"parentCompid":"free_vessel1"
  		},{
  			"type":"text",
  			"style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(0, 0, 0);font-size:30.15625rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:157.03125rpx;top:25.78125rpx;margin-right:0;",
        "content":"Ka Tō",
  			"customFeature":{
  				"boxColor":"rgb(0, 0, 0)",
  				"boxR":"5",
  				"boxStyle":false,
  				"boxX":"0",
  				"boxY":"0"
  			},
  			"animations":[],
  			"compId":"data.content[6]",
  			"parentCompid":"free_vessel1",
  			"markColor":"",
  			"mode":0
  		},{
  			"type":"text",
        "style":"color:rgb(178, 178, 178);font-size:23.4375rpx;text-align:left;position:absolute;left:23.4375rpx;top:13.4375rpx;margin-right:23.4375rpx;margin-bottom:23.4375rpx;z-index:999;",
        "styleView":"background-color:rgb(53, 53, 53);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;height:133.53125rpx;width:703.125rpx;margin-left:0;margin-top:0;opacity:1;position:absolute;left:23.4375rpx;top:450rpx;margin-right:0;opacity:0.7;",
  			"content":"\u4e00\u8d77\u6765\u64b8\u732b\uff01\uff01",
  			"customFeature":{
  				"boxColor":"rgb(0, 0, 0)",
  				"boxR":"5",
  				"boxStyle":false,
  				"boxX":"0",
  				"boxY":"0"
  			},
  			"animations":[],
  			"compId":"data.content[7]",
  			"parentCompid":"free_vessel1",
  			"markColor":"",
  			"mode":0
  		},{
  			"type":"text",
  			"style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(0, 0, 0);font-size:27.8125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:157.03125rpx;top:82.03125rpx;margin-right:0;",
  			"content":"2017-12-23 16:43:03",
  			"customFeature":{
  				"boxColor":"rgb(0, 0, 0)",
  				"boxR":"5",
  				"boxStyle":false,
  				"boxX":"0",
  				"boxY":"0"
  			},
  			"animations":[],
  			"compId":"data.content[8]",
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
        "style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:187.5rpx;width:703.125rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:23.4375rpx;top:23.4375rpx;border:1px solid #000",
  			"content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5a602a7231c37.jpg",
  			"customFeature":{
  				"boxShadow":"('#000','0','0','5')",
  				"boxColor":"#000",
  				"boxX":"0",
  				"boxY":"0",
  				"boxR":"5"
        },
        "latitude":"39.992617",
        "longitude":"116.317001",
        "markers":[{
          "id":"0",
          "latitude":"39.992617",
          "longitude":"116.317001",
          "name":"北京大学物理学院\n北京市海淀区成府路209号"
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
  	"bbs4":{
  		"type":"bbs",
  		"style":"margin-top:0;background-color:#fff;margin-left:auto;",
  		"content":"",
  		"customFeature":{
  			"mode":1,
  			"ifBindPage":false,
  			"ifLike":false,
  			"themeColor":"#333"
  		},
  		"animations":[],
  		"page_form":"",
  		"compId":"bbs4",
  		"parentCompid":"bbs4"
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
    page_router: 'detail',
    page_form: 'none',
      list_compids_params: [],
      user_center_compids_params: [],
      goods_compids_params: [],
  prevPage:0,
      tostoreComps: [],
      carouselGroupidsParams: [],
      relobj_auto: [],
      bbsCompIds: ["bbs4"],
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
    com = e.comment_num
    like = e.like_num
    pid = e.pid
    console.log(pid)
    var temptime = e.timestamp
    var n = 0
    temptime = temptime.split('')
    timestamp = timestamp.split('')
    //遍历时间字符串
    for (var i = 0; i < 12; i++) {
      if(i === 4) {
        timestamp.splice(n, 1, '-')
        n = n + 1
      } 
      else if (i === 6) {
        timestamp.splice(n, 1, '-')
        n = n + 1
      }
      else if (i === 8) {
        timestamp.splice(n, 1, ' ')
        n = n + 1
      }
      else if (i === 10) {
        timestamp.splice(n, 1, ':')
        n = n + 1
      }
      else if (i === 12) {
        timestamp.splice(n, 1, ':')
        n = n + 1
      }
      timestamp.splice(n, 1, temptime[i])
      n = n + 1
    }
    timestamp = timestamp.join('')
    this.setData({
      "free_vessel1.content[5].content": e.pic,
      "free_vessel1.content[7].content": e.text,
      "free_vessel1.content[8].content": timestamp,
      "free_vessel1.content[2].content": e.like_num,
      "free_vessel2.content[0].latitude": e.lat,
      "free_vessel2.content[0].longitude": e.lng,
      "free_vessel2.content[0].markers[0].latitude": e.lat,
      "free_vessel2.content[0].markers[0].longitude": e.lng,
    })
    wx.request({
      url: 'https://www.katouspace.com/table_user.php?method=select&openID=' + e.openid,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        console.log(res.data)
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
    app.onPageLoad(e)
  },

  //点赞按钮点击
  clickLikeBtn: function (e) {
    var isLike = this.data.free_vessel1.content[2].isLike
    var curLike = this.data.free_vessel1.content[2].content
    //点赞
    if (isLike === 0) {
      var nxtLike = parseInt(curLike) + 1
      like = parseInt(like) + 1
      this.setData({
        "free_vessel1.content[2].content": nxtLike,
        "free_vessel1.content[1].content": "..\/..\/images\/like_on.png",
        "free_vessel1.content[2].isLike": 1
      })
      wx.request({
        url: 'https://www.katouspace.com/table_publish.php?method=modify&pid='+ pid +'&like_num='+ like +'&comment_num=' + com,
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function (res) {
          console.log(res.data)
        },
        fail: function () {
          // fail
        },
        complete: function () {
          // complete
        }
      })
    }
    //取消点赞
    else {
      var nxtLike = parseInt(curLike) - 1
      like = parseInt(like) - 1
      this.setData({
        "free_vessel1.content[2].content": nxtLike,
        "free_vessel1.content[1].content": "http:\/\/img.weiye.me\/zcimgdir\/thumb\/t_15162589805a6046a44f4a8.png",
        "free_vessel1.content[2].isLike": 0
      })
      wx.request({
        url: 'https://www.katouspace.com/table_publish.php?method=modify&pid=' + pid + '&like_num=' + like + '&comment_num=' + com,
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function (res) {
          console.log(res.data)
        },
        fail: function () {
          // fail
        },
        complete: function () {
          // complete
        }
      })
    }
  },

  //大图加载
  previewImage2: function (e) {
    var a = this.data.free_vessel1.content[5].content
    console.log(a)
    wx.previewImage({
      urls: this.data.free_vessel1.content[5].content.split(',')
      // 需要预览的图片http链接  使用split把字符串转数组。不然会报错  
    })
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
