(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0640":function(n,t,e){"use strict";(function(n){e("d101"),e("921b");o(e("66fd"));var t=o(e("8e1e"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"0f57":function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return u})},4325:function(n,t,e){"use strict";e.r(t);var o=e("83f9"),u=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);t["default"]=u.a},"83f9":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(e("a34a"));function u(n){return n&&n.__esModule?n:{default:n}}function i(n,t,e,o,u,i,a){try{var r=n[i](a),c=r.value}catch(s){return void e(s)}r.done?t(c):Promise.resolve(c).then(o,u)}function a(n){return function(){var t=this,e=arguments;return new Promise(function(o,u){var a=n.apply(t,e);function r(n){i(a,o,u,r,c,"next",n)}function c(n){i(a,o,u,r,c,"throw",n)}r(void 0)})}}var r=function(){return e.e("components/goods_list").then(e.bind(null,"b734"))},c={data:function(){return{lunbo:[],hotGoods:[],navlist:[{icon:"iconfont iconshop",name:"社区超市",url:"/pages/goods/goods"},{icon:"iconfont iconlianxi-A",name:"联系我们",url:"/pages/contact/contact"},{icon:"iconfont iconphoto",name:"社区图片",url:"/pages/pics/pics"},{icon:"iconfont iconvideo",name:"视频影音",url:"/pages/video/video"}]}},onLoad:function(){this.getLunbo(),this.getHotGoods()},components:{"good-lists":r},methods:{getLunbo:function(){var n=a(o.default.mark(function n(){var t;return o.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,this.$myRequest({url:"/shop/getLunboImages"});case 2:t=n.sent,this.lunbo=t.data.result;case 4:case"end":return n.stop()}},n,this)}));function t(){return n.apply(this,arguments)}return t}(),getHotGoods:function(){var n=a(o.default.mark(function n(){var t;return o.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,this.$myRequest({url:"/shop/getHotGoods"});case 2:t=n.sent,this.hotGoods=t.data.result;case 4:case"end":return n.stop()}},n,this)}));function t(){return n.apply(this,arguments)}return t}(),navItemclick:function(t){n.navigateTo({url:t})},itemDetail:function(t){n.navigateTo({url:"../goods/goodsDetail?id="+t})}}};t.default=c}).call(this,e("6e42")["default"])},"8e1e":function(n,t,e){"use strict";e.r(t);var o=e("0f57"),u=e("4325");for(var i in u)"default"!==i&&function(n){e.d(t,n,function(){return u[n]})}(i);e("affc");var a=e("2877"),r=Object(a["a"])(u["default"],o["a"],o["b"],!1,null,null,null);t["default"]=r.exports},a7bc:function(n,t,e){},affc:function(n,t,e){"use strict";var o=e("a7bc"),u=e.n(o);u.a}},[["0640","common/runtime","common/vendor"]]]);