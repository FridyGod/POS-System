webpackJsonp([1],{NHnr:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=s("7+uW"),e={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"left-nav"},[s("ul",[s("li",[s("i",{staticClass:"icon iconfont icon-qitashouru"}),t._v(" "),s("div",[t._v("收银")])]),t._v(" "),s("li",[s("i",{staticClass:"icon iconfont icon-zhufang"}),t._v(" "),s("div",[t._v("店铺")])]),t._v(" "),s("li",[s("i",{staticClass:"icon iconfont icon-lingshi"}),t._v(" "),s("div",[t._v("商品")])]),t._v(" "),s("li",[s("i",{staticClass:"icon iconfont icon-huiyuantequan"}),t._v(" "),s("div",[t._v("会员")])]),t._v(" "),s("li",[s("i",{staticClass:"icon iconfont icon-gouwu"}),t._v(" "),s("div",[t._v("统计")])]),t._v(" "),s("li",[s("i",{staticClass:"icon iconfont icon-shezhi"}),t._v(" "),s("div",[t._v("设置")])])])])}]};var n={name:"App",components:{leftNav:s("VU/8")({name:"leftNav",data:function(){return{}}},e,!1,function(t){s("wxVW")},null,null).exports}},i={render:function(){var t=this.$createElement,o=this._self._c||t;return o("div",{attrs:{id:"app"}},[o("left-nav"),this._v(" "),o("div",{staticClass:"main"},[o("router-view")],1)],1)},staticRenderFns:[]};var l=s("VU/8")(n,i,!1,function(t){s("w8Yg")},null,null).exports,c=s("/ocq"),d=s("mtWM"),r=s.n(d),u={name:"pos",data:function(){return{tableData:[],oftenGoods:[],type0Goods:[],type1Goods:[],type2Goods:[],type3Goods:[],totalCount:0,totalMoney:0}},created:function(){var t=this;r.a.get("https://www.easy-mock.com/mock/5a63df6b0ea0400cac5a9139/example/oftenGoods").then(function(o){t.oftenGoods=o.data.oftenGoods}).catch(function(t){console.log(t),alert("网络错误，不能访问")}),r.a.get("https://www.easy-mock.com/mock/5a63df6b0ea0400cac5a9139/example/typeGoods").then(function(o){t.type0Goods=o.data.pos[0],t.type1Goods=o.data.pos[1],t.type2Goods=o.data.pos[2],t.type3Goods=o.data.pos[3]}).catch(function(t){console.log(t),alert("网络错误，不能访问")})},mounted:function(){var t=document.body.clientHeight;document.getElementById("order-list").style.height=t+"px"},methods:{addOrderList:function(t){for(var o=!1,s=0;s<this.tableData.length;s++)this.tableData[s].goodsId==t.goodsId&&(o=!0);if(o){this.tableData.filter(function(o){return o.goodsId==t.goodsId})[0].count++}else{var a={goodsId:t.goodsId,goodsName:t.goodsName,price:t.price,count:1};this.tableData.push(a)}this.getAllMoney()},delSingleGoods:function(t){console.log(t),this.tableData=this.tableData.filter(function(o){return o.goodsId!=t.goodsId}),this.getAllMoney()},getAllMoney:function(){var t=this;this.totalCount=0,this.totalMoney=0,this.tableData&&this.tableData.forEach(function(o){t.totalCount+=o.count,t.totalMoney=t.totalMoney+o.price*o.count})},delAllGoods:function(){this.tableData=[],this.totalCount=0,this.totalMoney=0},checkout:function(){0!=this.totalCount?(this.tableData=[],this.totalCount=0,this.totalMoney=0,this.$message({message:"结账成功，感谢你又为店里出了一份力!",type:"success"})):this.$message.error("不能空结。老板了解你急切的心情！")}}},v={render:function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"pos"},[s("el-row",[s("el-col",{staticClass:"pos-order",attrs:{span:7,id:"order-list"}},[s("el-tabs",[s("el-tab-pane",{attrs:{label:"点餐"}},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[s("el-table-column",{attrs:{prop:"goodsName",label:"商品名称"}}),t._v(" "),s("el-table-column",{attrs:{prop:"count",label:"数量",width:"50"}}),t._v(" "),s("el-table-column",{attrs:{prop:"price",label:"金额",width:"70"}}),t._v(" "),s("el-table-column",{attrs:{label:"操作",width:"100",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(o){return[s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){t.delSingleGoods(o.row)}}},[t._v("删除")]),t._v(" "),s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){t.addOrderList(o.row)}}},[t._v("增加")])]}}])})],1),t._v(" "),s("div",{staticClass:"totalDiv"},[s("small",[t._v("数量：")]),t._v(t._s(t.totalCount)+"     \n            "),s("small",[t._v("金额：")]),t._v(t._s(t.totalMoney)+"元\n          ")]),t._v(" "),s("div",{staticClass:"div-btn"},[s("el-button",{attrs:{type:"success"},on:{click:function(o){t.checkout()}}},[t._v("结账")]),t._v(" "),s("el-button",{attrs:{type:"danger"},on:{click:function(o){t.delAllGoods()}}},[t._v("删除")])],1)],1),t._v(" "),s("el-tab-pane",{attrs:{label:"外卖"}},[t._v("\n          外卖\n        ")])],1)],1),t._v(" "),s("el-col",{attrs:{span:17}},[s("div",{staticClass:"often-goods"},[s("div",{staticClass:"title"},[t._v("常用商品")]),t._v(" "),s("div",{staticClass:"often-goods-list"},[s("ul",t._l(t.oftenGoods,function(o){return s("li",{on:{click:function(s){t.addOrderList(o)}}},[s("span",[t._v(t._s(o.goodsName))]),t._v(" "),s("span",{staticClass:"o-price"},[t._v("￥"+t._s(o.price))])])}))])]),t._v(" "),s("div",{staticClass:"goods-type"},[s("el-tabs",[s("el-tab-pane",{attrs:{label:"汉堡"}},[s("div",[s("ul",{staticClass:"cookList"},t._l(t.type0Goods,function(o){return s("li",{staticClass:"cookList",on:{click:function(s){t.addOrderList(o)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(o.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(o.price)+"元")])])}))])]),t._v(" "),s("el-tab-pane",{attrs:{label:"零食"}},[s("div",[s("ul",{staticClass:"cookList"},t._l(t.type1Goods,function(o){return s("li",{staticClass:"cookList",on:{click:function(s){t.addOrderList(o)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(o.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(o.price)+"元")])])}))])]),t._v(" "),s("el-tab-pane",{attrs:{label:"饮料"}},[s("div",[s("ul",{staticClass:"cookList"},t._l(t.type2Goods,function(o){return s("li",{staticClass:"cookList",on:{click:function(s){t.addOrderList(o)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(o.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(o.price)+"元")])])}))])]),t._v(" "),s("el-tab-pane",{attrs:{label:"套餐"}},[s("div",[s("ul",{staticClass:"cookList"},t._l(t.type3Goods,function(o){return s("li",{staticClass:"cookList",on:{click:function(s){t.addOrderList(o)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(o.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(o.price)+"元")])])}))])])],1)],1)])],1)],1)},staticRenderFns:[]};var p=s("VU/8")(u,v,!1,function(t){s("yxAB")},"data-v-b96eae86",null).exports;a.default.use(c.a);var f=new c.a({routes:[{path:"/",name:"pos",component:p}]}),_=s("zL8q"),m=s.n(_);s("tvR6");a.default.config.productionTip=!1,a.default.use(m.a),new a.default({el:"#app",router:f,components:{App:l},template:"<App/>"})},tvR6:function(t,o){},w8Yg:function(t,o){},wxVW:function(t,o){},yxAB:function(t,o){}},["NHnr"]);
//# sourceMappingURL=app.064ff87f18c6b67680b5.js.map