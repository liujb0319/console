webpackJsonp([109],{"2/D5":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-button",{attrs:{plain:""},on:{click:e.open2}},[e._v("\n    可自动关闭\n  ")])],1)},o=[],i={render:s,staticRenderFns:o};t.a=i},CcX8:function(e,t,n){"use strict";t.a={data:function(){return{a:{}}},methods:{open2:function(){var e=this.$createElement;this.$notify({title:"提示",message:e("p",null,[e("a",{style:"color: green"},"文案这是提示文案这是提示文案这是提示文案"),e("s",{style:"color: red"},"文案这是提示文案这是提示文案这是提示文案")]),duration:0})},open3:function(){this.$notify({title:"成功",message:'<a href="roles"> 这是一条成功的提示消息 </a>',type:"success",duration:0})},open4:function(){this.$notify.success({title:"成功",message:"这是一条成功的提示消息",offset:100})},open5:function(){}}}},q8AN:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("CcX8"),o=n("2/D5"),i=n("J0+h"),c=i(s.a,o.a,null,null,null);t.default=c.exports}});