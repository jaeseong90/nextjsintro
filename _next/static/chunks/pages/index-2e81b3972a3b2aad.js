(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4369)}])},4790:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(5893),a=n(9008);function s(e){var t=e.title;return(0,r.jsx)(a.default,{children:(0,r.jsx)("title",{children:t})})}},4369:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(4051),a=n.n(r),s=n(5893),o=n(5988),i=n.n(o),c=(n(9008),n(1664)),u=n(1163),l=n(7294),x=n(4790);function d(e,t,n,r,a,s,o){try{var i=e[s](o),c=i.value}catch(u){return void n(u)}i.done?t(c):Promise.resolve(c).then(r,a)}function f(){var e=(0,u.useRouter)(),t=(0,l.useState)([]),n=t[0],r=t[1];(0,l.useEffect)((function(){var e;(e=a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/popular?api_key=1a3810937b0dde9cf8fcbaabd86871a7");case 2:return e.next=4,e.sent.json();case 4:t=e.sent.results,r(t),console.log(t),console.log("results");case 8:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function o(e){d(s,r,a,o,i,"next",e)}function i(e){d(s,r,a,o,i,"throw",e)}o(void 0)}))})()}),[]);return(0,s.jsxs)("div",{className:"jsx-1171378c2e934ab4 container",children:[(0,s.jsx)(x.default,{title:"Home"}),null===n||void 0===n?void 0:n.map((function(t){return(0,s.jsxs)("div",{onClick:function(){return n=t.id,r=t.original_title,void e.push("/movies/".concat(r,"/").concat(n));var n,r},className:"jsx-1171378c2e934ab4 movie",children:[(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),className:"jsx-1171378c2e934ab4"}),(0,s.jsx)("h4",{className:"jsx-1171378c2e934ab4",children:(0,s.jsx)(c.default,{href:"/movies/".concat(t.original_title,"/").concat(t.id),children:(0,s.jsx)("a",{className:"jsx-1171378c2e934ab4",children:t.original_title})})})]},t.id)})),(0,s.jsx)(i(),{id:"1171378c2e934ab4",children:".container.jsx-1171378c2e934ab4{display:grid;grid-template-columns:1fr 1fr;padding:20px;gap:20px}.movie.jsx-1171378c2e934ab4{cursor:pointer}.movie.jsx-1171378c2e934ab4 img.jsx-1171378c2e934ab4{max-width:100%;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;-webkit-transition:-webkit-transform.2s ease-in-out;-moz-transition:-moz-transform.2s ease-in-out;-o-transition:-o-transform.2s ease-in-out;transition:-webkit-transform.2s ease-in-out;transition:-moz-transform.2s ease-in-out;transition:-o-transform.2s ease-in-out;transition:transform.2s ease-in-out;-webkit-box-shadow:rgba(0,0,0,.1)0px 4px 12px;-moz-box-shadow:rgba(0,0,0,.1)0px 4px 12px;box-shadow:rgba(0,0,0,.1)0px 4px 12px}.movie.jsx-1171378c2e934ab4:hover img.jsx-1171378c2e934ab4{-webkit-transform:scale(1.05)translateY(-10px);-moz-transform:scale(1.05)translateY(-10px);-ms-transform:scale(1.05)translateY(-10px);-o-transform:scale(1.05)translateY(-10px);transform:scale(1.05)translateY(-10px)}.movie.jsx-1171378c2e934ab4 h4.jsx-1171378c2e934ab4{font-size:18px;text-align:center}"})]})}},9008:function(e,t,n){e.exports=n(3121)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);