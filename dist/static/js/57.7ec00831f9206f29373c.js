webpackJsonp([57],{"3cXf":function(e,t,a){e.exports={default:a("I4CF"),__esModule:!0}},I4CF:function(e,t,a){var s=a("0nnt"),l=s.JSON||(s.JSON={stringify:JSON.stringify});e.exports=function(e){return l.stringify.apply(l,arguments)}},MqtW:function(e,t,a){var s=a("gWnP");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("XkoO")("2db77794",s,!0)},dDlu:function(e,t,a){"use strict";var s=a("3cXf"),l=a.n(s);t.a={props:{},created:function(){},ready:function(){this.template=JSON.parse(l()(this.template))},data:function(){return{options1:[{value:"1",label:"openshift"},{value:"2",label:"openshift"}],value1:"",options2:[{value:"1",label:"tomcat"},{value:"2",label:"node"}],value2:"",options3:[{value:"1",label:"0.8"},{value:"2",label:"node"}],value3:"",options:[{value:"1",label:"25%"},{value:"2",label:"30%"}],deployMethod:"1",lifeCycle:"4",hide:!1,frontHookHide:!1,seniorSet:"高级选项",frontHook:"添加前生命周期挂钩",containerNames:[{label:"tomcat",value:0},{label:"apache",value:1}],containerValue:0,failCheLues:[{label:"重试",value:0},{label:"调度",value:1}],failCheLueValue:0,lifeCycleHide:!0,show:!0,show1:!1,checkList:[],hide1:!1,show2:!0,mirrorName:"镜像名称："}},components:{},filters:{},methods:{hideSeniorSet:function(){1==this.hide?(this.hide=!1,this.seniorSet="高级选项"):(this.hide=!0,this.seniorSet="隐藏高级选项")},hideFrontHook:function(){1==this.frontHookHide?(this.frontHookHide=!1,this.frontHook="添加部署前钩子"):(this.frontHookHide=!0,this.frontHook="删除部署前钩子")},changeCheck:function(){console.log("111"),console.log(this.checkList),this.show=!this.show,this.show1=!this.show1,"镜像名称："==this.mirrorName?this.mirrorName="镜像变化触发器：":this.mirrorName="镜像名称："},showHighLevel:function(){this.hide1=!0,this.show2=!1},hideHighLevel:function(){this.hide1=!1,this.show2=!0}},computed:{},watch:{}}},e2gS:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"margin-top-20"},[a("el-row",[a("el-col",{staticClass:"f16",attrs:{span:1}},[e._v("镜像")]),e._v(" "),a("el-col",{staticClass:"f12 ml20 color6 mt3",attrs:{span:2}},[e._v("容器tomcat")])],1),e._v(" "),a("div",{staticClass:"mt20"},[a("el-checkbox",{on:{change:function(t){e.changeCheck()}}},[e._v("镜像流标更新后自动触发新的部署")])],1),e._v(" "),a("el-row",{staticClass:"mt20"},[a("el-col",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"width72 mt8"},[e._v(e._s(e.mirrorName))]),e._v(" "),a("el-col",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],attrs:{span:10}},[a("div",{staticClass:"ml10 pods-lot"},[e._v("\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta perferendis qui\n        ")])]),e._v(" "),a("el-col",{directives:[{name:"show",rawName:"v-show",value:e.show1,expression:"show1"}],staticClass:"wh800"},[a("el-col",{staticClass:"mt8 width114"},[e._v(e._s(e.mirrorName))]),e._v(" "),a("el-select",{staticClass:"ml10",attrs:{placeholder:"openshift"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}},e._l(e.options1,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),a("el-select",{staticClass:"ml10",attrs:{placeholder:"tomcat"},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}},e._l(e.options2,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),a("el-select",{staticClass:"ml10",attrs:{placeholder:"0.8"},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}},e._l(e.options3,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),a("div",{staticClass:"mt20"},[a("el-checkbox",[e._v("镜像配置更改后自动触发新的部署")])],1),e._v(" "),a("div",{staticClass:"mt20"},[a("el-checkbox",[e._v("部署配置更新后自动触发新的部署")])],1),e._v(" "),a("div",{staticClass:"mt10",attrs:{flex:""}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.show2,expression:"show2"}],staticClass:"mt10",attrs:{flex:""}},[a("span",{staticClass:"mt10 left"},[e._v("从私有库拉取镜像后若需设置私密凭据，点击"),a("span",{staticClass:"health-link1 left",on:{click:function(t){e.showHighLevel()}}},[e._v(" 高级镜像选项")])])]),e._v(" "),a("el-row",{directives:[{name:"show",rawName:"v-show",value:e.hide1,expression:"hide1"}],staticClass:"mt20",attrs:{flex:""}},[a("el-col",{staticClass:"mt10 left wh100"},[e._v("拉取私密凭据：")]),e._v(" "),a("div",{staticClass:"select350"},[a("el-select",{staticClass:"searchInput ml10",attrs:{placeholder:"25%"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),a("div",{staticClass:"f12  mt20",staticStyle:{"margin-left":"111px"}},[e._v("该私密凭据用于从受保护的镜像库拉取镜像时认证")])],1)],1)],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.hide1,expression:"hide1"}],staticClass:"mt20",staticStyle:{"margin-left":"111px"},attrs:{flex:""}},[a("span",{staticClass:"health-link1 left",staticStyle:{"margin-right":"11px"}},[e._v("创建新的私密凭据")]),a("span",{staticClass:"health-link1 left",on:{click:function(t){e.hideHighLevel()}}},[e._v("隐藏高级选项")])])],1)])},l=[],i={render:s,staticRenderFns:l};t.a=i},fDLW:function(e,t,a){"use strict";function s(e){a("MqtW")}Object.defineProperty(t,"__esModule",{value:!0});var l=a("dDlu"),i=a("e2gS"),o=a("J0+h"),n=s,r=o(l.a,i.a,n,"data-v-f2be2156",null);t.default=r.exports},gWnP:function(e,t,a){t=e.exports=a("YfG4")(!1),t.push([e.i,".health-link1[data-v-f2be2156]{text-decoration:underline;color:#009ee0;cursor:pointer}.select350 .el-select[data-v-f2be2156]{width:350px}.margin-top-20[data-v-f2be2156]{margin-top:20px;margin-bottom:10px}.marginR10[data-v-f2be2156]{margin-right:10px}.width72[data-v-f2be2156]{width:72px}.pods-lot[data-v-f2be2156]{border:1px solid #d3d3d3;padding:10px;border-radius:5px;color:#666;font-size:12px}.width114[data-v-f2be2156]{width:114px}",""])}});