"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[703],{354:function(t,e,r){r.d(e,{M:function(){return f}});var n=r(87),a=r(689),c="FilmsList_filmsList__TI9LZ",s="FilmsList_films__1fWlu",i="FilmsList_filmCover__Iimj4",u="FilmsList_filmCard__iGXBr",o="FilmsList_filmTitle__dkEgX",p="FilmsList_filmRating__yxwLD",l=r(184),f=function(t){var e=t.films,r=(0,a.TH)();return e&&(0,l.jsx)("ul",{className:c,children:e.map((function(t){return(0,l.jsx)("li",{className:s,children:(0,l.jsxs)(n.rU,{to:"/search/".concat(t.id),state:{from:r.search?r.pathname+r.search:r.pathname},children:[(0,l.jsx)("img",{className:i,src:t.poster_path?"https://image.tmdb.org/t/p/w600_and_h900_bestv2".concat(t.poster_path):"https://image.tmdb.org/t/p/w600_and_h900_bestv2/t9S352o0lbpXoaSC2X2T8bghGDa.jpg",alt:t.title}),(0,l.jsxs)("div",{className:u,children:[(0,l.jsx)("h3",{className:o,children:t.title}),(0,l.jsx)("p",{className:p,children:t.vote_average})]})]})},t.id)}))})}},703:function(t,e,r){r.r(e);var n=r(439),a=r(791),c=r(111),s=r(354),i=r(392),u=r(184);e.default=function(){var t=(0,a.useState)(null),e=(0,n.Z)(t,2),r=e[0],o=e[1];return(0,a.useEffect)((function(){(0,i.Tg)().then((function(t){return o(t.data.results)}))}),[]),(0,u.jsx)(c.$,{title:"Popular Today",children:(0,u.jsx)(s.M,{films:r})})}},392:function(t,e,r){r.d(e,{Bt:function(){return f},DD:function(){return p},Tg:function(){return u},on:function(){return o},y:function(){return l}});var n=r(861),a=r(757),c=r.n(a),s=r(263),i="49fe15e72cb1827b9d3c3b6cc5e1d318",u=function(){var t=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i));case 3:return e=t.sent,t.abrupt("return",e);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 3:return r=t.sent,t.abrupt("return",r);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 3:return r=t.sent,t.abrupt("return",r);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return r=t.sent,t.abrupt("return",r);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 3:return r=t.sent,t.abrupt("return",r);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=703.dbe899ed.chunk.js.map