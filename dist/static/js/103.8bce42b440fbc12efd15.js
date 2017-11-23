webpackJsonp([103],{"3BxB":function(t,e,a){"use strict";function s(t){a("9ofc")}Object.defineProperty(e,"__esModule",{value:!0});var o=a("fRmk"),r=a("Qaqq"),i=a("J0+h"),l=s,n=i(o.a,r.a,l,"data-v-7398851c",null);e.default=n.exports},"9ofc":function(t,e,a){var s=a("vA1S");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("XkoO")("1de727fe",s,!0)},Qaqq:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"content-title"},[t._v("创建路由")]),t._v(" "),a("p",{staticClass:"tip tip-exd f12 color6"},[t._v("路由提供一种方式让你的应用可以公开被访问")]),t._v(" "),a("div",{staticClass:"content-container"},[a("el-form",{ref:"form",attrs:{"label-width":"90px",model:t.form}},[a("el-form-item",{attrs:{label:"名称：",rules:[{required:!0,message:"请输入名称",trigger:"change"}]}},[a("div",{staticClass:"ml10 s-input"},[a("el-input",{attrs:{placeholder:"my-router"},model:{value:t.form.name,callback:function(e){t.form.name=e},expression:"form.name"}}),t._v(" "),a("p",{staticClass:"tips"},[t._v("项目中唯一的路径识别名称")])],1)]),t._v(" "),a("el-form-item",{attrs:{label:"域名："}},[a("div",{staticClass:"ml10 s-input"},[a("el-input",{attrs:{placeholder:"www.example.com"},model:{value:t.form.domainName,callback:function(e){t.form.domainName=e},expression:"form.domainName"}}),t._v(" "),a("p",{staticClass:"tips"},[t._v("此路由的开放域名，如果不指定，将生成一个域名供使用，已创建路由不可更改")])],1)]),t._v(" "),a("el-form-item",{attrs:{label:"路径："}},[a("div",{staticClass:"ml10 s-input"},[a("el-input",{attrs:{placeholder:"/"},model:{value:t.form.path,callback:function(e){t.form.path=e},expression:"form.path"}}),t._v(" "),a("p",{staticClass:"tips"},[t._v("路由器监视这个路径上的路由到服务的流量")])],1)]),t._v(" "),a("el-form-item",{attrs:{label:"服务：",rules:[{required:!0,message:"请选择服务",trigger:"change"}]}},[a("div",{staticClass:"ml10 s-input"},[a("el-select",{staticClass:"el-input",attrs:{placeholder:"请选择活动区域"},model:{value:t.form.service,callback:function(e){t.form.service=e},expression:"form.service"}},[a("el-option",{attrs:{label:"基本认证",value:"base"}}),t._v(" "),a("el-option",{attrs:{label:"SSH KEY",value:"shanghai"}})],1),t._v(" "),a("p",{staticClass:"tips"},[t._v("被路由到的服务")])],1)]),t._v(" "),a("el-form-item",{attrs:{label:"目标端口："}},[a("div",{staticClass:"ml10 s-input"},[a("el-select",{staticClass:"el-input",attrs:{placeholder:"请选择活动区域"},model:{value:t.form.desport,callback:function(e){t.form.desport=e},expression:"form.desport"}},[a("el-option",{attrs:{label:"8080>8080(tcp)",value:"a"}}),t._v(" "),a("el-option",{attrs:{label:"8080>8080(tcp)",value:"b"}})],1),t._v(" "),a("p",{staticClass:"tips"},[t._v("被路由到的服务")])],1)]),t._v(" "),a("div",{staticClass:"ml20 mt10"},[a("el-row",[a("el-col",{attrs:{span:2}},[a("el-checkbox",{staticClass:"content-mar",attrs:{checked:""}},[t._v("加密路由")])],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"tips ml10"},[t._v("可以使用几种TLS终端类型，提供服务证书，进行安全路由")])])],1)],1)],1),t._v(" "),a("div",{staticClass:"btn110 mt10 ml20"},[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("创建")]),t._v(" "),a("el-button",{on:{click:t.onCancel}},[t._v("取消")])],1)],1)])},o=[],r={render:s,staticRenderFns:o};e.a=r},fRmk:function(t,e,a){"use strict";var s=a("4YfN"),o=a.n(s),r=a("lQSI");e.a={props:{},created:function(){},ready:function(){},beforeMount:function(){this.change(this.$route.path);var t=this;t.$route.query.route&&this.$ajax.get(this.$httpConfig.route_detail.replace("{projectName}",t.$route.params.disName).replace("{routeName}",t.$route.query.route)).then(function(e){var a=e.data;t.$set(t,"form",{isUpd:!0,name:a.metadata.name,domainName:a.spec.host,delivery:!1,type:[],path:a.spec.path,service:"base",desport:a.spec.port.targetPort})}).catch(function(t){console.log(t)})},data:function(){return{form:{isUpd:!1,name:"my-router",domainName:"www.example.com",delivery:!1,type:[],path:"/",service:"tomact",desport:"8080>8080(tcp)"},options:[{value:"1",label:"deployer"},{value:"2",label:"service"}],value:""}},components:{},filters:{},methods:o()({},a.i(r.c)(["change"]),{onCancel:function(){this.$router.go(-1)},onSubmit:function(){var t=this,e={kind:"Route",apiVersion:"v1",metadata:{name:t.form.name,namespace:t.$route.params.disName,selfLink:"namespaces/"+t.$route.params.disName+"/routes/"+t.form.name,creationTimestamp:(new Date).toISOString()},spec:{host:t.form.domainName,path:t.form.path,to:{kind:"Service",name:t.form.name,weight:100},port:{targetPort:t.form.desport},wildcardPolicy:"None"},status:{ingress:[]}};console.log(t.$route),this.$ajax.post(this.$httpConfig.routes.replace("{projectName}",t.$route.params.disName),e).then(function(e){t.$message({type:"success",message:"保存成功!"}),t.$router.go(-1)}).catch(function(e){t.$message({type:"error",message:"保存失败!"}),console.log(e)})}}),computed:{},watch:{}}},vA1S:function(t,e,a){e=t.exports=a("YfG4")(!1),e.push([t.i,".el-input[data-v-7398851c]{width:350px}.label2[data-v-7398851c]{width:90px;margin-right:10px;text-align:right}.tip-exd[data-v-7398851c]{margin-bottom:-5px}.el-checkbox[data-v-7398851c]{margin-right:10px}.el-form-item[data-v-7398851c]{margin-bottom:0}",""])}});