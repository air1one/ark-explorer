(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"1fwl":function(t,e,n){"use strict";var r=n("14Xm"),a=n.n(r),s=n("D3Ub"),i=n.n(s),c=n("iCc5"),o=n.n(c),u=n("V7oC"),l=n.n(u),p=n("liqK"),d=function(){function t(){o()(this,t)}return l()(t,[{key:"latest",value:function(){var t=i()(a.a.mark(function t(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:25;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("transactions",{params:{orderBy:"timestamp:desc",limit:n}});case 2:return e=t.sent,t.abrupt("return",e.data.transactions);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"find",value:function(){var t=i()(a.a.mark(function t(e){var n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("transactions/get",{params:{id:e}});case 2:return n=t.sent,t.abrupt("return",n.data.transaction);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"findByBlock",value:function(){var t=i()(a.a.mark(function t(e){var n,r,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:25;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=s>1?(s-1)*i:0,t.next=3,p.a.get("transactions",{params:{blockId:e,limit:i,offset:n,orderBy:"timestamp:desc"}});case 3:return r=t.sent,t.abrupt("return",r.data.transactions);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"latestRegistrations",value:function(){var t=i()(a.a.mark(function t(){var e;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("transactions",{params:{orderBy:"timestamp:desc",limit:5,type:2}});case 2:return e=t.sent,t.abrupt("return",e.data.transactions);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"latestVotes",value:function(){var t=i()(a.a.mark(function t(){var e;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("transactions",{params:{orderBy:"timestamp:desc",limit:5,type:3}});case 2:return e=t.sent,t.abrupt("return",e.data.transactions);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"allByAddress",value:function(){var t=i()(a.a.mark(function t(e){var n,r,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:25;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=s>1?(s-1)*i:0,t.next=3,p.a.get("transactions",{params:{senderId:e,recipientId:e,limit:i,offset:n,orderBy:"timestamp:desc"}});case 3:return r=t.sent,t.abrupt("return",r.data.transactions);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"sentByAddress",value:function(){var t=i()(a.a.mark(function t(e){var n,r,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:25;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=s>1?(s-1)*i:0,t.next=3,p.a.get("transactions",{params:{senderId:e,limit:i,offset:n,orderBy:"timestamp:desc"}});case 3:return r=t.sent,t.abrupt("return",r.data.transactions);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"receivedByAddress",value:function(){var t=i()(a.a.mark(function t(e){var n,r,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:25;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=s>1?(s-1)*i:0,t.next=3,p.a.get("transactions",{params:{recipientId:e,limit:i,offset:n,orderBy:"timestamp:desc"}});case 3:return r=t.sent,t.abrupt("return",r.data.transactions);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"sentByAddressCount",value:function(){var t=i()(a.a.mark(function t(e){var n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("transactions",{params:{senderId:e,limit:1}});case 2:return n=t.sent,t.abrupt("return",n.data.count);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"receivedByAddressCount",value:function(){var t=i()(a.a.mark(function t(e){var n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("transactions",{params:{recipientId:e,limit:1}});case 2:return n=t.sent,t.abrupt("return",n.data.count);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"findByBlockCount",value:function(){var t=i()(a.a.mark(function t(e){var n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("transactions",{params:{blockId:e,limit:1}});case 2:return n=t.sent,t.abrupt("return",n.data.count);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"paginate",value:function(){var t=i()(a.a.mark(function t(e){var n,r,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e>1?(e-1)*s:0,t.next=3,p.a.get("transactions",{params:{orderBy:"timestamp:desc",limit:s,offset:n}});case 3:return r=t.sent,t.abrupt("return",r.data.transactions);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"paginateByAddress",value:function(){var t=i()(a.a.mark(function t(e){var n,r,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:25;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=s>1?(s-1)*i:0,t.next=3,p.a.get("transactions",{params:{senderId:e,recipientId:e,limit:i,offset:n,orderBy:"timestamp:desc"}});case 3:return r=t.sent,t.abrupt("return",r.data.transactions);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),t}();e.a=new d},p9f9:function(t,e,n){var r={"./af":"g40e","./af.js":"g40e","./ar":"eE7B","./ar-dz":"c7dB","./ar-dz.js":"c7dB","./ar-kw":"kLe0","./ar-kw.js":"kLe0","./ar-ly":"1TIv","./ar-ly.js":"1TIv","./ar-ma":"4c8h","./ar-ma.js":"4c8h","./ar-sa":"2KA/","./ar-sa.js":"2KA/","./ar-tn":"NAXl","./ar-tn.js":"NAXl","./ar.js":"eE7B","./az":"FVHy","./az.js":"FVHy","./be":"dKJ3","./be.js":"dKJ3","./bg":"gY0z","./bg.js":"gY0z","./bm":"mpod","./bm.js":"mpod","./bn":"czrd","./bn.js":"czrd","./bo":"P66B","./bo.js":"P66B","./br":"5Xg5","./br.js":"5Xg5","./bs":"qhwE","./bs.js":"qhwE","./ca":"v1hB","./ca.js":"v1hB","./cs":"ObN3","./cs.js":"ObN3","./cv":"0Hcs","./cv.js":"0Hcs","./cy":"exWi","./cy.js":"exWi","./da":"cBLH","./da.js":"cBLH","./de":"jvQV","./de-at":"wsSC","./de-at.js":"wsSC","./de-ch":"Wei8","./de-ch.js":"Wei8","./de.js":"jvQV","./dv":"gin9","./dv.js":"gin9","./el":"PfWS","./el.js":"PfWS","./en-au":"ZPxk","./en-au.js":"ZPxk","./en-ca":"0C65","./en-ca.js":"0C65","./en-gb":"5Ktt","./en-gb.js":"5Ktt","./en-ie":"IHh9","./en-ie.js":"IHh9","./en-il":"MOos","./en-il.js":"MOos","./en-nz":"njdL","./en-nz.js":"njdL","./eo":"A9K8","./eo.js":"A9K8","./es":"8BSO","./es-do":"wE5A","./es-do.js":"wE5A","./es-us":"Z42+","./es-us.js":"Z42+","./es.js":"8BSO","./et":"cAWj","./et.js":"cAWj","./eu":"U+yw","./eu.js":"U+yw","./fa":"zK6C","./fa.js":"zK6C","./fi":"S76Z","./fi.js":"S76Z","./fo":"vuPu","./fo.js":"vuPu","./fr":"H3fm","./fr-ca":"/9Bk","./fr-ca.js":"/9Bk","./fr-ch":"Mjbz","./fr-ch.js":"Mjbz","./fr.js":"H3fm","./fy":"N8UG","./fy.js":"N8UG","./gd":"G6Es","./gd.js":"G6Es","./gl":"NM+G","./gl.js":"NM+G","./gom-latn":"MTx0","./gom-latn.js":"MTx0","./gu":"pLTn","./gu.js":"pLTn","./he":"zuhs","./he.js":"zuhs","./hi":"yzlp","./hi.js":"yzlp","./hr":"zqKh","./hr.js":"zqKh","./hu":"l8sh","./hu.js":"l8sh","./hy-am":"0LEZ","./hy-am.js":"0LEZ","./id":"cRM8","./id.js":"cRM8","./is":"Jp+f","./is.js":"Jp+f","./it":"HF9Y","./it.js":"HF9Y","./ja":"fBfX","./ja.js":"fBfX","./jv":"/ILB","./jv.js":"/ILB","./ka":"sKTc","./ka.js":"sKTc","./kk":"WFgf","./kk.js":"WFgf","./km":"Akw4","./km.js":"Akw4","./kn":"7tp6","./kn.js":"7tp6","./ko":"yfOn","./ko.js":"yfOn","./ky":"KIbS","./ky.js":"KIbS","./lb":"BpFP","./lb.js":"BpFP","./lo":"wTJ9","./lo.js":"wTJ9","./lt":"BBNV","./lt.js":"BBNV","./lv":"mofG","./lv.js":"mofG","./me":"B7lT","./me.js":"B7lT","./mi":"baeG","./mi.js":"baeG","./mk":"j3r3","./mk.js":"j3r3","./ml":"8v0h","./ml.js":"8v0h","./mn":"N06e","./mn.js":"N06e","./mr":"O3H3","./mr.js":"O3H3","./ms":"BmDN","./ms-my":"vdA7","./ms-my.js":"vdA7","./ms.js":"BmDN","./mt":"Zan6","./mt.js":"Zan6","./my":"Xlyg","./my.js":"Xlyg","./nb":"3Puk","./nb.js":"3Puk","./ne":"y6QT","./ne.js":"y6QT","./nl":"qpr7","./nl-be":"lhCX","./nl-be.js":"lhCX","./nl.js":"qpr7","./nn":"BGFA","./nn.js":"BGFA","./pa-in":"U9UB","./pa-in.js":"U9UB","./pl":"pgmR","./pl.js":"pgmR","./pt":"NBcn","./pt-br":"9Yb3","./pt-br.js":"9Yb3","./pt.js":"NBcn","./ro":"LwZ8","./ro.js":"LwZ8","./ru":"bZnm","./ru.js":"bZnm","./sd":"xLAL","./sd.js":"xLAL","./se":"Q/Le","./se.js":"Q/Le","./si":"M4l6","./si.js":"M4l6","./sk":"dTsf","./sk.js":"dTsf","./sl":"XjSp","./sl.js":"XjSp","./sq":"M7//","./sq.js":"M7//","./sr":"iEMl","./sr-cyrl":"QGjJ","./sr-cyrl.js":"QGjJ","./sr.js":"iEMl","./ss":"M55/","./ss.js":"M55/","./sv":"FCjE","./sv.js":"FCjE","./sw":"dYFN","./sw.js":"dYFN","./ta":"LpIf","./ta.js":"LpIf","./te":"m8zQ","./te.js":"m8zQ","./tet":"3G3C","./tet.js":"3G3C","./tg":"up+V","./tg.js":"up+V","./th":"iFT0","./th.js":"iFT0","./tl-ph":"n5Py","./tl-ph.js":"n5Py","./tlh":"hCnN","./tlh.js":"hCnN","./tr":"EJ75","./tr.js":"EJ75","./tzl":"WT5l","./tzl.js":"WT5l","./tzm":"oAe0","./tzm-latn":"XZsI","./tzm-latn.js":"XZsI","./tzm.js":"oAe0","./ug-cn":"b0uJ","./ug-cn.js":"b0uJ","./uk":"Hir5","./uk.js":"Hir5","./ur":"8m9Z","./ur.js":"8m9Z","./uz":"oYrV","./uz-latn":"yWw1","./uz-latn.js":"yWw1","./uz.js":"oYrV","./vi":"L+df","./vi.js":"L+df","./x-pseudo":"lb19","./x-pseudo.js":"lb19","./yo":"NSvc","./yo.js":"NSvc","./zh-cn":"hlxS","./zh-cn.js":"hlxS","./zh-hk":"AwLO","./zh-hk.js":"AwLO","./zh-tw":"ok4O","./zh-tw.js":"ok4O"};function a(t){var e=s(t);return n(e)}function s(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}a.keys=function(){return Object.keys(r)},a.resolve=s,t.exports=a,a.id="p9f9"},vBO3:function(t,e,n){"use strict";n.r(e);var r=n("QbLZ"),a=n.n(r),s=n("14Xm"),i=n.n(s),c=n("D3Ub"),o=n.n(c),u=n("iCc5"),l=n.n(u),p=n("V7oC"),d=n.n(p),f=n("vDqi"),h=n.n(f),m=n("wd/R"),v=n.n(m),b=n("Q2AE"),j=new(function(){function t(){l()(this,t)}return d()(t,[{key:"day",value:function(){var t=o()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.sendRequest("hour",24,"HH:mm"));case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"week",value:function(){var t=o()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.sendRequest("day",7,"DD.MM"));case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"month",value:function(){var t=o()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.sendRequest("day",30,"DD.MM"));case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"quarter",value:function(){var t=o()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.sendRequest("day",120,"DD.MM"));case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"year",value:function(){var t=o()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.sendRequest("day",365,"DD.MM"));case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"sendRequest",value:function(){var t=o()(i.a.mark(function t(e,n,r){var a,s,c;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=Math.round((new Date).getTime()/1e3),s="USD",b.a.getters["currency/name"]!==b.a.getters["network/token"]&&(s=b.a.getters["currency/name"]),t.next=5,h.a.get("https://min-api.cryptocompare.com/data/histo"+e,{params:{fsym:b.a.getters["network/token"],tsym:s,toTs:a,limit:n}});case 5:return c=t.sent,t.abrupt("return",this.transform(c.data.Data,r));case 7:case"end":return t.stop()}},t,this)}));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"transform",value:function(t,e){return{labels:t.map(function(t){return v.a.unix(t.time).format(e)}),datasets:t.map(function(t){return t.close})}}}]),t}()),y=n("H8ri"),k={extends:y.a,mixins:[y.b.reactiveProp],props:{chartData:{type:Object,required:!0},options:{type:Object,required:!0}},mounted:function(){this.renderChart(this.chartData,this.options)}},w=n("L2JU"),g={components:{PriceChart:k},data:function(){return{type:"day",chartData:{},options:{showScale:!0,responsive:!0,maintainAspectRatio:!1,legend:{display:!1},layout:{padding:{left:50,right:50,top:0,bottom:50}},scales:{yAxes:[{ticks:{callback:function(t,e,n){if(e%2!=0)return[b.a.getters["network/token"],"BTC","ETH","LTC"].some(function(t){return b.a.getters["currency/name"].indexOf(t)>-1})?b.a.getters["currency/symbol"]+t.toFixed(8):b.a.getters["currency/symbol"]+t.toFixed(2)},fontColor:"#838a9b",fontSize:13},gridLines:{color:"#282b38"}}],xAxes:[{gridLines:{display:!0,color:"#282b38"},ticks:{fontColor:"#838a9b",fontSize:13}}]},tooltips:{backgroundColor:"#272936",titleFontStyle:"normal",titleFontSize:18,bodyFontFamily:"'Proxima Nova', sans-serif",cornerRadius:3,bodyFontColor:"#838a9b",bodyFontSize:14,xPadding:14,yPadding:14,displayColors:!1,mode:"index",intersect:!1,callbacks:{title:function(t){var e=b.a.getters["currency/name"];return[b.a.getters["currency/symbol"],"BTC","ETH","LTC"].some(function(t){return e.indexOf(t)>-1})?e+" "+Number(t[0].yLabel).toFixed(8):e+" "+Number(t[0].yLabel).toFixed(2)},label:function(t){return""}}}}}},computed:a()({},Object(w.b)("currency",{currencyName:"name"})),mounted:function(){this.prepareComponent()},methods:{prepareComponent:function(){this.renderChart(),this.watchCurrencyName(),this.watchNetworkToken()},period:function(t){this.type=t,this.renderChart()},renderChart:function(t){var e=this;return o()(i.a.mark(function t(){var n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j[e.type]();case 2:n=t.sent,e.chartData={labels:n.labels,datasets:[{type:"line",pointHoverBackgroundColor:"#fff",borderColor:"#535972",pointHoverBorderColor:"#037cff",pointBackgroundColor:"rgba(0,0,0,0)",pointBorderColor:"rgba(0,0,0,0)",pointHoverRadius:5,pointHoverBorderWidth:4,fill:!1,data:n.datasets}]};case 4:case"end":return t.stop()}},t,e)}))()},watchCurrencyName:function(){var t=this;this.$store.watch(function(t){return t.currency.name},function(e){return t.renderChart()})},watchNetworkToken:function(){var t=this;this.$store.watch(function(t){return t.network.token},function(e){return t.renderChart()})}}},x=n("KHd+"),C=Object(x.a)(g,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex justify-between items-center px-10 py-8"},[n("h2",{staticClass:"text-white m-0 text-xl font-normal"},[t._v(t._s(t.$t("Price in"))+" "+t._s(t.currencyName))]),t._v(" "),n("div",[n("button",{staticClass:"chart-tab",class:{"chart-tab-active":"day"===t.type},on:{click:function(e){t.period("day")}}},[t._v(t._s(t.$t("Day")))]),t._v(" "),n("button",{staticClass:"chart-tab",class:{"chart-tab-active":"week"===t.type},on:{click:function(e){t.period("week")}}},[t._v(t._s(t.$t("Week")))]),t._v(" "),n("button",{staticClass:"chart-tab",class:{"chart-tab-active":"month"===t.type},on:{click:function(e){t.period("month")}}},[t._v(t._s(t.$t("Month")))]),t._v(" "),n("button",{staticClass:"chart-tab",class:{"chart-tab-active":"quarter"===t.type},on:{click:function(e){t.period("quarter")}}},[t._v(t._s(t.$t("Quarter")))]),t._v(" "),n("button",{staticClass:"chart-tab",class:{"chart-tab-active":"year"===t.type},on:{click:function(e){t.period("year")}}},[t._v(t._s(t.$t("Year")))])])]),t._v(" "),n("price-chart",{attrs:{chartData:t.chartData,options:t.options,height:314}})],1)},[],!1,null,null,null).exports,B=n("1fwl"),_={data:function(){return{transactions:null}},mounted:function(){var t=this;return o()(i.a.mark(function e(){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.latest();case 2:n=e.sent,t.transactions=n;case 4:case"end":return e.stop()}},e,t)}))()}},z=Object(x.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("loader",{attrs:{data:t.transactions}},[n("div",{staticClass:"hidden sm:block"},[n("table-transactions",{attrs:{transactions:t.transactions}})],1),t._v(" "),n("div",{staticClass:"sm:hidden"},[n("table-transactions-mobile",{attrs:{transactions:t.transactions}})],1),t._v(" "),n("div",{staticClass:"mx-10 mt-10 flex flex-wrap"},[n("router-link",{staticClass:"show-more-button",attrs:{to:{name:"transactions",params:{page:2}},tag:"button"}},[t._v("\n        "+t._s(t.$t("Show more"))+"\n      ")])],1)])],1)},[],!1,null,null,null).exports,L=n("3RCc"),N={data:function(){return{blocks:null}},mounted:function(){var t=this;return o()(i.a.mark(function e(){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.latest();case 2:n=e.sent,t.blocks=n;case 4:case"end":return e.stop()}},e,t)}))()}},T={components:{ChartWrapper:C,LatestTransactions:z,LatestBlocks:Object(x.a)(N,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("loader",{attrs:{data:t.blocks}},[n("div",{staticClass:"hidden sm:block"},[n("table-blocks",{attrs:{blocks:t.blocks}})],1),t._v(" "),n("div",{staticClass:"sm:hidden"},[n("table-blocks-mobile",{attrs:{blocks:t.blocks}})],1),t._v(" "),n("div",{staticClass:"mx-10 mt-10 flex flex-wrap"},[n("router-link",{staticClass:"show-more-button",attrs:{to:{name:"blocks",params:{page:2}},tag:"button"}},[t._v("\n        "+t._s(t.$t("Show more"))+"\n      ")])],1)])],1)},[],!1,null,null,null).exports},data:function(){return{dataView:"transactions"}},computed:a()({},Object(w.b)("ui",["priceChart"]))},A=Object(x.a)(T,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"max-w-2xl mx-auto md:pt-5"},[n("content-header",[t._v(t._s(t.$t("Latest transactions and blocks")))]),t._v(" "),t.priceChart?n("section",{staticClass:"hidden md:block mb-5 bg-theme-feature-background xl:rounded-lg"},[n("chart-wrapper")],1):t._e(),t._v(" "),n("section",{staticClass:"page-section py-5 md:py-10"},[n("nav",{staticClass:"mx-5 sm:mx-10 mb-8 border-b flex items-end"},[n("div",{class:"transactions"===t.dataView?"active-tab":"inactive-tab",on:{click:function(e){t.dataView="transactions"}}},[t._v("\n        "+t._s(t.$t("Latest Transactions"))+"\n      ")]),t._v(" "),n("div",{class:"blocks"===t.dataView?"active-tab":"inactive-tab",on:{click:function(e){t.dataView="blocks"}}},[t._v("\n        "+t._s(t.$t("Latest Blocks"))+"\n      ")])]),t._v(" "),"transactions"===t.dataView?n("latest-transactions"):t._e(),t._v(" "),"blocks"===t.dataView?n("latest-blocks"):t._e()],1)],1)},[],!1,null,null,null);e.default=A.exports}}]);
//# sourceMappingURL=2.4ff58a0de8e3fd7ba243.js.map