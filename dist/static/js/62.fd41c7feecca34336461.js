webpackJsonp([62],{"3cXf":function(t,e,a){t.exports={default:a("I4CF"),__esModule:!0}},I4CF:function(t,e,a){var n=a("0nnt"),i=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}},M2uV:function(t,e,a){"use strict";var n=a("4YfN"),i=a.n(n),r=a("3cXf"),l=a.n(r),s=a("lQSI");e.a={props:{},created:function(){},ready:function(){this.template=JSON.parse(l()(this.template))},data:function(){return{tableKey:0,listLoading:!1,template:{},list:10,total:100,listQuery:{page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"},tableData:[]}},beforeMount:function(){var t=this;console.log(t.$route),this.$ajax.get(this.$httpConfig.routes.replace("{projectName}",t.$route.params.disName)).then(function(e){console.log(e.data);for(var a=0;a<e.data.items.length;a++){var n=e.data.items[a];t.tableData.push({name:n.metadata.name,hostname:"https://"+n.spec.host,port:n.spec.to.name,desport:n.spec.port?n.spec.port.targetPort:"",terminal:""})}}).catch(function(t){console.log(t)})},components:{},filters:{},methods:{createRouter:function(){this.$router.push({name:"创建路由"})},handleClick:function(t,e,a){this.$router.push({name:"路由详情",query:{route:t.name}})},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()}},computed:i()({},a.i(s.b)(["localpath"])),watch:{}}},b5vs:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[t.$route.path!=t.localpath?a("div",[a("el-row",{staticClass:"fr",attrs:{gutter:20}},[a("el-col",{},[a("div",{staticClass:"input-btn"},[a("el-input",{attrs:{placeholder:"按标签过滤"}}),t._v(" "),a("el-button",{staticClass:"ml10"},[t._v("过滤")]),t._v(" "),a("el-button",{staticClass:"height45",attrs:{type:"primary"},on:{click:t.createRouter}},[t._v("创建路由")])],1)])],1),t._v(" "),a("div",{staticClass:"clearfix"}),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.tableData,"element-loading-text":"给我一点时间",stripe:"","highlight-current-row":""},on:{"current-change":t.handleClick}},[a("el-table-column",{attrs:{prop:"name",label:"名称",width:"180","header-align":"center",align:"center","class-name":"blue-color"}}),t._v(" "),a("el-table-column",{attrs:{prop:"hostname",label:"主机名",width:"250","header-align":"center",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"port",label:"端口","header-align":"center",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"desport",label:"目标端口","header-align":"center",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"terminal",label:"TLS终端","header-align":"center",align:"center"}})],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.listQuery.page=e}}})],1)],1):t._e(),t._v(" "),a("router-view")],1)},i=[],r={render:n,staticRenderFns:i};e.a=r},eGkF:function(t,e,a){var n=a("gd7Q");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("XkoO")("d147cf54",n,!0)},gd7Q:function(t,e,a){e=t.exports=a("YfG4")(!1),e.push([t.i,"",""])},ni9k:function(t,e,a){"use strict";function n(t){a("eGkF")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("M2uV"),r=a("b5vs"),l=a("J0+h"),s=n,o=l(i.a,r.a,s,"data-v-b87892ba",null);e.default=o.exports}});