webpackJsonp([65],{"+goA":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[t.$route.path!=t.localpath?a("div",[a("el-row",{staticClass:"fr",attrs:{gutter:20}},[a("el-col",{staticClass:"search-input tr"},[a("el-input",{attrs:{placeholder:"按名称搜索"}})],1),t._v(" "),a("el-col",{staticClass:"wh100"},[a("el-button",{attrs:{type:"primary"}},[t._v("添加")])],1),t._v(" "),a("el-col",{staticClass:"width60 tr"},[a("div",{staticClass:"icon-button"},[a("icon-svg",{attrs:{"icon-class":t.Icons.refreshIconTwo}})],1)])],1),t._v(" "),a("div",{staticClass:"clearfix"}),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticClass:"mt20 container-table",attrs:{data:t.tableData,"element-loading-text":"给我一点时间",stripe:""},on:{"cell-click":t.containerMessages}},[a("el-table-column",{attrs:{prop:"name",label:"名称",width:"180","class-name":"blue-color",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"state",label:"状态",width:"180",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"ready",label:"就绪容器",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"restart",label:"重启容器",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"times",label:"运行时长",align:"center"}})],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.listQuery.page=e}}})],1)],1):t._e(),t._v(" "),a("router-view")],1)},s=[],i={render:n,staticRenderFns:s};e.a=i},"3cXf":function(t,e,a){t.exports={default:a("I4CF"),__esModule:!0}},I4CF:function(t,e,a){var n=a("0nnt"),s=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return s.stringify.apply(s,arguments)}},VDm1:function(t,e,a){var n=a("zZYZ");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("XkoO")("f2c5645c",n,!0)},pHc6:function(t,e,a){"use strict";var n=a("4YfN"),s=a.n(n),i=a("3cXf"),r=a.n(i),o=a("lQSI");e.a={props:{},created:function(){},ready:function(){this.template=JSON.parse(r()(this.template))},data:function(){return{tableKey:0,listLoading:!1,template:{},list:10,total:100,listQuery:{page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"},tableData:[]}},beforeMount:function(){var t=this;console.log(t.$route),this.$ajax.get(this.$httpConfig.pods.replace("{projectName}",t.$route.params.disName)).then(function(e){console.log(e.data);for(var a=0;a<e.data.items.length;a++){var n=e.data.items[a],s=t.getPodPhase(n);t.tableData.push({name:n.metadata.name,state:s.podPhase,ready:s.readyContainers+" / "+s.totalContainers,restart:s.restarts,times:t.timeago.format(n.metadata.creationTimestamp,"age")})}}).catch(function(t){console.log(t)})},components:{},filters:{},methods:{handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},getPodPhase:function(t){var e=t.status.phase,a=0,n=0,s=t.spec.containers.length;null!=t.status.reason&&(e=t.status.reason);for(var i=!1,r=0;r<t.status.initContainerStatuses;r++){var o=t.status.initContainerStatuses[r];a=o.restartCount,null!=o.state.terminated&&0==o.state.terminated.exitCode||(null!=o.state.terminated?(e=0==o.state.terminated.reason.length?0!=o.state.terminated.signal?"Init:Signal:"+o.state.terminated.signal:"Init:ExitCode:"+o.state.terminated.exitCode:"Init:"+o.state.terminated.reason,i=!0):null!=o.state.waiting&&o.state.waiting.reason.length>0&&"PodInitializing"!=o.state.waiting.reason?(e="Init:"+o.state.waiting.reason,i=!0):e="Init: "+r+" "+t.spec.initContainers)}if(!i&&(a=0,null!=t.status.containerStatuses))for(var r=t.status.containerStatuses.length-1;r>=0;r--){var o=t.status.containerStatuses[r];a+=o.restartCount,null!=o.state.waiting&&""!=o.state.waiting.reason?e=o.state.waiting.reason:null!=o.state.terminated&&""!=o.state.terminated.reason?e=o.state.terminated.reason:null!=o.state.terminated&&""==o.state.terminated.reason?e=0!=o.state.terminated.signal?"Signal: "+o.state.terminated.signal:"ExitCode: "+o.state.terminated.exitCode:o.ready&&null!=o.state.running&&n++}return null!=t.deletionTimestamp&&"NodeLost"==t.status.reason?e="Unknown":null!=t.deletionTimestamp&&(e="Terminating"),{podPhase:e,restarts:a,readyContainers:n,totalContainers:s}},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},getList:function(){var t={};api.get("/city.php",t).then(function(t){console.log(t)}).catch(function(t){console.log(t)})},containerMessages:function(t){this.$router.push({name:"容器组pods",query:{project:this.$route.params.disName,pod:t.name}})}},computed:s()({},a.i(o.b)(["localpath","Icons"])),watch:{}}},uafj:function(t,e,a){"use strict";function n(t){a("VDm1")}Object.defineProperty(e,"__esModule",{value:!0});var s=a("pHc6"),i=a("+goA"),r=a("J0+h"),o=n,l=r(s.a,i.a,o,"data-v-c56459ba",null);e.default=l.exports},zZYZ:function(t,e,a){e=t.exports=a("YfG4")(!1),e.push([t.i,".el-button[data-v-c56459ba]{padding:10px 25px}.search-input[data-v-c56459ba]{width:370px}.width60[data-v-c56459ba],button[data-v-c56459ba]{width:80px}",""])}});