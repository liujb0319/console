webpackJsonp([82],{"75Bf":function(t,e,a){"use strict";var l=a("4YfN"),n=a.n(l),s=a("lQSI");e.a={props:{},created:function(){},ready:function(){},data:function(){return{tableData:[]}},beforeMount:function(){var t=this;console.log(t.$route),this.$ajax.get(this.$httpConfig.deploymentconfigs.replace("{projectName}",t.$route.params.disName)).then(function(e){console.log(e.data);for(var a=0;a<e.data.items.length;a++){var l=e.data.items[a];t.tableData.push({date:l.metadata.name,name:l.status.latestVersion,address:(l.status.replicas>0?"活动中，":"无活动，")+l.status.replicas+"个副本",creattime:t.timeago.format(l.metadata.creationTimestamp,"zh_CN"),handle:l.spec.triggers[0].type})}}).catch(function(t){console.log(t)})},components:{},filters:{},methods:{getdeployDetail:function(t,e,a){this.$router.push({name:"部署详情",query:{deploy:t.date}})}},computed:n()({},a.i(s.b)(["localpath","Icons"])),watch:{}}},Bzem:function(t,e,a){"use strict";function l(t){a("RuYX")}Object.defineProperty(e,"__esModule",{value:!0});var n=a("75Bf"),s=a("yn0P"),o=a("J0+h"),r=l,c=o(n.a,s.a,r,null,null);e.default=c.exports},Q0RZ:function(t,e,a){e=t.exports=a("YfG4")(!1),e.push([t.i,"",""])},RuYX:function(t,e,a){var l=a("Q0RZ");"string"==typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);a("XkoO")("79d43561",l,!0)},yn0P:function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[t.$route.path!=t.localpath?a("div",[a("div",{staticClass:"content-title"},[t._v(" 限制范围")]),t._v(" "),a("el-row",[a("el-col",{staticClass:"tr"},[a("div",{staticClass:"input-btn"},[a("el-input",{attrs:{placeholder:"按名称搜索"}}),t._v(" "),a("el-button",{staticClass:"shade-button ml10"},[t._v("过滤")])],1)])],1),t._v(" "),a("div",{staticClass:"content-container"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData},on:{"cell-click":t.getdeployDetail}},[a("el-table-column",{attrs:{prop:"date",label:"名称",width:"180",align:"center","class-name":"blue-color"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"最新版本",width:"180",align:"center","class-name":"blue-color"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("icon-svg",{attrs:{"icon-class":t.Icons.refreshIcon}}),t._v(" "),a("span",{staticClass:"ml10"},[t._v(t._s(e.row.address))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"creattime",label:"创建时间",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"handle",label:"触发事件",align:"center"}})],1)],1)],1):t._e(),t._v(" "),a("router-view")],1)},n=[],s={render:l,staticRenderFns:n};e.a=s}});