webpackJsonp([97],{"35QV":function(t,a,l){"use strict";function s(t){l("MRM1")}Object.defineProperty(a,"__esModule",{value:!0});var e=l("Q1A8"),i=l("CXmu"),c=l("J0+h"),n=s,r=c(e.a,i.a,n,"data-v-5af22db0",null);a.default=r.exports},Ajhd:function(t,a,l){a=t.exports=l("YfG4")(!1),a.push([t.i,".left[data-v-5af22db0]{width:50px;text-align:right;margin-right:10px}.left120[data-v-5af22db0]{width:120px;text-align:right;margin-right:10px}.ml50[data-v-5af22db0]{margin-left:50px}.ml60[data-v-5af22db0]{margin-left:60px}.ml80[data-v-5af22db0]{margin-left:80px}.ml130[data-v-5af22db0]{margin-left:130px}.ml100[data-v-5af22db0]{margin-left:105px}.width70[data-v-5af22db0]{width:70px}.w290[data-v-5af22db0]{width:290px}.wh98[data-v-5af22db0]{width:98px}.width42[data-v-5af22db0]{width:42px}.ml8[data-v-5af22db0]{margin-left:7px}",""])},CXmu:function(t,a,l){"use strict";var s=function(){var t=this,a=t.$createElement,l=t._self._c||a;return l("div",[l("el-row",{staticClass:"mt20"},[l("el-col",{staticClass:"f14 width70"},[t._v("部署设置：")]),t._v(" "),l("el-col",{staticClass:"ml10",attrs:{span:10}},[l("el-radio",{staticClass:"radio",attrs:{label:"1"},model:{value:t.radio,callback:function(a){t.radio=a},expression:"radio"}},[t._v("使用默认部署设置")]),t._v(" "),l("el-radio",{staticClass:"radio",attrs:{label:"2"},model:{value:t.radio,callback:function(a){t.radio=a},expression:"radio"}},[t._v("自定义部署设置")])],1)],1),t._v(" "),l("div",{staticClass:"mt20"},[l("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[l("el-tab-pane",{attrs:{label:"配置Routing",name:"first"}},[l("el-row",{staticClass:"mt20 ",attrs:{align:"middle"}},[l("el-col",{staticClass:"mt10 left",attrs:{span:1}},[t._v("域名：")]),t._v(" "),l("el-col",{attrs:{span:10}},[l("el-input",{staticClass:"search-input",attrs:{placeholder:"",value:"www.example.com"}})],1)],1),t._v(" "),l("el-row",{staticClass:"mt20 ",attrs:{align:"middle"}},[l("el-col",{staticClass:"mt10 left",attrs:{span:1}},[t._v("路劲：")]),t._v(" "),l("el-col",{attrs:{span:10}},[l("el-input",{staticClass:"search-input",attrs:{placeholder:"",value:"/"}})],1)],1),t._v(" "),l("el-row",{staticClass:"mt20 ",attrs:{align:"top"}},[l("el-col",{staticClass:"mt10 left",attrs:{span:1}},[t._v("端口：")]),t._v(" "),l("el-col",{attrs:{span:10}},[l("el-input",{staticClass:"search-input",attrs:{placeholder:"",value:"8080/TCP"}}),t._v(" "),l("el-checkbox",{staticClass:"mt20",model:{value:t.checked,callback:function(a){t.checked=a},expression:"checked"}},[t._v("支持TLS")])],1)],1),t._v(" "),l("el-row",{staticClass:"btn110 mt20 ml60",attrs:{align:"middle"}},[l("el-button",[t._v("取消")]),t._v(" "),l("el-button",{attrs:{type:"primary"}},[t._v("确定")])],1)],1),t._v(" "),l("el-tab-pane",{attrs:{label:"配置设置",name:"second"}},[l("div",{staticClass:"ml20"},[l("el-checkbox-group",{model:{value:t.checkList,callback:function(a){t.checkList=a},expression:"checkList"}},[l("div",{staticClass:"mt20"},[l("el-checkbox",{attrs:{label:"应用镜像构建后自动触发部署"}})],1),t._v(" "),l("div",{staticClass:"mt20"},[l("el-checkbox",{attrs:{label:"部署配置更改后自动触发部署"}})],1)])],1),t._v(" "),l("div",{staticClass:"mt20"},[l("el-row",{staticClass:"inner-element"},[l("div",[t._v("环境变量：")]),t._v(" "),l("div",{staticClass:"wh350 ml10"},[l("el-input",{attrs:{value:"Name"}})],1),t._v(" "),l("div",{staticClass:"wh350 ml20"},[l("el-input",{attrs:{value:"value"}})],1),t._v(" "),l("div",{staticClass:"pluse ml20"},[t._v(" + ")]),t._v(" "),l("div",{staticClass:"delete-default ml20"},[t._v(" × ")])]),t._v(" "),l("el-row",{staticClass:"inner-element mt10"},[l("div",[t._v("环境变量：")]),t._v(" "),l("div",{staticClass:"wh350 ml10"},[l("el-input",{attrs:{value:"Name"}})],1),t._v(" "),l("div",{staticClass:"wh350 ml20"},[l("el-input",{attrs:{value:"value"}})],1),t._v(" "),l("div",{staticClass:"pluse-default ml20"},[t._v(" + ")]),t._v(" "),l("div",{staticClass:"delete ml20"},[t._v(" × ")])])],1),t._v(" "),l("el-row",{staticClass:"btn110 mt20 ml80 ",attrs:{align:"middle"}},[l("el-button",[t._v("取消")]),t._v(" "),l("el-button",{attrs:{type:"primary"}},[t._v("下一步")])],1)],1),t._v(" "),l("el-tab-pane",{attrs:{label:"Scaling策略配置",name:"third"}},[l("el-row",{staticClass:"mt20 ",attrs:{align:"middle"}},[l("el-col",{staticClass:"left120 mt10",attrs:{span:2}},[t._v("Scaling策略：")]),t._v(" "),l("el-col",{attrs:{span:10}},[l("el-select",{staticClass:"wh350",attrs:{placeholder:""},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}},t._l(t.options,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1),t._v(" "),l("el-row",{staticClass:"mt20 ",attrs:{align:"middle"}},[l("el-col",{staticClass:"mt10 left120",attrs:{span:2}},[t._v("扩展最小Pod数：")]),t._v(" "),l("el-col",{attrs:{span:10}},[l("el-input",{staticClass:"search-input",attrs:{placeholder:"",value:"1"}})],1)],1),t._v(" "),l("el-row",{staticClass:"mt20 ",attrs:{align:"middle"}},[l("el-col",{staticClass:"mt10 left120",attrs:{span:2}},[t._v("扩展最大Pod数：")]),t._v(" "),l("el-col",{attrs:{span:10}},[l("el-input",{staticClass:"search-input",attrs:{placeholder:"",value:"4"}})],1)],1),t._v(" "),l("el-row",{staticClass:"mt20 ",attrs:{align:"middle"}},[l("el-col",{staticClass:"mt10 left120",attrs:{span:2}},[t._v("CPU请求率：")]),t._v(" "),l("el-col",{attrs:{span:10}},[l("el-input",{staticClass:"search-input",attrs:{placeholder:"",value:"80"}})],1)],1),t._v(" "),l("el-row",{staticClass:"btn110 mt20 ml130 ",attrs:{align:"middle"}},[l("el-button",[t._v("取消")]),t._v(" "),l("el-button",{attrs:{type:"primary"}},[t._v("下一步")])],1)],1),t._v(" "),l("el-tab-pane",{attrs:{label:"资源配置",name:"fourth"}},[l("el-row",{staticClass:"mt20",attrs:{align:"middle"}},[l("el-col",{staticClass:"mt10 f16 wh98"},[t._v("CPU请求数：")]),t._v(" "),l("el-col",{staticClass:"ml8",attrs:{span:7}},[l("el-input",{staticClass:"search-input",attrs:{placeholder:""}})],1),t._v(" "),l("el-col",{staticClass:"ml10",attrs:{span:4}},[l("el-select",{staticClass:"wh100",model:{value:t.cpu_request_unit,callback:function(a){t.cpu_request_unit=a},expression:"cpu_request_unit"}},t._l(t.options2,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1),t._v(" "),l("el-row",{staticClass:"mt20",attrs:{align:"middle"}},[l("el-col",{staticClass:"mt10 f16 wh98",attrs:{span:2}},[t._v("CPU限制数：")]),t._v(" "),l("el-col",{staticClass:"ml8",attrs:{span:7}},[l("el-input",{staticClass:"search-input",attrs:{placeholder:""}})],1),t._v(" "),l("el-col",{staticClass:"ml10",attrs:{span:4}},[l("el-select",{staticClass:"wh100",model:{value:t.cpu_request_unit,callback:function(a){t.cpu_request_unit=a},expression:"cpu_request_unit"}},t._l(t.options2,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1),t._v(" "),l("el-row",{staticClass:"mt20",attrs:{align:"middle"}},[l("el-col",{staticClass:"mt10 f16 wh98",attrs:{span:2}},[t._v("内存请求数：")]),t._v(" "),l("el-col",{staticClass:"ml8",attrs:{span:7}},[l("el-input",{staticClass:"search-input",attrs:{placeholder:""}})],1),t._v(" "),l("el-col",{staticClass:"ml10",attrs:{span:4}},[l("el-select",{staticClass:"wh100",model:{value:t.cpu_request_inner,callback:function(a){t.cpu_request_inner=a},expression:"cpu_request_inner"}},t._l(t.optionsInner,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1),t._v(" "),l("el-row",{staticClass:"mt20",attrs:{align:"middle"}},[l("el-col",{staticClass:"mt10 f16 wh98",attrs:{span:2}},[t._v("内存限制数：")]),t._v(" "),l("el-col",{staticClass:"ml8",attrs:{span:7}},[l("el-input",{staticClass:"search-input",attrs:{placeholder:""}})],1),t._v(" "),l("el-col",{staticClass:"ml10",attrs:{span:4}},[l("el-select",{staticClass:"wh100",model:{value:t.cpu_request_inner,callback:function(a){t.cpu_request_inner=a},expression:"cpu_request_inner"}},t._l(t.optionsInner,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1),t._v(" "),l("el-row",{staticClass:"btn110 mt20 ml100 ",attrs:{align:"middle"}},[l("el-button",[t._v("取消")]),t._v(" "),l("el-button",{attrs:{type:"primary"}},[t._v("下一步")])],1)],1),t._v(" "),l("el-tab-pane",{attrs:{label:"标签",name:"fifth"}},[l("div",{staticClass:"mt20"},[l("el-row",{staticClass:"inner-element "},[l("div",[t._v("标签：")]),t._v(" "),l("div",{staticClass:"wh350 ml10"},[l("el-input",{attrs:{value:"APP"}})],1),t._v(" "),l("div",{staticClass:"wh350 ml20"},[l("el-input",{attrs:{value:"PYTHON"}})],1),t._v(" "),l("div",{staticClass:"pluse ml20"},[t._v(" + ")]),t._v(" "),l("div",{staticClass:"delete-default ml20"},[t._v(" × ")])]),t._v(" "),l("el-row",{staticClass:"inner-element  mt10"},[l("div",[t._v("标签：")]),t._v(" "),l("div",{staticClass:"wh350 ml10"},[l("el-input",{attrs:{value:"APP"}})],1),t._v(" "),l("div",{staticClass:"wh350 ml20"},[l("el-input",{attrs:{value:"PYTHON"}})],1),t._v(" "),l("div",{staticClass:"pluse-default ml20"},[t._v(" + ")]),t._v(" "),l("div",{staticClass:"delete ml20"},[t._v(" × ")])])],1),t._v(" "),l("el-row",{staticClass:"btn110 mt40 ml52",attrs:{align:"middle"}},[l("el-button",[t._v(" 取消 ")]),t._v(" "),l("el-button",{attrs:{type:"primary"}},[t._v(" 确定 ")])],1)],1)],1)],1)],1)},e=[],i={render:s,staticRenderFns:e};a.a=i},MRM1:function(t,a,l){var s=l("Ajhd");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);l("XkoO")("230ec6d6",s,!0)},Q1A8:function(t,a,l){"use strict";var s=l("VUvn");a.a={props:{},created:function(){},ready:function(){},data:function(){return{radio:"2",activeName:"first",checked:!1,checkList:[],options:[{value:"1",label:"自动"},{value:"2",label:"手动"}],value:"1",options2:[{value:"milicores",label:"milicores"}],optionsInner:[{value:"MB",label:"MB"}],cpu_request_unit:"milicores",cpu_request_inner:"MB"}},components:{ElCol:s.a},filters:{},methods:{handleClick:function(t,a){}},computed:{},watch:{}}}});