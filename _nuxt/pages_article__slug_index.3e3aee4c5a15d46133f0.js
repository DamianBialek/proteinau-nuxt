webpackJsonp([6],{LThb:function(t,e,i){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("article",[e("header",{staticClass:"article-header"},[e("span",{staticClass:"article-date"},[this._v(this._s(this.article.date))])]),e("div",{staticClass:"article-body mt-2 mb-2"},[this._m(0),e("div",{staticClass:"article-content",domProps:{innerHTML:this._s(this.article.text)}})])])};a._withStripped=!0;var r={render:a,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"article-thumbail"},[e("img",{attrs:{src:"http://www.gstatic.com/webp/gallery/2.jpg"}})])}]};e.a=r},VK9s:function(t,e,i){var a=i("hcj/");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("4f2b9fa8",a,!1,{sourceMap:!1})},Y9I3:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("xFXi"),r=i("LThb"),c=!1;var s=function(t){c||i("VK9s")},n=i("VU/8")(a.a,r.a,!1,s,null,null);n.options.__file="pages\\article\\_slug\\index.vue",e.default=n.exports},"hcj/":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"header h1{font-size:34.4px;font-size:2.15rem}header .article-date{color:#aaa;display:block}.article-body .article-thumbail{height:400px}.article-body .article-thumbail img{width:100%;height:100%}.article-body .article-content{margin:32px 0;margin:2rem 0}.article-body .article-content p{margin:0}",""])},xFXi:function(t,e,i){"use strict";e.a={layout:"blog",name:"article-slug",data:function(){return{}},head:function(){return{title:this.article.title,meta:[{hid:"description",name:"description",content:"About our company Nuxt.js "}]}},asyncData:function(t){return t.app.$api.fetchArticle(t.params.slug).then(function(t){return{article:t}})},created:function(){this.$store.commit("setHeaderTitle",this.article.title)}}}});