webpackJsonp([41],{"1+W3":function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"el-color-svpanel",style:{backgroundColor:e.background}},[a("div",{staticClass:"el-color-svpanel__white"}),e._v(" "),a("div",{staticClass:"el-color-svpanel__black"}),e._v(" "),a("div",{staticClass:"el-color-svpanel__cursor",style:{top:e.cursorTop+"px",left:e.cursorLeft+"px"}},[a("div")])])},n=[],s={render:o,staticRenderFns:n};t.a=s},"3cXf":function(e,t,a){e.exports={default:a("I4CF"),__esModule:!0}},"4MU/":function(e,t,a){"use strict";var o=a("JBPR"),n=a("1+W3"),s=a("J0+h"),r=s(o.a,n.a,null,null,null);t.a=r.exports},"4Xi6":function(e,t,a){t=e.exports=a("YfG4")(!1),t.push([e.i,".span-color[data-v-058ef6a2]{color:#009ee0}",""])},I4CF:function(e,t,a){var o=a("0nnt"),n=o.JSON||(o.JSON={stringify:JSON.stringify});e.exports=function(e){return n.stringify.apply(n,arguments)}},Ijym:function(e,t,a){"use strict";var o=a("UFcW"),n=!1;t.a=function(e,t){if(!o.default.prototype.$isServer){var a=function(e){t.drag&&t.drag(e)},s=function e(o){document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",e),document.onselectstart=null,document.ondragstart=null,n=!1,t.end&&t.end(o)};e.addEventListener("mousedown",function(e){n||(document.onselectstart=function(){return!1},document.ondragstart=function(){return!1},document.addEventListener("mousemove",a),document.addEventListener("mouseup",s),n=!0,t.start&&t.start(e))})}}},J24e:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.loaded?a("div",[e.deleted?a("el-alert",{attrs:{title:"警告",type:"warning",description:"此镜像已经被删除。","show-icon":""}}):e._e(),e._v(" "),e.haveError?a("el-alert",{attrs:{title:"错误",type:"error",description:e.errorMessage,"show-icon":""},on:{close:function(e){}}}):e._e(),e._v(" "),a("el-row",{staticClass:"detail-title"},[a("el-col",{attrs:{span:14}},[a("div",[a("div",{staticClass:"f18 "},[e._v(e._s(e.data.metadata.name))]),e._v(" "),a("div",{staticClass:"mt10 f12 color6"},[e._v("创建于"+e._s(e.data.timeago))]),e._v(" "),a("div",{staticClass:"mt10 f16 color3"},[e._v("镜像仓库："+e._s(e.data.status.dockerImageRepository))])])]),e._v(" "),a("el-col",{staticClass:"tr",attrs:{span:10}},[a("div",{staticClass:"inner-element mt20"},[a("el-select",{staticClass:"ml10 selectwh110",attrs:{placeholder:"操作"},on:{change:function(t){e.handleSelect(e.value)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)])],1),e._v(" "),a("div",{staticClass:"mt20"},[a("el-table",{key:e.tableKey,staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableData,stripe:"","highlight-current-row":""},on:{"cell-click":e.handleClick}},[a("el-table-column",{attrs:{prop:"tag",label:"Tag",width:"180","header-align":"center",align:"center","class-name":"blue-color"}}),e._v(" "),a("el-table-column",{attrs:{prop:"creationTimestamp",label:"创建时间",width:"250","header-align":"center",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"latestDockerImage",label:"最新镜像","header-align":"center",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"latestDockerImageReference",label:"最新镜像信息","header-align":"center",align:"center"}})],1)],1)],1):a("div",[e._m(0)])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"text-align":"center","line-height":"250px"}},[a("i",{staticClass:"el-icon-loading",staticStyle:{"font-size":"20px"}}),a("span",[e._v(" 加载中······")])])}],s={render:o,staticRenderFns:n};t.a=s},JBPR:function(e,t,a){"use strict";var o=a("Ijym");t.a={name:"el-sl-panel",props:{color:{required:!0}},computed:{colorValue:function(){return{hue:this.color.get("hue"),value:this.color.get("value")}}},watch:{colorValue:function(){this.update()}},methods:{update:function(){var e=this.color.get("saturation"),t=this.color.get("value"),a=this.$el,o=a.getBoundingClientRect(),n=o.width,s=o.height;s||(s=3*n/4),this.cursorLeft=e*n/100,this.cursorTop=(100-t)*s/100,this.background="hsl("+this.color.get("hue")+", 100%, 50%)"},handleDrag:function(e){var t=this.$el,a=t.getBoundingClientRect(),o=e.clientX-a.left,n=e.clientY-a.top;o=Math.max(0,o),o=Math.min(o,a.width),n=Math.max(0,n),n=Math.min(n,a.height),this.cursorLeft=o,this.cursorTop=n,this.color.set({saturation:o/a.width*100,value:100-n/a.height*100})}},mounted:function(){var e=this;a.i(o.a)(this.$el,{drag:function(t){e.handleDrag(t)},end:function(t){e.handleDrag(t)}}),this.update()},data:function(){return{cursorTop:0,cursorLeft:0,background:"hsl(0, 100%, 50%)"}}}},VdFb:function(e,t,a){var o=a("4Xi6");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a("XkoO")("972c0944",o,!0)},WEnm:function(e,t,a){"use strict";var o=a("3cXf"),n=a.n(o),s=a("4YfN"),r=a.n(s),i=a("4MU/"),l=a("l18b"),c=a("lQSI");t.a={props:{},created:function(){console.log("created"),console.log(this.$route.path),this.change(this.$route.path)},ready:function(){console.log("ready")},data:function(){return{tableKey:0,loaded:!1,imageStream:{},data:{},tableData:[],deleted:!1,haveError:!1,errorMessage:"",value:"1",options:[{value:"1",label:"操作"},{value:"2",label:"编辑YAML"},{value:"3",label:"删除"}],annotations:[]}},beforeMount:function(){this.load()},components:{ElButton:l.a,ElSlPanel:i.a},filters:{},methods:r()({},a.i(c.c)(["change"]),{load:function(){var e=this;this.$ajax.get(this.$httpConfig.image_detail.replace("{projectName}",e.$route.params.disName).replace("{imageName}",e.$route.query.imageName)).then(function(t){e.loaded=!0,e.imageStream=t.data,e.setValueToPage(),e.$ajax.get(e.$httpConfig.images.replace("{projectName}",e.$route.params.disName)).then(function(t){e.updateByServer(t.data.metadata.selfLink,e.$token,t.data.metadata.resourceVersion)}).catch(function(e){console.log(e)})}).catch(function(e){console.log(e)})},setValueToPage:function(){var e=this.imageStream;if(this.tableData=[],e.timeago=this.timeago.format(e.metadata.creationTimestamp,"zh_CN"),e.status.tags&&e.status.tags.length>0)for(var t in e.status.tags){var a=e.status.tags[t];this.tableData.push({latestDockerImage:a.items[0].image,tag:a.tag,latestDockerImageReference:a.items[0].dockerImageReference,creationTimestamp:this.timeago.format(a.items[0].created,"zh_CN")})}for(var o in e.metadata.annotations)this.annotations.push({key:o,value:e.metadata.annotations[o]});this.$set(this,"data",e)},updateByServer:function(e,t,a){var o=this,n=this.$httpConfig.socketHost+e+"?access_token="+t+"&watch=true&resourceVersion="+a;console.log(n);var s=new WebSocket(n);s.onmessage=function(e){var t=JSON.parse(e.data);t.type&&"DELETED"===t.type?"ImageStream"===t.object.kind&&o.imageStream.metadata.name===t.object.metadata.name&&(o.deleted=!0):t.type&&"MODIFIED"===t.type&&"ImageStream"===t.object.kind&&o.imageStream.metadata.name===t.object.metadata.name&&(o.imageStream.metadata=t.object.metadata,o.imageStream.spec=t.object.spec,o.imageStream.status=t.object.status)},s.onerror=function(e){console.log("[onerror]"),console.log(e)},s.onopen=function(e){console.log("[onopen]"),console.log(e)},s.onclose=function(){console.log("[onclose]")}},handleSelect:function(e){var t=this;if("2"===e)console.log(this.$route.query.imageName),this.$router.push({name:"编辑YAML",query:{estate:1,image:this.$route.query.imageName}});else if("3"===e){this.haveError=!1;var a=this;this.$confirm("此操作将永久删除镜像"+this.$route.query.imageName+", 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$ajax.delete(t.$httpConfig.image_detail.replace("{projectName}",a.$route.params.disName).replace("{imageName}",a.$route.query.imageName)).then(function(e){console.log(n()(e)),"Status"===e.data.kind&&"Failure"===e.data.status&&"200"!==e.data.code?(a.haveError=!0,a.errorMessage="此镜像无法删除。原因："+e.data.message,a.value="1"):(a.$message({type:"success",message:"删除成功!"}),a.$router.go(-1))}).catch(function(e){console.log(e),this.value="1",a.$message({type:"error",message:"删除失败!"})})}).catch(function(){a.value="1",a.$message({type:"info",message:"已取消删除"})})}},handleClick:function(e,t,a,o){"Tag"===t.label&&this.$router.push({name:"镜像历史",query:{imageName:this.data.metadata.name,tag:e.tag}})}}),computed:{},watch:{imageStream:{handler:function(e){console.log("imageStream change"),this.setValueToPage()},deep:!0}}}},rGU1:function(e,t,a){"use strict";function o(e){a("VdFb")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("WEnm"),s=a("J24e"),r=a("J0+h"),i=o,l=r(n.a,s.a,i,"data-v-058ef6a2",null);t.default=l.exports}});