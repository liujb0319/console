webpackJsonp([81],{"/SGK":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"content-title"},[t._v("\n    健康检查：service-caller\n  ")]),t._v(" "),a("el-row",{staticClass:"mt20",attrs:{gutter:10}},[a("el-col",{staticClass:"tips width322"},[t._v("使用就绪探针和存活探针对容器健康状态进行周期性检查。")]),t._v(" "),a("el-col",{staticClass:"ft12 ml10 bluewords mt3",attrs:{span:3}},[t._v("点击了解更多")])],1),t._v(" "),a("el-row",{directives:[{name:"show",rawName:"v-show",value:t.show1,expression:"show1"}],staticClass:"health-content2",attrs:{flex:"cross:center"}},[a("el-col",{staticClass:"health-title width66"},[t._v("就绪探针")]),t._v(" "),a("el-col",{staticClass:"tips",attrs:{span:14}},[t._v("\n      就绪探针检车容器是否已经准备好处理请求，\n      如果探针失败，意味着这个容器不能接收任何流量，\n      即使该容器处于运行状态\n    ")])],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[a("div",{staticClass:"mt20"},[a("el-row",{attrs:{gutter:0}},[a("el-col",{attrs:{span:2}},[a("div",{staticClass:"health-title-middle"},[t._v("类型：")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-select",{staticStyle:{width:"100%"},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1)],1),t._v(" "),1==t.value?a("div",[a("el-form",[a("div",{staticClass:"mt20"},[a("el-row",{attrs:{gutter:0}},[a("el-col",{attrs:{span:2}},[a("div",{staticClass:"health-title-middle"},[t._v("路径：")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"请输入内容"}})],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"mt10"},[a("el-row",{attrs:{gutter:0}},[a("el-col",{attrs:{span:2}},[a("div",{staticClass:"health-title-middle"},[t._v("端口：")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:t.value1,callback:function(s){t.value1=s},expression:"value1"}},t._l(t.options2,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"mt10"},[a("el-row",{attrs:{gutter:0}},[a("el-col",{attrs:{span:2}},[a("div",{staticClass:"health-title-middle"},[t._v("初始延迟：")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticClass:"form-item-bottom"},[a("el-input",{attrs:{placeholder:"请输入内容"}})],1)],1),t._v(" "),a("el-col",{staticClass:"health-middle",attrs:{span:1}},[a("div",[t._v("秒")])])],1)],1),t._v(" "),a("div",[a("el-col",{attrs:{offset:2,span:22}},[a("div",{staticClass:"tips margin10"},[t._v("容器启动后进行健康检查前的延迟时间")])])],1),t._v(" "),a("div",{staticClass:"mt20"},[a("el-row",{attrs:{gutter:0}},[a("el-col",{attrs:{span:2}},[a("div",{staticClass:"health-title-middle"},[t._v("超时：")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticClass:"form-item-bottom"},[a("el-input",{attrs:{placeholder:"请输入内容"}})],1)],1),t._v(" "),a("el-col",{staticClass:"health-middle",attrs:{span:1}},[a("div",[t._v("秒")])])],1)],1),t._v(" "),a("div",[a("el-col",{attrs:{offset:2,span:22}},[a("div",{staticClass:"tips margin10"},[t._v("探针运行的超时时间，超时认为失败")])])],1)])],1):t._e(),t._v(" "),2==t.value?a("div",[a("el-form",[a("div",{staticClass:"mt20"},[a("el-row",{attrs:{gutter:0}},[a("el-col",{attrs:{span:2}},[a("div",{staticClass:"health-title-middle"},[t._v("命令：")])]),t._v(" "),a("el-col",{attrs:{span:10}},[a("el-form-item",{staticClass:"form-item-bottom"},[a("el-input",{attrs:{placeholder:"请输入内容"}})],1)],1),t._v(" "),a("el-col",{directives:[{name:"show",rawName:"v-show",value:t.show3,expression:"show3"}],attrs:{span:2}},[a("el-button",{staticClass:"shade-button ml20"},[t._v("添加")])],1),t._v(" "),a("el-col",{directives:[{name:"show",rawName:"v-show",value:t.show2,expression:"show2"}],attrs:{span:2}},[a("i",{staticClass:"el-icon-close"})])],1)],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.show2,expression:"show2"}]},[a("el-row",[a("el-col",{attrs:{offset:2,span:10}},[a("el-form-item",{staticClass:"form-item-bottom"},[a("textarea",{staticClass:"my-textArea width500",attrs:{rows:6}})])],1)],1)],1),t._v(" "),a("div",[a("el-col",{attrs:{offset:2,span:22}},[a("div",{staticClass:"tips margin10"},[t._v("输入在容器中运行的命令，该命令运行后如果退出码是0，则认为成功，需要重新排列命令参数，可以使用拖动和删除")])])],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.show3,expression:"show3"}]},[a("el-row",[a("el-col",{attrs:{offset:2,span:4}},[a("span",{staticClass:"bluewords ft14",on:{click:function(s){t.showBig()}}},[t._v("切换到多行编辑器")])])],1)],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.show2,expression:"show2"}]},[a("el-row",[a("el-col",{attrs:{offset:2,span:4}},[a("span",{staticClass:"bluewords ft14",on:{click:function(s){t.deleteBig()}}},[t._v("切换到单行编辑器")])])],1)],1),t._v(" "),a("div",{staticClass:"mt10"},[a("el-row",{attrs:{gutter:0}},[a("el-col",{attrs:{span:2}},[a("div",{staticClass:"health-title-middle"},[t._v("初始延迟：")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticClass:"form-item-bottom"},[a("el-input",{attrs:{placeholder:"请输入内容"}})],1)],1),t._v(" "),a("el-col",{staticClass:"health-middle",attrs:{span:1}},[a("div",[t._v("秒")])])],1)],1),t._v(" "),a("div",[a("el-col",{attrs:{offset:2,span:22}},[a("div",{staticClass:"tips margin10"},[t._v("容器启动后进行健康检查前的延迟时间")])])],1),t._v(" "),a("div",{staticClass:"mt20"},[a("el-row",{attrs:{gutter:0}},[a("el-col",{attrs:{span:2}},[a("div",{staticClass:"health-title-middle"},[t._v("超时：")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticClass:"form-item-bottom"},[a("el-input",{attrs:{placeholder:"请输入内容"}})],1)],1),t._v(" "),a("el-col",{staticClass:"health-middle",attrs:{span:1}},[a("div",[t._v("秒")])])],1)],1),t._v(" "),a("div",[a("el-col",{attrs:{offset:2,span:22}},[a("div",{staticClass:"tips margin10"},[t._v("探针运行的超时时间，超时认为失败")])])],1)])],1):t._e(),t._v(" "),3==t.value?a("div",[a("el-form",[a("div",{staticClass:"mt20"},[a("el-row",{attrs:{gutter:0}},[a("el-col",{attrs:{span:2}},[a("div",{staticClass:"health-title-middle"},[t._v("端口：")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:t.value1,callback:function(s){t.value1=s},expression:"value1"}},t._l(t.options2,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"mt10"},[a("el-row",{attrs:{gutter:0}},[a("el-col",{attrs:{span:2}},[a("div",{staticClass:"health-title-middle"},[t._v("初始延迟：")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticClass:"form-item-bottom"},[a("el-input",{attrs:{placeholder:"请输入内容"}})],1)],1),t._v(" "),a("el-col",{staticClass:"health-middle",attrs:{span:1}},[a("div",[t._v("秒")])])],1)],1),t._v(" "),a("div",[a("el-col",{attrs:{offset:2,span:22}},[a("div",{staticClass:"tips margin10"},[t._v("容器启动后进行健康检查前的延迟时间")])])],1),t._v(" "),a("div",{staticClass:"mt20"},[a("el-row",{attrs:{gutter:0}},[a("el-col",{attrs:{span:2}},[a("div",{staticClass:"health-title-middle"},[t._v("超时：")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticClass:"form-item-bottom"},[a("el-input",{attrs:{placeholder:"请输入内容"}})],1)],1),t._v(" "),a("el-col",{staticClass:"health-middle",attrs:{span:1}},[a("div",[t._v("秒")])])],1)],1),t._v(" "),a("div",[a("el-col",{attrs:{offset:2,span:22}},[a("div",{staticClass:"tips margin10"},[t._v("探针运行的超时时间，超时认为失败")])])],1)])],1):t._e()]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.show1,expression:"show1"}],staticClass:"health-add",on:{click:function(s){t.AddDownShot()}}},[a("i",{staticClass:"el-icon-plus"}),t._v(" "),a("span",{staticClass:"blue2Color"},[t._v("\n      添加就绪探针\n    ")])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"health-add margintop40",on:{click:function(s){t.deleteShot()}}},[a("i",{staticClass:"el-icon-minus"}),t._v(" "),a("span",{staticClass:"blue2Color"},[t._v("\n      移除就绪探针\n    ")])]),t._v(" "),a("div",{staticClass:"health-line"}),t._v(" "),a("el-row",{attrs:{flex:"cross:center"}},[a("el-col",{staticClass:"health-title width66"},[t._v("存活探针")]),t._v(" "),a("el-col",{staticClass:"tips",attrs:{span:10}},[t._v("\n      存活探针检查容器是否处于运行状态，\n      如果存活探针检查失败，该容器会被杀掉\n    ")])],1),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"health-line1"}),t._v(" "),a("el-button",{staticClass:"health-button mt30"},[t._v("保存")]),t._v(" "),a("el-button",{staticClass:"health-button1 mt30 shade-button"},[t._v("取消")])],1)},l=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"health-add"},[a("i",{staticClass:"el-icon-plus"}),t._v(" "),a("span",{staticClass:"blue2Color"},[t._v("\n      添加存活探针\n    ")])])}],i={render:e,staticRenderFns:l};s.a=i},H64J:function(t,s,a){var e=a("lz8s");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a("XkoO")("58ea7420",e,!0)},IeW0:function(t,s,a){"use strict";var e=a("4YfN"),l=a.n(e),i=a("lQSI");s.a={props:{},created:function(){this.change(this.$route.path)},ready:function(){},data:function(){return{options:[{value:"1",label:"HTTP"},{value:"2",label:"Container Command"},{value:"3",label:"Tcp Socket"}],options2:[{value:"4",label:"8080"},{value:"5",label:"8081"},{value:"6",label:"8087"}],value:"1",value1:"8080",show:!1,show1:!0,show2:!1,show3:!0}},components:{},filters:{},methods:l()({},a.i(i.c)(["change"]),{AddDownShot:function(){this.show=!0,this.show1=!1,console.log(this.show)},deleteShot:function(){this.show=!1,this.show1=!0},showBig:function(){console.log("111"),this.show2=!0,this.show3=!1},deleteBig:function(){this.show2=!1,this.show3=!0}}),computed:{},watch:{}}},lz8s:function(t,s,a){s=t.exports=a("YfG4")(!1),s.push([t.i,".health-content2[data-v-1f3bdc4b]{margin-top:30px;font-size:12px}.health-title[data-v-1f3bdc4b]{font-size:16px;margin-right:20px}.health-add[data-v-1f3bdc4b]{margin-bottom:20px;margin-top:20px;cursor:pointer;width:120px}.health-line[data-v-1f3bdc4b]{margin-bottom:20px}.health-line1[data-v-1f3bdc4b],.health-line[data-v-1f3bdc4b]{border-bottom:1px dashed #e5e5e5}.health-button[data-v-1f3bdc4b]{background:#ff9832;color:#fff;width:120px}.health-button1[data-v-1f3bdc4b]{width:120px}.health-title-middle[data-v-1f3bdc4b]{margin-top:9px;margin-right:10px;text-align:right;font-size:14px;color:#333}.health-middle[data-v-1f3bdc4b]{margin-top:9px;padding-left:20px;font-size:14px;color:#333}.el-icon-close[data-v-1f3bdc4b]{margin-top:10px;padding-left:10px;color:#dfdfdf}.margintop40[data-v-1f3bdc4b]{margin-top:30px!important}.width500[data-v-1f3bdc4b]{width:500px!important}.width66[data-v-1f3bdc4b]{width:66px}.width322[data-v-1f3bdc4b]{width:322px}",""])},nzSL:function(t,s,a){"use strict";function e(t){a("H64J")}Object.defineProperty(s,"__esModule",{value:!0});var l=a("IeW0"),i=a("/SGK"),o=a("J0+h"),r=e,c=o(l.a,i.a,r,"data-v-1f3bdc4b",null);s.default=c.exports}});