webpackJsonp([105],{MOXr:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"content-title"},[e._v("健康检查"+e._s(e.$route.query.deploy))]),e._v(" "),a("div",{staticClass:"content-container"},[e._m(0),e._v(" "),a("div",{staticClass:"f16 el-top-botom-20"},[e._v("就绪探针")]),e._v(" "),a("div",{staticClass:"f12"},[e._v(" 就绪探针检查容器是否准备好处理请求，失败的就绪探针意味着容器不应从代理接收任何通信量，即使它正在运行。")]),e._v(" "),a("div",{staticClass:"mt20 "},[e.hide?a("div",[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm}},[a("el-form-item",{staticClass:"form-item-bottom red-star1",attrs:{label:"类型：","label-width":"110px"}},[a("div",{staticClass:"ml10 s-input"},[a("el-select",{staticClass:"wh350",attrs:{placeholder:"请选择"},model:{value:e.health_type,callback:function(t){e.health_type=t},expression:"health_type"}},e._l(e.option1,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)]),e._v(" "),1==e.health_type?a("div",[a("el-form-item",{attrs:{label:""}},[a("el-checkbox",{staticClass:"ml120",attrs:{label:"",name:"type"}},[e._v("Use HTTPS")])],1),e._v(" "),a("el-form-item",{attrs:{"label-width":"110px",prop:"",label:"路径："}},[a("el-input",{staticClass:"ml10 wh350",attrs:{placeholder:"请输入内容"},model:{value:e.health_path,callback:function(t){e.health_path=t},expression:"health_path"}})],1),e._v(" "),a("el-form-item",{staticClass:"form-item-bottom red-star1",attrs:{label:"端口：","label-width":"110px"}},[a("div",{staticClass:"ml10 s-input"},[a("el-select",{staticClass:"wh350",attrs:{placeholder:"请选择"},model:{value:e.health_port,callback:function(t){e.health_port=t},expression:"health_port"}},e._l(e.options2,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)]),e._v(" "),a("el-form-item",{attrs:{label:"初始延迟：",prop:"min","label-width":"110px"}},[a("div",{staticClass:"ml10"},[a("el-input-number",{staticClass:"countWidth wh350",attrs:{min:1},on:{change:e.handleChange},model:{value:e.postdata.spec.template.spec.containers[0].readinessProbe.initialDelaySeconds,callback:function(t){e.postdata.spec.template.spec.containers[0].readinessProbe.initialDelaySeconds=t},expression:"postdata.spec.template.spec.containers[0].readinessProbe.initialDelaySeconds"}}),a("span",{staticClass:"ml10"},[e._v("秒")]),e._v(" "),a("div",{staticClass:"f12 "},[e._v("检查其健康之前，容器开始后等待的时间")])],1)]),e._v(" "),a("el-form-item",{attrs:{label:"超时：",prop:"min","label-width":"110px"}},[a("div",{staticClass:"ml10"},[a("el-input-number",{staticClass:"countWidth wh350",attrs:{min:1},on:{change:e.handleChange},model:{value:e.postdata.spec.template.spec.containers[0].readinessProbe.timeoutSeconds,callback:function(t){e.postdata.spec.template.spec.containers[0].readinessProbe.timeoutSeconds=t},expression:"postdata.spec.template.spec.containers[0].readinessProbe.timeoutSeconds"}}),a("span",{staticClass:"ml10"},[e._v("秒")]),e._v(" "),a("div",{staticClass:"f12 "},[e._v("等待探针完成所需时间如果超过时间，探针失败")])],1)])],1):e._e(),e._v(" "),2==e.health_type?a("div",{attrs:{prop:"",label:""}},[e._l(e.commands,function(t,s){return a("el-form-item",{attrs:{label:"命令：",prop:"min","label-width":"110px"}},[a("el-row",{staticClass:"ml10"},[a("el-col",{attrs:{span:16}},[a("el-input",{staticStyle:{width:"580px"},model:{value:t.value,callback:function(e){t.value=e},expression:"command.value"}}),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:s==t.length-1,expression:"index == command.length-1"}],staticClass:"shade-button ml20",on:{click:e.addrow}},[e._v("添加")]),e._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:s<t.length-1,expression:"index < command.length-1"}],staticClass:"el-icon-close",on:{click:function(t){e.delrow(s)}}})],1)],1),e._v(" "),a("div",{staticClass:"ml10"},[a("textarea",{directives:[{name:"show",rawName:"v-show",value:e.muilRow,expression:"muilRow"}],staticClass:"my-textArea",staticStyle:{width:"580px"},attrs:{rows:6,value:" "}}),e._v(" "),a("div",{staticClass:"tips margin10"},[e._v("键入在容器中运行的命令，命令运行后若退出码是0，则认为成功，需要重新排列命令参数可使用拖动和删除")]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.show6,expression:"show6"}],staticClass:"blue-color my-line textline width120",on:{click:e.changeEdit}},[e._v("切换到多行编辑器")]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.show5,expression:"show5"}],staticClass:"blue-color textline width120",on:{click:function(t){e.hideBigArea()}}},[e._v("切换到单行编辑器")])])],1)}),e._v(" "),a("el-form-item",{attrs:{label:"初始延迟：",prop:"min","label-width":"110px"}},[a("div",{staticClass:"ml10"},[a("el-input-number",{staticClass:"countWidth wh350",attrs:{min:1},on:{change:e.handleChange},model:{value:e.postdata.spec.template.spec.containers[0].readinessProbe.initialDelaySeconds,callback:function(t){e.postdata.spec.template.spec.containers[0].readinessProbe.initialDelaySeconds=t},expression:"postdata.spec.template.spec.containers[0].readinessProbe.initialDelaySeconds"}}),a("span",{staticClass:"ml10"},[e._v("秒")]),e._v(" "),a("div",{staticClass:"f12 "},[e._v("检查其健康之前，容器开始后等待的时间")])],1)]),e._v(" "),a("el-form-item",{attrs:{label:"超时：",prop:"min","label-width":"110px"}},[a("div",{staticClass:"ml10"},[a("el-input-number",{staticClass:"countWidth wh350",attrs:{min:1},on:{change:e.handleChange},model:{value:e.postdata.spec.template.spec.containers[0].readinessProbe.timeoutSeconds,callback:function(t){e.postdata.spec.template.spec.containers[0].readinessProbe.timeoutSeconds=t},expression:"postdata.spec.template.spec.containers[0].readinessProbe.timeoutSeconds"}}),a("span",{staticClass:"ml10"},[e._v("秒")]),e._v(" "),a("div",{staticClass:"f12 "},[e._v("等待探针完成所需时间如果超过时间，探针失败")])],1)])],2):e._e(),e._v(" "),3==e.health_type?a("div",{attrs:{prop:"",label:""}},[a("el-form-item",{staticClass:"form-item-bottom red-star1",attrs:{label:"端口：","label-width":"110px"}},[a("div",{staticClass:"ml10 s-input"},[a("el-select",{staticClass:"wh350",attrs:{placeholder:"请选择"},model:{value:e.health_port,callback:function(t){e.health_port=t},expression:"health_port"}},e._l(e.options2,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)]),e._v(" "),a("el-form-item",{attrs:{label:"初始延迟：",prop:"min","label-width":"110px"}},[a("div",{staticClass:"ml10"},[a("el-input-number",{staticClass:"countWidth wh350",attrs:{min:1},on:{change:e.handleChange},model:{value:e.postdata.spec.template.spec.containers[0].readinessProbe.initialDelaySeconds,callback:function(t){e.postdata.spec.template.spec.containers[0].readinessProbe.initialDelaySeconds=t},expression:"postdata.spec.template.spec.containers[0].readinessProbe.initialDelaySeconds"}}),a("span",{staticClass:"ml10"},[e._v("秒")]),e._v(" "),a("div",{staticClass:"f12 "},[e._v("检查其健康之前，容器开始后等待的时间")])],1)]),e._v(" "),a("el-form-item",{attrs:{label:"超时：",prop:"min","label-width":"110px"}},[a("div",{staticClass:"ml10"},[a("el-input-number",{staticClass:"countWidth wh350",attrs:{min:1},on:{change:e.handleChange},model:{value:e.postdata.spec.template.spec.containers[0].readinessProbe.timeoutSeconds,callback:function(t){e.postdata.spec.template.spec.containers[0].readinessProbe.timeoutSeconds=t},expression:"postdata.spec.template.spec.containers[0].readinessProbe.timeoutSeconds"}}),a("span",{staticClass:"ml10"},[e._v("秒")]),e._v(" "),a("div",{staticClass:"f12 "},[e._v("等待探针完成所需时间如果超过时间，探针失败")])],1)])],1):e._e()],1)],1):e._e(),e._v(" "),a("div",{staticClass:"mt20"},[a("span",{staticClass:"bluewords f14",staticStyle:{width:"auto"},on:{click:e.hideSeniorSet}},[e._v(e._s(e.seniorSet))])])]),e._v(" "),a("div",{staticClass:"f16 el-top-botom-20"},[e._v("活性探针")]),e._v(" "),a("div",{staticClass:"f12"},[e._v(" 活性探针检查容器是否扔在运行，如果检查失败，则容器已损坏")]),e._v(" "),e._m(1),e._v(" "),a("el-checkbox",{staticClass:"mt20",attrs:{label:"",name:"type"}},[e._v("暂停展示此部署配置")]),e._v(" "),a("div",{staticClass:"f12 mt20"},[e._v("暂停可以让您在不触发部署的情况下进行更改，你可以在任何时候从新部署，如果未选中，重新启动时将开始保存")]),e._v(" "),e._l(e.entry,function(t,s){return t?a("el-row",{key:s,staticClass:"inner-element mt10",attrs:{labe:e.inputTitle}},[a("div",{staticClass:"wh350"},[a("el-input",{attrs:{value:"",placeholder:"label"},model:{value:t.label,callback:function(e){t.label=e},expression:"item.label"}})],1),e._v(" "),a("div",{staticClass:"wh350 ml20"},[a("el-input",{attrs:{value:"",placeholder:"value"},model:{value:t.value,callback:function(e){t.value=e},expression:"item.value"}})],1),e._v(" "),a("div",{staticClass:"pluse-default ml20",on:{click:function(t){e.addInput(s)}}},[e._v(" + ")]),e._v(" "),a("div",{staticClass:"delete-default ml20",on:{click:function(t){e.deleInput(s)}}},[e._v(" × ")])]):e._e()}),e._v(" "),a("div",{staticClass:"btn110 mt40"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.creatStorage()}}},[e._v(" 创建 ")]),e._v(" "),a("el-button",[e._v(" 取消 ")])],1)],2)])},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"f12"},[e._v(" 使用就绪和活性探测周期检查容器健康。"),a("span",{staticClass:"bluewords f14",staticStyle:{width:"auto"}},[e._v("点击了解更多")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"f12 mt10"},[a("span",{staticClass:"bluewords f14",staticStyle:{width:"auto"}},[e._v("添加活性探针")])])}],i={render:s,staticRenderFns:l};t.a=i},NjmS:function(e,t,a){var s=a("ezNV");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("XkoO")("3033eba5",s,!0)},VvLa:function(e,t,a){"use strict";function s(e){a("NjmS")}Object.defineProperty(t,"__esModule",{value:!0});var l=a("eW6e"),i=a("MOXr"),o=a("J0+h"),n=s,c=o(l.a,i.a,n,"data-v-305bb2f2",null);t.default=c.exports},eW6e:function(e,t,a){"use strict";var s=a("4YfN"),l=a.n(s),i=a("lQSI");t.a={props:{},created:function(){this.change(this.$route.path)},ready:function(){},data:function(){return{postdata:{spec:{template:{spec:{containers:[{readinessProbe:{}}]}}}},options2:[{value:"4",label:"8080"},{value:"5",label:"8081"},{value:"6",label:"8087"}],health_type:"1",health_port:"8080",health_path:"/",commands:[],show:!1,show1:!0,show2:!1,show3:!0,show5:!1,show6:!0,num1:100,num2:100,hide:!1,seniorSet:"添加就绪探针",option1:[{value:"1",label:"HTTP GET"},{value:"2",label:"Container Command"},{value:"3",label:"TCP Socket"}],value1:"img",value2:2,ruleForm:{name:"",username:"",address:"",psw:"",email:""},befordata:"",GPrompt:!1,PromptData:"弹窗内容！"}},beforeMount:function(){var e=this;this.$ajax.get(e.$httpConfig.deploy_detail.replace("{projectName}",e.$route.params.disName).replace("{deployName}",e.$route.query.deploy)).then(function(t){console.log(t.data);var a=t.data,s=a.spec.template.spec.containers[0].readinessProbe;if(s.httpGet)e.$set(e,"health_type","1"),e.$set(e,"health_path",s.httpGet.path),e.$set(e,"health_port",s.httpGet.port),e.AddDownShot();else if(s.exec)if(e.$set(e,"health_type","2"),e.AddDownShot(),s.exec.command&&s.exec.command.length>0)for(var l=0;l<s.exec.command.length;l++)e.commands.push({value:s.exec.command[l]});else e.commands.push({value:""});else s.tcpSocket?(e.AddDownShot(),e.$set(e,"health_type","3"),e.$set(e,"health_port",s.tcpSocket.port)):a.spec.template.spec.containers[0].readinessProbe={initialDelaySeconds:0,timeoutSeconds:0};e.$set(e,"postdata",a)}).catch(function(e){console.log(e)})},components:{},filters:{},methods:l()({},a.i(i.c)(["change"]),{changeEdit:function(){this.muilRow=!0,this.show5=!0,this.show6=!1},hideBigArea:function(){this.muilRow=!1,this.show5=!1,this.show6=!0},hideSeniorSet:function(){1==this.hide?(this.hide=!1,this.seniorSet="添加就绪探针"):(this.hide=!0,this.seniorSet="移除就绪探针")},addrow:function(){this.commands.push({value:""})},delrow:function(e){this.commands.length>1&&this.commands.splice(e,1)},AddDownShot:function(){this.show=!0,this.show1=!1,console.log(this.show)},deleteShot:function(){this.show=!1,this.show1=!0},showBig:function(){console.log("111"),this.show2=!0,this.show3=!1},deleteBig:function(){this.show2=!1,this.show3=!0},onSubmit:function(){var e=this;console.log(e.$route);var t=e.postdata;if("1"==e.health_type)t.spec.template.spec.containers[0].readinessProbe.httpGet={path:e.health_path,port:1*e.health_port,scheme:"HTTP"},t.spec.template.spec.containers[0].readinessProbe.exec=null,t.spec.template.spec.containers[0].readinessProbe.tcpSocket=null;else if("2"==e.health_type){for(var a=[],s=0;s<e.commands.length;s++)a.push(e.commands[s].value);t.spec.template.spec.containers[0].readinessProbe.httpGet=null,t.spec.template.spec.containers[0].readinessProbe.exec={command:a},t.spec.template.spec.containers[0].readinessProbe.tcpSocket=null}else"3"==e.health_type&&(t.spec.template.spec.containers[0].readinessProbe.httpGet=null,t.spec.template.spec.containers[0].readinessProbe.exec=null,t.spec.template.spec.containers[0].readinessProbe.tcpSocket={port:1*e.health_port});this.$ajax.put(e.$httpConfig.deploy_detail.replace("{projectName}",e.$route.params.disName).replace("{deployName}",e.$route.query.deploy),t).then(function(t){e.$message({type:"success",message:"保存成功!"}),e.$router.go(-1)}).catch(function(t){e.$message({type:"error",message:"保存失败!"}),console.log(t)})},onCancel:function(){this.$router.go(-1)}}),computed:{},watch:{}}},ezNV:function(e,t,a){t=e.exports=a("YfG4")(!1),t.push([e.i,"span[data-v-305bb2f2]:first-child{width:70px;display:inline-block;text-align:right}.f16[data-v-305bb2f2]{font-size:16px}.el-top-botom-20[data-v-305bb2f2]{margin:20px 0}.el-form-item[data-v-305bb2f2]{margin-bottom:10px}",""])}});