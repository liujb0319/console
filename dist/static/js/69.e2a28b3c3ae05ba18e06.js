webpackJsonp([69],{E4LH:function(t,e,o){"use strict";function a(t,e,o){""===e?o(new Error("请输入为2-20个字符(包含中文,数字,字母和下划线)")):s.test(e)?o():o(new Error("请输入为2-20个字符(包含中文,数字,字母和下划线)"))}function r(t,e,o){""===e?o(new Error("请输入电话号码 ")):i.test(e)?o():o(new Error("请输入正确的手机号码"))}function n(t,e,o){""===e?o(new Error(" 请输入电子邮箱")):c.test(e)?o():o(new Error("请输入正确的电子邮箱"))}e.a=a,e.b=r,e.c=n;var s=new RegExp("^[0-9a-zA-Z_一-齚]{2,20}$"),i=new RegExp("^1[34578]\\d{9}$"),c=new RegExp("^(\\w)+(\\.\\w+)*@(\\w)+((\\.\\w+)+)$")},Eh7y:function(t,e,o){e=t.exports=o("YfG4")(!1),e.push([t.i,"",""])},MeHx:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"dialog"},[o("el-dialog",{attrs:{title:"add"===t.dialogFlag?"添加报警联系人":"修改报警联系人",visible:t.visible,show:t.show,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(e){t.visible=e},close:t.closeDialog}},[o("el-form",{ref:"contactForm",attrs:{model:t.contactForm,rules:t.contactFormRules,"label-width":"100px"}},[o("el-form-item",{staticClass:"red-star1",attrs:{label:"联系人姓名",prop:"Name"}},[o("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入为2-20个字符(包含中文,数字,字母和下划线)联系人姓名"},model:{value:t.contactForm.Name,callback:function(e){t.contactForm.Name=e},expression:"contactForm.Name"}})],1),t._v(" "),o("el-form-item",{staticClass:"red-star1 mt20",attrs:{label:"联系人手机",prop:"Phone"}},[o("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入11位联系人手机"},model:{value:t.contactForm.Phone,callback:function(e){t.contactForm.Phone=e},expression:"contactForm.Phone"}})],1),t._v(" "),o("el-form-item",{staticClass:"red-star1 mt20",attrs:{label:"联系人邮箱",prop:"Email"}},[o("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入联系人邮箱"},model:{value:t.contactForm.Email,callback:function(e){t.contactForm.Email=e},expression:"contactForm.Email"}})],1)],1),t._v(" "),o("div",{staticClass:"dialog-footer",slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("contactForm")}}},[t._v(t._s("add"===t.dialogFlag?"立即添加":"确定修改"))]),t._v(" "),o("el-button",{on:{click:function(e){t.resetForm("contactForm")}}},[t._v("取 消")])],1)],1)],1)},r=[],n={render:a,staticRenderFns:r};e.a=n},"d/1w":function(t,e,o){var a=o("Eh7y");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o("XkoO")("49b14f72",a,!0)},imFQ:function(t,e,o){"use strict";var a=o("4YfN"),r=o.n(a),n=o("lQSI"),s=o("E4LH");e.a={props:{show:{type:Boolean,default:!1},contactForm:{type:Object,default:{Email:"",Id:"",Name:"",Phone:""}},dialogFlag:{type:String,default:"add"}},created:function(){},ready:function(){},data:function(){return{contactFormRules:{Name:[{validator:s.a,trigger:"blur"}],Phone:[{validator:s.b,trigger:"blur"}],Email:[{validator:s.c,trigger:"blur"}]},visible:this.show}},components:{},filters:{},methods:{closeDialog:function(){this.$emit("update:show",!1)},submitForm:function(t){var e=this,o=this;this.$refs[t].validate(function(a){if(!a)return!1;var r="contacts",n="post",s="添加联系人成功",i="添加联系人失败";"edit"===o.dialogFlag&&(r="contacts/"+o.contactForm.Id,n="put",s="修改联系人成功",i="修改联系人失败"),e.$ajax({method:n,url:o.$httpConfig.hakularExtend+r,data:{Name:o.contactForm.Name,Phone:o.contactForm.Phone,Email:o.contactForm.Email},headers:{"Hawkular-Tenant":o.userName,Authorization:"Bearer "+o.Token}}).then(function(e){e.data.Result?(o.$refs[t].resetFields(),o.$emit("update:show",!1),o.$emit("refreshList",!0),o.$message({type:"success",message:s})):o.$alert(e.data.ErrInfo,i,{confirmButtonText:"确定",callback:function(t){o.$emit("refreshList",!1)}})})})},resetForm:function(t){this.$refs[t].resetFields(),this.$emit("update:show",!1)}},computed:r()({},o.i(n.b)(["Token","userName"])),watch:{show:function(){this.visible=this.show}}}},qFLI:function(t,e,o){"use strict";function a(t){o("d/1w")}Object.defineProperty(e,"__esModule",{value:!0});var r=o("imFQ"),n=o("MeHx"),s=o("J0+h"),i=a,c=s(r.a,n.a,i,"data-v-73d5b44f",null);e.default=c.exports}});