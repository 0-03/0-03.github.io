(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8dae415c"],{"6d26":function(t,e,i){"use strict";i("f917")},f22d:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t._self._c;return t.information?e("div",{staticClass:"warp information-warp",on:{touchstart:t.redirect}},[e("h2",{staticClass:"title"},[t._v(t._s(t.information.title))]),t.information.presentation?e("div",{staticClass:"description"},[e("b",[t._v("摘要：")]),t._v(" "+t._s(t.information.presentation)+" ")]):t._e(),e("div",{ref:"main-text",staticClass:"content",domProps:{innerHTML:t._s(t.information.content)}})]):t._e()},o=[],a=(i("4662"),i("28a2")),s=i("e93e"),r=i("bc3a"),c=i.n(r),l=i("ba41");let h=null;var f={name:"InforMation",data(){return{ImagePreview:a["a"],information:null,shareConfig:null,code:""}},props:{msg:String},watch:{information:function(){this.$nextTick((function(){this.$refs["main-text"].addEventListener("click",this.imagesListener)}))}},async created(){let t=await Object(l["a"])(this.$route.query.id);t.data&&(this.information=t.data,document.title=this.information.title,this.wxJsSdkInit());let e=this.$route.query.code;if(e){if(1==window.performance.navigation.type)return;Object(l["d"])({code:e,url:encodeURIComponent(window.location.href),title:document.title}).then(t=>{this.code=e,console.log(t)})}},beforeDestroy(){this.$refs["main-text"].removeEventListener("click",this.imagesListener),clearTimeout(h),h=null},methods:{imagesListener(t){"IMG"===t.target.tagName&&Object(a["a"])({images:[t.target.src],showIndex:!1})},redirect(){h&&clearTimeout(h),h=setTimeout(()=>{let t=this.$route.query.code;t||(window.location.href=`http://mpauth.shhzcj.com?appid=wx14f239063f3064af&redirect_uri=${encodeURIComponent(window.location.href)}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`)},200)},wxJsSdkInit(){c.a.post("/cors-mpapi/share/getsign",{url:window.location.href.split("#")[0]},{timeout:5e3,withCredentials:!0}).then(t=>{wx.config({debug:!1,appId:t.data.appid,timestamp:t.data.timestamp,nonceStr:t.data.nonceStr,signature:t.data.signature,jsApiList:["onMenuShareAppMessage","updateAppMessageShareData"]})}).catch(t=>{console.log(t)});var t=this.information.title;null!=this.information.shareTitle&&""!=this.information.shareTitle&&(t=this.information.shareTitle);var e=this.information.presentation;null!=this.information.shareDesc&&""!=this.information.shareDesc&&(e=this.information.shareDesc);var n=location.href.split("/#")[0]+i("b640");null!=this.information.shareImg&&""!=this.information.shareImg&&(n=this.information.shareImg),this.shareConfig={title:t,desc:e,link:location.href,imgUrl:n,success:function(){console.log("已分享")},cancel:function(){console.log("已取消")},fail:function(){console.log(JSON.stringify())}},wx.ready(()=>{console.log(this.shareConfig),s["a"].onMenuShareAppMessage(this.shareConfig),s["a"].updateAppMessageShareData(this.shareConfig)})}}},d=f,m=(i("6d26"),i("2877")),u=Object(m["a"])(d,n,o,!1,null,null,null);e["default"]=u.exports},f917:function(t,e,i){}}]);