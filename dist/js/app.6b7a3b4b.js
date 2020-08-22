(function(t){function e(e){for(var n,s,a=e[0],u=e[1],l=e[2],d=0,b=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&b.push(i[s][0]),i[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);c&&c(e);while(b.length)b.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,a=1;a<o.length;a++){var u=o[a];0!==i[u]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},i={app:0},r=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var c=u;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),i=o.n(n);i.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"small-container",attrs:{id:"app"}},[t._m(0),t._m(1),o("new-book-form",{on:{"add:book":t.addBook}}),o("book-table",{attrs:{books:t.books},on:{"delete-book":t.deleteBook,"edit:book":t.editBook}})],1)},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header"},[o("h1",[t._v("Personal Book List")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"description"},[o("p",{staticClass:"lead"},[t._v("Simply add a book title, author and a link to your favourite online store to purchase later. 🤓")])])}],s=(o("99af"),o("4de4"),o("d81d"),o("2909")),a=o("5530"),u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"book-table"}},[t.books.length<1?o("p",{staticClass:"empty-table"},[t._v("No books found.")]):o("table",[t._m(0),o("tbody",t._l(t.books,(function(e){return o("tr",{key:e.id},[t.editing===e.id?o("td",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"book.title"}],attrs:{type:"text"},domProps:{value:e.title},on:{input:function(o){o.target.composing||t.$set(e,"title",o.target.value)}}})]):o("td",[t._v(t._s(e.title))]),t.editing===e.id?o("td",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.author,expression:"book.author"}],attrs:{type:"text"},domProps:{value:e.author},on:{input:function(o){o.target.composing||t.$set(e,"author",o.target.value)}}})]):o("td",[t._v(t._s(e.author))]),t.editing===e.id?o("td",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.buyLink,expression:"book.buyLink"}],attrs:{type:"text"},domProps:{value:e.buyLink},on:{input:function(o){o.target.composing||t.$set(e,"buyLink",o.target.value)}}})]):o("td",[o("a",{attrs:{href:e.buyLink,target:"_blank"}},[t._v("Buy Now")])]),t.editing===e.id?o("td",[o("button",{on:{click:function(o){return t.editBook(e)}}},[t._v("Save")]),o("button",{staticClass:"muted-button",on:{click:function(e){t.editing=null}}},[t._v("Cancel")])]):o("td",[o("button",{on:{click:function(o){return t.editMode(e.id)}}},[t._v("Edit")]),o("button",{on:{click:function(o){return t.$emit("delete-book",e.id)}}},[t._v("Delete")])])])})),0)])])},l=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",[t._v("Title")]),o("th",[t._v("Author")]),o("th",[t._v("Buy Link")]),o("th",[t._v("Actions")])])])}],c={name:"book-table",props:{books:Array},data:function(){return{editing:null}},methods:{editMode:function(t){this.editing=t},cancelEdit:function(t){Object.assign(t,this.cachedBook),this.editing=null},editBook:function(t){""!==t.title&&""!==t.author&&""!==t.buyLink&&(this.$emit("edit-book",t.id,t),this.editing=null,localStorage.setItem(this.bookShelf,JSON.stringify(this.books)))}}},d=c,b=(o("7c67"),o("2877")),f=Object(b["a"])(d,u,l,!1,null,"2812cd7f",null),h=f.exports,k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"new-book-form"}},[o("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[o("label",[t._v("Title")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.book.title,expression:"book.title"}],ref:"first",class:{"has-error":t.submitting&&t.invalidTitle},attrs:{type:"text"},domProps:{value:t.book.title},on:{focus:t.clearStatus,keypress:t.clearStatus,input:function(e){e.target.composing||t.$set(t.book,"title",e.target.value)}}}),o("label",[t._v("Author")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.book.author,expression:"book.author"}],class:{"has-error":t.submitting&&t.invalidAuthor},attrs:{type:"text"},domProps:{value:t.book.author},on:{focus:t.clearStatus,keypress:t.clearStatus,input:function(e){e.target.composing||t.$set(t.book,"author",e.target.value)}}}),o("label",[t._v("Buy Link")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.book.buyLink,expression:"book.buyLink"}],class:{"has-error":t.submitting&t.invalidBuyLink},attrs:{type:"url"},domProps:{value:t.book.buyLink},on:{focus:t.clearStatus,keypress:t.clearStatus,input:function(e){e.target.composing||t.$set(t.book,"buyLink",e.target.value)}}}),t.error&&t.submitting?o("p",{staticClass:"error-message"},[t._v("❗ Please fill out all required fields.")]):t._e(),t.success?o("p",{staticClass:"success-message"},[t._v("✔️ Book successfully added.")]):t._e(),o("button",[t._v("Add Book")])])])},p=[],v={name:"new-book-form",data:function(){return{submitting:!1,success:!1,error:!1,book:{title:"",author:"",buyLink:""}}},computed:{invalidTitle:function(){return""===this.book.title},invalidAuthor:function(){return""===this.book.author},invalidBuyLink:function(){return""===this.book.buyLink}},methods:{handleSubmit:function(){this.submitting=!0,this.clearStatus(),this.invalidTitle||this.invalidAuthor||this.invalidBuyLink?this.error=!0:(this.$emit("add:book",this.book),this.$refs.first.focus(),this.book={title:"",author:"",buyLink:""},this.error=!1,this.success=!0,this.submitting=!1)},clearStatus:function(){this.success=!1,this.error=!1}}},m=v,g=(o("7df1"),Object(b["a"])(m,k,p,!1,null,"0b4a76eb",null)),y=g.exports,_={name:"app",components:{BookTable:h,NewBookForm:y},data:function(){return{books:[]}},mounted:function(){this.books=JSON.parse(localStorage.getItem("bookShelf")||"[]")},methods:{addBook:function(t){var e=this.books.length>0?this.books[this.books.length-1].id:0,o=e+1,n=Object(a["a"])(Object(a["a"])({},t),{},{id:o});this.books=[].concat(Object(s["a"])(this.books),[n]),localStorage.setItem(this.bookShelf,JSON.stringify(this.books))},deleteBook:function(t){confirm("Do you really want to delete?")&&(this.books=this.books.filter((function(e){return e.id!==t}))),localStorage.setItem(this.bookShelf,JSON.stringify(this.books))},editBook:function(t,e){this.book=this.book.map((function(o){return o.id===t?e:o}))}}},S=_,w=(o("034f"),Object(b["a"])(S,i,r,!1,null,null,null)),O=w.exports;n["a"].config.productionTip=!1,n["a"].mixin({data:function(){return{bookShelf:"bookShelf"}}}),new n["a"]({render:function(t){return t(O)}}).$mount("#app")},"7c67":function(t,e,o){"use strict";var n=o("f04e"),i=o.n(n);i.a},"7df1":function(t,e,o){"use strict";var n=o("e913"),i=o.n(n);i.a},"85ec":function(t,e,o){},e913:function(t,e,o){},f04e:function(t,e,o){}});
//# sourceMappingURL=app.6b7a3b4b.js.map