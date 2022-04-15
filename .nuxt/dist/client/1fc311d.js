(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{199:function(t,e,r){"use strict";r.d(e,"f",(function(){return c})),r.d(e,"b",(function(){return o})),r.d(e,"i",(function(){return l})),r.d(e,"h",(function(){return d})),r.d(e,"a",(function(){return f})),r.d(e,"d",(function(){return m})),r.d(e,"e",(function(){return v})),r.d(e,"c",(function(){return h})),r.d(e,"g",(function(){return x}));var n=r(68),c=function(t){return Object(n.b)({url:"api/articles",method:"GET",params:t})},o=function(data){return Object(n.b)({url:"api/articles",method:"POST",data:data})},l=function(data){return console.log(data),Object(n.b)({url:"api/articles/"+data.article.slug,method:"PUT",data:data})},d=function(t){return Object(n.b)({url:"api/articles/feed",method:"GET",params:t})},f=function(t){return Object(n.b)({url:"api/articles/".concat(t,"/favorite"),method:"POST"})},m=function(t){return Object(n.b)({url:"api/articles/".concat(t,"/favorite"),method:"DELETE"})},v=function(t){return Object(n.b)({url:"/api/articles/".concat(t),method:"GET"})},h=function(t){return Object(n.b)({url:"/api/articles/".concat(t),method:"DELETE"})},x=function(t){return Object(n.b)({url:"/api/articles/".concat(t,"/comments"),method:"GET"})}},275:function(t,e,r){"use strict";r.r(e);var n=r(4),c=(r(25),r(40),r(199)),o={middleware:"authenticate",name:"Editor",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,article,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=t.params).slug){e.next=7;break}return e.next=4,Object(c.e)(r.slug);case 4:n=e.sent,data=n.data,article=data.article;case 7:return e.abrupt("return",{article:article||{title:"",description:"",body:"",curTag:"",tagList:[]}});case 8:case"end":return e.stop()}}),e)})))()},data:function(){return{}},methods:{addTag:function(){this.article.tagList.push(this.article.curTag),this.article.curTag=""},publishArticle:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("editor"!==t.$route.name){e.next=8;break}return e.next=3,Object(c.b)({article:t.article});case 3:n=e.sent,data=n.data,r=data.article.slug,e.next=13;break;case 8:return e.next=10,Object(c.i)({article:t.article});case 10:o=e.sent,l=o.data,r=l.article.slug;case 13:return e.next=15,t.$router.push("/article/"+r);case 15:case"end":return e.stop()}}),e)})))()}}},l=r(31),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"editor-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-10 offset-md-1 col-xs-12"},[r("form",[r("fieldset",[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.title,expression:"article.title"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Article Title"},domProps:{value:t.article.title},on:{input:function(e){e.target.composing||t.$set(t.article,"title",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.description,expression:"article.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"What's this article about?"},domProps:{value:t.article.description},on:{input:function(e){e.target.composing||t.$set(t.article,"description",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.article.body,expression:"article.body"}],staticClass:"form-control",attrs:{rows:"8",placeholder:"Write your article (in markdown)"},domProps:{value:t.article.body},on:{input:function(e){e.target.composing||t.$set(t.article,"body",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.curTag,expression:"article.curTag"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter tags"},domProps:{value:t.article.curTag},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTag.apply(null,arguments)},input:function(e){e.target.composing||t.$set(t.article,"curTag",e.target.value)}}}),t._v(" "),r("div",{staticClass:"tag-list"},t._l(t.article.tagList,(function(e){return r("span",{key:e,staticClass:"tag-default tag-pill ng-binding ng-scope"},[r("i",{staticClass:"ion-close-round"}),t._v("\n                  "+t._s(e)+"\n                ")])})),0)]),t._v(" "),r("button",{staticClass:"btn btn-lg pull-xs-right btn-primary",attrs:{type:"button"},on:{click:t.publishArticle}},[t._v("\n              Publish Article\n            ")])])])])])])])}),[],!1,null,"8a6d610c",null);e.default=component.exports}}]);