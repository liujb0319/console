webpackJsonp([86],{"G/pu":function(e,t,a){var s=a("yAZ3");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("XkoO")("2b45e604",s,!0)},QoPH:function(e,t,a){"use strict";var s=a("4YfN"),n=a.n(s),c=a("lQSI");t.a={props:{},created:function(){this.change(this.$route.path)},ready:function(){},data:function(){return{secretname:"",username:"",password:"",options:[{value:"Basic Authentication",label:"Basic Authentication"},{value:"SSH Key",label:"SSH Key（UI没做）"}],value:"Basic Authentication",serviceaccounts_builder_json:{}}},components:{},filters:{},methods:n()({},a.i(c.c)(["change"]),{goback:function(){this.$router.go(-1)},save:function(){var e=this,t={apiVersion:"v1",kind:"Secret",metadata:{name:e.secretname},type:"kubernetes.io/basic-auth",data:{password:window.BASE64.encoder(e.password),username:window.BASE64.encoder(e.username)}},a=e.serviceaccounts_builder_json;a.secrets.push({name:e.secretname}),a.imagePullSecrets.push({name:e.secretname}),e.$ajax.post(e.$httpConfig.secrets.replace("{projectName}",e.$route.params.disName),t).then(function(t){t.data.message?e.$message({type:"error",message:"不能创建密钥 '"+e.secretname+"'. 原因:"+t.data.message}):e.$ajax.put(e.$httpConfig.serviceaccounts_builder.replace("{projectName}",e.$route.params.disName),a).then(function(t){t.data.message?e.$message({type:"error",message:"更新构建账户失败. 原因:"+t.data.message}):(e.$message({type:"success",message:"密钥创建成功!"}),e.$router.go(-1))}).catch(function(t){console.log(t),e.$message({type:"error",message:"更新构建账户失败. 原因:"+t.message})})}).catch(function(t){console.log(t),e.$message({type:"error",message:"不能创建密钥 '"+e.secretname+"'. 原因:"+t.message})})}}),beforeMount:function(){var e=this;this.$ajax.get(this.$httpConfig.serviceaccounts.replace("{projectName}",e.$route.params.disName)).then(function(t){var a=t.data.items[0];console.log(a);var s={metadata:a.metadata,secrets:a.secrets,imagePullSecrets:a.imagePullSecrets,kind:"ServiceAccount",apiVersion:"v1"};e.$set(e,"serviceaccounts_builder_json",s)}).catch(function(e){console.log(e)})},computed:{},watch:{}}},RKJu:function(e,t,a){"use strict";function s(e){a("G/pu")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("QoPH"),c=a("tnyn"),r=a("J0+h"),i=s,o=r(n.a,c.a,i,"data-v-468a7daa",null);t.default=o.exports},tnyn:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"content-title"},[e._v(" 创建私密凭据")]),e._v(" "),a("div",{staticClass:"mt20"},[a("el-row",{attrs:{type:"flex",align:"middle"}},[a("div",{staticClass:"mt10 left"},[e._v("私密凭据名称：")]),e._v(" "),a("div",[a("el-input",{staticClass:"search-input",attrs:{placeholder:""},model:{value:e.secretname,callback:function(t){e.secretname=t},expression:"secretname"}})],1)]),e._v(" "),a("el-row",{staticClass:"mt20",attrs:{type:"flex",align:"middle"}},[a("div",{staticClass:"mt10 left"},[e._v("认证类型：")]),e._v(" "),a("div",[a("el-select",{staticClass:"wh350",attrs:{placeholder:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)]),e._v(" "),a("el-row",{staticClass:"mt20",attrs:{type:"flex",align:"middle"}},[a("div",{staticClass:"mt10 left"},[e._v("用户名：")]),e._v(" "),a("div",[a("el-input",{staticClass:"search-input",attrs:{placeholder:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1)]),e._v(" "),a("el-row",{staticClass:"mt20",attrs:{type:"flex",align:"middle"}},[a("div",{staticClass:"mt10 left"},[e._v("密码或Token：")]),e._v(" "),a("div",[a("el-input",{staticClass:"search-input",attrs:{placeholder:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)]),e._v(" "),a("el-row",{staticClass:"btn110 ml130 mt20",attrs:{type:"flex"}},[a("el-button",{on:{click:e.goback}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")])],1)],1)])},n=[],c={render:s,staticRenderFns:n};t.a=c},yAZ3:function(e,t,a){t=e.exports=a("YfG4")(!1),t.push([e.i,".left[data-v-468a7daa]{width:120px;text-align:right;margin-right:10px}.ml130[data-v-468a7daa]{margin-left:130px}",""])}});