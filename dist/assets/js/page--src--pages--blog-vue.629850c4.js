(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{173:function(a,t,e){},174:function(a,t){},180:function(a,t,e){"use strict";var n=e(173);e.n(n).a},181:function(a,t,e){"use strict";var n=e(174),r=e.n(n);t.default=r.a},186:function(a,t,e){"use strict";e.r(t);e(0);var n=e(74),r=(e(77),e(33),e(75),e(131),e(28),e(76),e(8)),i=e(5),l={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},prevLabel:{type:String,default:"‹"},nextLabel:{type:String,default:"›"},lastLabel:{type:String,default:"»"},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(a,t){var e=t.props,l=t.data,s=t.parent,u=e.info,c=e.showLinks,p=e.showNavigation,g=e.ariaLabel,d=function(a,t){var e=a.currentPage,n=void 0===e?1:e,r=a.totalPages,i=void 0===r?1:r,l=Math.ceil(t/2),o=Math.floor(n-l),s=Math.floor(n+l);i<=t?(o=0,s=i):n<=l?(o=0,s=t):n+l>=i&&(o=i-t,s=i);for(var u=[],c=o+1;c<=s;c++)u.push(c);return{current:n,total:i,start:o,end:s,pages:u}}(u,e.range),f=d.current,v=d.total,b=d.pages,L=d.start,y=d.end,h=Object(i.d)(s.$route),k=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i;t===f&&(l=e.ariaCurrentLabel);var s={to:o(h,t),exact:!0};return e.activeLinkClass&&(s.activeClass=e.activeLinkClass),e.exactActiveLinkClass&&(s.exactActiveClass=e.exactActiveLinkClass),a(n.a,{class:e.linkClass,attrs:Object(r.a)(Object(r.a)({},s),{},{"aria-label":l.replace("%n",t),"aria-current":f===t})},[i])},S=c?b.map((function(a){return k(a,a,e.ariaLinkLabel)})):[];if(p){var P=e.firstLabel,_=e.prevLabel,C=e.nextLabel,x=e.lastLabel,m=e.ariaFirstLabel,w=e.ariaPrevLabel,j=e.ariaNextLabel,O=e.ariaLastLabel;f>1&&S.unshift(k(f-1,_,w)),L>0&&S.unshift(k(1,P,m)),f<v&&S.push(k(f+1,C,j)),y<v&&S.push(k(v,x,O))}return S.length<2?null:a("nav",Object(r.a)(Object(r.a)({},l),{},{attrs:{role:"navigation","aria-label":g}}),S)}};function o(a,t){var e=/\/$/.test(a)?"/":"";return t>1?Object(i.g)(a)+"/".concat(t).concat(e):a}e(78);var s={components:{Pager:l}},u=(e(180),e(20)),c=e(181),p=Object(u.a)(s,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("Layout",[e("h1",[a._v("Blog")]),e("Pager",{attrs:{info:a.$page.allPost.pageInfo,linkClass:"pager"}}),a._l(a.$page.allPost.edges,(function(t){return e("article",{key:t.node.id,staticStyle:{"margin-bottom":"50px"}},[e("g-image",{staticStyle:{width:"100%"},attrs:{src:t.node.cover_image}}),e("h2",[a._v(a._s(t.node.title))]),e("p",[a._v(a._s(t.node.excerpt))]),e("p",[a._v(a._s(t.node.date)+" - "+a._s(t.node.timeToRead)+" min read")]),e("div",a._l(t.node.tags,(function(t){return e("g-link",{key:t.id,staticStyle:{"padding-right":".25em"},attrs:{to:t.path}},[a._v(" #"+a._s(t.id))])})),1),e("g-link",{attrs:{to:t.node.path}},[a._v(" Read Post ")])],1)})),e("Pager",{attrs:{info:a.$page.allPost.pageInfo,linkClass:"pager"}})],2)}),[],!1,null,"60b11fae",null);"function"==typeof c.default&&Object(c.default)(p);t.default=p.exports}}]);