"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[206],{206:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var n=r(439),a=r(791),c=r(689),i=r(392),s=r(87),o={filmCard:"Film_filmCard__6tkOi",filmCover:"Film_filmCover__4YoN6",Info:"Film_Info__MU7cJ",filmTitle:"Film_filmTitle__tssW8",filmOverview:"Film_filmOverview__XyP8c",filmInfoMore:"Film_filmInfoMore__xqr+3",filmLinkMore:"Film_filmLinkMore__GYjCc",btnSection:"Film_btnSection__aXGAX",btnBack:"Film_btnBack__8ljX3"},u=r(184),l=function(e){var t=e.film,r=(0,c.TH)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:o.btnSection,children:[(0,u.jsx)(s.rU,{className:o.btnBack,to:r.state?r.state.from:"/",children:"Back"}),(0,u.jsxs)("section",{className:o.filmCard,children:[(0,u.jsx)("img",{className:o.filmCover,src:t.poster_path?"https://image.tmdb.org/t/p/w600_and_h900_bestv2".concat(t.poster_path):"https://image.tmdb.org/t/p/w600_and_h900_bestv2/t9S352o0lbpXoaSC2X2T8bghGDa.jpg",alt:t.title}),(0,u.jsxs)("div",{className:o.Info,children:[(0,u.jsxs)("div",{className:o.filmInfo,children:[(0,u.jsx)("h3",{className:o.filmTitle,children:t.title}),(0,u.jsx)("p",{className:o.filmOverview,children:t.overview})]}),(0,u.jsxs)("div",{className:o.filmInfoMore,children:[(0,u.jsx)(s.rU,{className:o.filmLinkMore,state:{from:r.state?r.state.from:"/"},to:"/search/".concat(t.id,"/cast"),children:"Cast"}),(0,u.jsx)(s.rU,{className:o.filmLinkMore,state:{from:r.state?r.state.from:"/"},to:"/search/".concat(t.id,"/reviews"),children:"Reviews"})]})]})]})]})})},f=r(111),p=function(){var e=(0,c.UO)().id,t=(0,c.s0)(),r=(0,a.useState)({}),s=(0,n.Z)(r,2),o=s[0],p=s[1];return(0,a.useEffect)((function(){(0,i.DD)(e).then((function(e){e?p(e.data):t("/search")}))}),[e,t]),o&&(0,u.jsxs)(f.$,{children:[(0,u.jsx)(l,{film:o}),(0,u.jsx)(c.j3,{})]})}},392:function(e,t,r){r.d(t,{Bt:function(){return p},DD:function(){return l},Tg:function(){return o},on:function(){return u},y:function(){return f}});var n=r(861),a=r(757),c=r.n(a),i=r(263),s="49fe15e72cb1827b9d3c3b6cc5e1d318",o=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(s));case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=206.4b4b10d0.chunk.js.map