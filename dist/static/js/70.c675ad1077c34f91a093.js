webpackJsonp([70],{"8rld":function(t,a,e){"use strict";var o=e("ZLEe"),n=e.n(o),i=e("4YfN"),r=e.n(i),s=e("jCud"),d=e("lQSI");a.a={data:function(){return{delName:448514545,search:"",items:[],userName:this.$route.params.disName,Token:this.$token}},mounted:function(){this.scoket(),this.getData()},computed:r()({searchData:function(){var t=this.search;return t?this.items.filter(function(a){return n()(a).some(function(e){var o=a[e];return"metadata"==e&&(o=String(a[e].name)+String(a[e].annotations["openshift.io/display-name"])+String(a[e].annotations["openshift.io/description"])+String(a[e].annotations["openshift.io/requester"])),String(o).toLowerCase().indexOf(t.toLowerCase())>-1})}):this.items}},e.i(d.b)(["Icons","buildEmpty","accountName"])),beforeMount:function(){this.set_charged()},methods:r()({},e.i(d.c)(["getUserName"]),{set_charged:function(){},scoket:function(){var t=this,a=window.btoa(this.Token),o=a.substr(0,a.length-2);e.i(s.a)({uri:"",socketJsUri:"",host:t.$httpConfig.socketUrl+"watch/projects?watch=true&region=beijing",protocols:["base64url.bearer.authorization.k8s.io."+o,"undefined"],onOpen:function(t){},onMessage:function(a){t.getData()}})},toProducts:function(t){this.$router.push({path:"/products/"+t+"/overview/overview"}),this.getUserName(t)},toEdit:function(t){this.$router.push({name:"edit",params:{editName:t}})},getData:function(){var t=this;this.$ajax({method:"get",url:this.$httpConfig.projects}).then(function(a){a=JSON.parse(a.request.response),t.items=a.items}).catch(function(t){console.log("项目列表获取数据失败",t)})},sort:function(t,a){return t.sort(function(t,e){var o=t[a],n=e[a];return o<n?-1:o>n?1:0})},dele:function(t,a){var e=this;this.$ajax({method:"delete",url:this.$httpConfig.projects_del.replace("{projectName}",a),data:{UserId:this.accountName,ProjectName:a}}).then(function(t){e.delName=a,console.log(t),t.status&&e.getData()}).catch(function(t){console.log("删除后页面刷新失败",t)})},openDele:function(t,a){var e=this;this.$prompt("这将删除与项目"+a+"相关的所有资源,无法撤销。确定删除吗？","确定要删除项目"+a+"吗？",{confirmButtonText:"确定",cancelButtonText:"取消",inputPlaceholder:"请输入项目名称",inputValidator:function(){return $(".el-message-box .el-input__inner").val()==a||"请输入正确的项目名称"}}).then(function(){e.dele(t,a),e.$notify({title:"成功",message:"删除成功！",type:"success"})}).catch(function(){})}})}},EEX1:function(t,a,e){var o=e("LhmL");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e("XkoO")("0ab9cf45",o,!0)},LhmL:function(t,a,e){a=t.exports=e("YfG4")(!1),a.push([t.i,"body[data-v-974d3622],dd[data-v-974d3622],div[data-v-974d3622],dl[data-v-974d3622],dt[data-v-974d3622],form[data-v-974d3622],h1[data-v-974d3622],h2[data-v-974d3622],h3[data-v-974d3622],h4[data-v-974d3622],h5[data-v-974d3622],h6[data-v-974d3622],html[data-v-974d3622],input[data-v-974d3622],ol[data-v-974d3622],p[data-v-974d3622],select[data-v-974d3622],td[data-v-974d3622],textarea[data-v-974d3622],th[data-v-974d3622]{margin:0;padding:0}.console[data-v-974d3622]{min-width:980px;display:auto;color:#fff;font-family:\\\\5FAE\\8F6F\\96C5\\9ED1;font-size:14px}.nav-header[data-v-974d3622]{height:60px;background-color:#444;position:fixed;top:0;left:0;z-index:20;min-width:100vw}.nav-header .icon[data-v-974d3622]{background:url("+e("l1O0")+") no-repeat 0 0;width:130px;height:60px;margin-left:20px;float:left}.nav-header .user_info[data-v-974d3622]{margin-right:40px;float:right;height:60px;line-height:60px}.nav-header .user_info .el-dropdown-link[data-v-974d3622]{margin-right:10px}.nav-header .user_info .help_circled[data-v-974d3622],.nav-header .user_info .user_icon[data-v-974d3622]{background:url("+e("l1O0")+") no-repeat -162px -11px;width:22px;height:22px;float:left}.nav-header .user_info .user_icon[data-v-974d3622]{background-position:-223px -11px}.nav-header .user_info .user_name[data-v-974d3622]{color:#fff;margin-right:10px}.nav-header .user_info .el-icon--right[data-v-974d3622]{color:#aeaeae;margin-left:0}.main[data-v-974d3622]{background-color:#f1f1f1;padding:55px 40px;min-height:calc(100vh - 60px);margin-top:60px}.main .projects-bar[data-v-974d3622]{float:left}.main .projects-bar h1.display-name[data-v-974d3622]{color:red;font-size:24px;padding-top:5px}.main .projects-options[data-v-974d3622]{float:right;margin-bottom:30px}.main .projects-options .el-input[data-v-974d3622]{width:350px;margin-right:10px}.main .projects-options .el_input#el_input[data-v-974d3622]{color:red!important;background-color:pink}.main .projects-options .el-button--default[data-v-974d3622]{border:1px solid #e5e5e5;background:-webkit-gradient(linear,left top,left bottom,from(#f7f7f7),to(#fff));background:linear-gradient(#f7f7f7,#fff);color:#333;margin-right:20px}.main .projects-options .el-button--default[data-v-974d3622]:hover{background:#f7f7f7}.main .projects-options .el-button--primary[data-v-974d3622]{background-color:#ff9832;border:none;font-size:14px;margin:0}.main .projects-options .el-button--primary[data-v-974d3622]:hover{background-color:#fda95f}.main .projects-list[data-v-974d3622]{background-color:#fff;color:#000;width:100%;margin-bottom:20px}.main .projects-list .project-names[data-v-974d3622]{margin-top:28px;margin-left:40px}.main .projects-list .project-names h1[data-v-974d3622]{color:#ff9832;font:30px Arial}.main .projects-list .project-names small[data-v-974d3622]{padding-top:10px;display:inline-block;color:#c5c5c5;font:14px \\\\5FAE\\8F6F\\96C5\\9ED1}.main .projects-list[data-v-974d3622]:hover{background-color:#f8f8f8}.main .project-additional-info[data-v-974d3622]{line-height:120px;padding-left:20px}.main .project-additional-info span[data-v-974d3622]{line-height:20px;display:inline-block;vertical-align:middle;white-space:pre-line;word-wrap:break-word;word-break:break-word;overflow-wrap:break-word}.main .project-actions[data-v-974d3622]{line-height:120px}.main .project-actions i[data-v-974d3622]{width:20px;height:20px;display:inline-block;font-size:20px;margin-right:40px;color:#aeaeae}.main .project-actions i[data-v-974d3622]:hover{color:#ff9832;cursor:pointer}.main .project-actions .keys[data-v-974d3622]{width:20px;height:20px;background:url("+e("l1O0")+") no-repeat;background-position:-2px -78px}.main .project-actions .keys[data-v-974d3622]:hover{background:url("+e("l1O0")+") no-repeat;background-position:-184px -78px}.main .project-number[data-v-974d3622]{height:120px;border-left:1px dashed #f1f1f1;font:48px Arial;margin:0 auto;text-align:center}.main .project-number p[data-v-974d3622]{color:#c5c5c5;line-height:120px;font-size:48px}",""])},VfGG:function(t,a,e){"use strict";function o(t){e("EEX1")}Object.defineProperty(a,"__esModule",{value:!0});var n=e("8rld"),i=e("n7vt"),r=e("J0+h"),s=o,d=r(n.a,i.a,s,"data-v-974d3622",null);a.default=d.exports},jCud:function(t,a,e){"use strict";var o=e("tra3"),n=e.n(o),i=function(t){var a=void 0,e={uri:"#",sockJsUri:"#",host:"",protocols:[],onOpen:function(t){console.log(t)},onMessage:function(t){console.log(t)},onError:function(t){console.log(t)}};return n.a.extend(!0,e,t),a="WebSocket"in window?new WebSocket(""+e.host+e.uri,e.protocols):"MozWebSocket"in window?new MozWebSocket(""+e.host+e.uri,e.protocols):new SockJS("http://"+e.host+e.sockJsUri,e.protocols),a.onopen=function(t){e.onOpen(t)},a.onmessage=function(t){e.onMessage(t)},a.onerror=function(t){e.onError(t)},a};a.a=i},n7vt:function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"console"},[e("div",{staticClass:"main"},[e("div",{staticClass:"projects-header clearfix"},[t._m(0),t._v(" "),e("div",{staticClass:"projects-options"},[e("el-input",{attrs:{placeholder:"按项目名称搜索"},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}}),t._v(" "),e("el-button",[t._v("搜索")]),t._v(" "),e("router-link",{attrs:{to:"project"}},[e("el-button",{attrs:{type:"primary"}},[t._v("创建项目")])],1)],1)]),t._v(" "),t._l(t.searchData,function(a,o){return e("div",{key:o,staticClass:"projects-list clearfix",on:{click:function(e){t.toProducts(a.metadata.name)}}},[e("el-row",[e("el-col",{attrs:{span:10}},[e("div",{staticClass:"project-names"},[e("h1",{staticStyle:{width:"480px","text-overflow":"ellipsis","white-space":"nowrap",overflow:"hidden"}},[t._v("\n\n              "+t._s(a.metadata.annotations["openshift.io/display-name"]||a.metadata.name)+"\n                "),a.metadata.name==t.delName?e("icon-svg",{staticStyle:{color:"red"},attrs:{"icon-class":t.Icons.warn}}):t._e()],1),t._v(" "),e("small",[t._v("\n              "+t._s(a.metadata.name)+" —— "+t._s(a.metadata.annotations["openshift.io/requester"])+" 创建于 "+t._s(t._f("fromNow")(a.metadata.creationTimestamp))+"\n            ")])])]),t._v(" "),e("el-col",{attrs:{span:7}},[e("div",{staticClass:"project-additional-info"},[e("div",{staticClass:"project-description"},[e("span",[t._v(t._s(a.metadata.annotations["openshift.io/description"]))])])])]),t._v(" "),e("el-col",{attrs:{span:5}},[e("div",{staticClass:"project-actions"},[e("div",{staticClass:"fr"},[e("i",{staticClass:"keys"}),t._v(" "),e("i",{staticClass:"el-icon-edit",on:{click:function(e){e.stopPropagation(),t.toEdit(a.metadata.name)}}}),t._v(" "),e("i",{staticClass:"el-icon-delete",on:{click:function(e){e.stopPropagation(),t.openDele(a.metadata.uid,a.metadata.name)}}})])])]),t._v(" "),e("el-col",{attrs:{span:2}},[e("div",{staticClass:"project-number"},[e("p",[t._v(t._s(++o<10?"0"+o:o))])])])],1)],1)})],2)])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"projects-bar"},[e("h1",[t._v("项目列表")])])}],i={render:o,staticRenderFns:n};a.a=i}});