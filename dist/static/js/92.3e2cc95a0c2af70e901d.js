webpackJsonp([92],{"4fic":function(t,e,a){var l=a("y5x6");"string"==typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);a("XkoO")("e0989792",l,!0)},"5Cvj":function(t,e,a){"use strict";function l(t){a("4fic")}Object.defineProperty(e,"__esModule",{value:!0});var s=a("FrpP"),i=a("kwAm"),n=a("J0+h"),c=l,v=n(s.a,i.a,c,"data-v-5cb37f07",null);e.default=v.exports},FrpP:function(t,e,a){"use strict";var l=a("4YfN"),s=a.n(l),i=a("lQSI");e.a={props:{},created:function(){this.change(this.$route.path)},beforeMount:function(){this.loadDetail(this.$route.query.name)},ready:function(){},data:function(){return{activeName:"first",value:"1",options2:[{value:"1",label:"操作"},{value:"2",label:"修改构建"},{value:"3",label:"构建历史"}],tableData:[]}},components:{},filters:{},methods:s()({loadDetail:function(t){var e=this,a="http://localhost:9589/static/dummy-data/codebuilds/builds/build-detail-vue-loaddetail-"+t+".json";this.$ajax.get(a).then(function(t){200==t.status&&(e.tableData=t.data.tableData)}).catch(function(t){console.log(t)})}},a.i(i.c)(["change"]),{handleClick:function(t,e){},actionEvent:function(t){2==t?this.$router.push({name:"修改构建"}):this.$router.push({name:"构建历史"})}}),computed:{},watch:{}}},kwAm:function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{staticClass:"detail-title",attrs:{justify:"space-between",align:"middle"}},[a("el-col",{attrs:{span:14}},[a("div",{staticClass:"f18"},[t._v("Cakephp-mysql-example")]),t._v(" "),a("div",{staticClass:"mt10 f13 color6"},[t._v("基本信息")]),t._v(" "),a("div",{staticClass:"mt10 f13 color6"},[a("span",[t._v("最新构建：#2")]),t._v(" "),a("span",{staticClass:"ml20"},[t._v("最新构建日志：9987")]),t._v(" "),a("span",{staticClass:"ml20"},[t._v("最新更新时间：2017-09-08 10:11")])])]),t._v(" "),a("el-col",{staticClass:"  tr btn110 inner-element",staticStyle:{"margin-top":"20px"},attrs:{span:10}},[a("el-button",{attrs:{type:"primary"}},[t._v("开始构建")]),t._v(" "),a("div",{staticClass:"ml20 selectwh110"},[a("el-select",{attrs:{placeholder:"操作"},on:{change:function(e){t.actionEvent(t.value)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options2,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1)],1),t._v(" "),a("div",{staticClass:"mt20 "},[a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"构建历史",name:"first"}},[a("div",{staticClass:"mt20"},[a("el-row",[a("el-col",{staticClass:"input-btn",attrs:{span:24}},[a("el-input",{attrs:{placeholder:"按名称搜索"}}),t._v(" "),a("el-button",{staticClass:"shade-button ml10"},[t._v("搜索")])],1)],1),t._v(" "),a("div",{staticClass:"mid-table mt20"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"date",label:"构建编号",width:"150",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"状态",width:"150",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"创建时间",align:"center"}})],1)],1)],1)]),t._v(" "),a("el-tab-pane",{attrs:{label:"构建配置",name:"second"}},[a("el-row",{staticClass:"mt20"},[a("el-col",{staticClass:"build-el"},[a("div",{staticClass:"build-eltop"},[t._v("配置")]),t._v(" "),a("div",{staticClass:"build-elcon"},[a("div",[a("span",{staticClass:"dede"},[t._v("代码源：")]),t._v(" "),a("span",[t._v("https://github.com/openshift/ded/but-service")])]),t._v(" "),a("div",[a("span",[t._v("构建镜像：")]),t._v(" "),a("span",[t._v("openshift/php:latest")])]),t._v(" "),a("div",[a("span",[t._v("应用镜像：")]),t._v(" "),a("span",[t._v("microssservice/service-caller:lateast")])]),t._v(" "),a("div",[a("span",[t._v("运行策略：")]),t._v(" "),a("span",[t._v("Serial")])])])]),t._v(" "),a("el-col",{staticClass:"ml20 build-el"},[a("div",{staticClass:"build-eltop"},[t._v("触发")]),t._v(" "),a("div",{staticClass:"build-elcon build-elcon1"},[a("div",[a("span",[t._v("GitHub Webhook： ")])]),t._v(" "),a("div",[a("span",[t._v("https：//openshift-cluster.example.com:4343dededejfhr /microssservice/service-caller:lateastdejfrd/dehfrug hufhuhgrigrggrrerrrerre/\n                ")])]),t._v(" "),a("div",[a("span",[t._v("配置更改：")]),t._v(" "),a("span",[t._v("Build config service-caller")])]),t._v(" "),a("div",[a("span",[t._v("手工CLI命令：")]),t._v(" "),a("span",[t._v("oc start-build service-caller -n microssservice")])])])])],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:"环境变量",name:"third"}},[a("el-row",{staticClass:"inner-element mt10"},[a("div",[t._v("环境变量：")]),t._v(" "),a("div",{staticClass:"wh350 ml10"},[a("el-input",{attrs:{value:"APP"}})],1),t._v(" "),a("div",{staticClass:"wh350 ml20"},[a("el-input",{attrs:{value:"PYTHON"}})],1),t._v(" "),a("div",{staticClass:"pluse ml20"},[t._v(" + ")]),t._v(" "),a("div",{staticClass:"delete-default ml20"},[t._v(" × ")])]),t._v(" "),a("el-row",{staticClass:"inner-element  mt10"},[a("div",[t._v("环境变量：")]),t._v(" "),a("div",{staticClass:"wh350 ml10"},[a("el-input",{attrs:{value:"APP"}})],1),t._v(" "),a("div",{staticClass:"wh350 ml20"},[a("el-input",{attrs:{value:"PYTHON"}})],1),t._v(" "),a("div",{staticClass:"pluse-default ml20"},[t._v(" + ")]),t._v(" "),a("div",{staticClass:"delete ml20"},[t._v(" × ")])]),t._v(" "),a("div",{staticClass:"btn110 mt40 ml85"},[a("el-button",{attrs:{type:"primary"}},[t._v(" 保存 ")]),t._v(" "),a("el-button",[t._v(" 取消 ")])],1)],1)],1)],1)],1)},s=[],i={render:l,staticRenderFns:s};e.a=i},y5x6:function(t,e,a){e=t.exports=a("YfG4")(!1),e.push([t.i,".build-el[data-v-5cb37f07]{border:1px solid #e5e5e5;width:48%}.build-el .build-eltop[data-v-5cb37f07]{background:-webkit-gradient(linear,left top,left bottom,from(#f7f7f7),to(#fff));background:linear-gradient(180deg,#f7f7f7,#fff);height:35px;line-height:35px;text-align:center;border-bottom:1px solid #e5e5e5}.build-el .build-elcon[data-v-5cb37f07]{padding:20px}.build-el .build-elcon.build-elcon1[data-v-5cb37f07]{padding-top:10px}.build-el .build-elcon div span[data-v-5cb37f07]{line-height:2}.width70[data-v-5cb37f07]{width:70px}",""])}});