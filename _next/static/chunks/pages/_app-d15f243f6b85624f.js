(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7146)}])},1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,a=n(7273).Z,o=r(n(7294)),l=n(4532),i=n(3353),u=n(1410),c=n(9064),s=n(370),f=n(9955),d=n(4224),p=n(508),h=n(1516),v=n(4266);let _=new Set;function m(e,t,n,r,a){if(a||i.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let a=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,o=t+"%"+n+"%"+a;if(_.has(o))return;_.add(o)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function y(e){return"string"==typeof e?e:u.formatUrl(e)}let g=o.default.forwardRef(function(e,t){let n,r;let{href:u,as:_,children:g,prefetch:x,passHref:b,replace:j,shallow:M,scroll:C,locale:E,onClick:k,onMouseEnter:O,onTouchStart:w,legacyBehavior:N=!1}=e,P=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=g,N&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let R=!1!==x,L=o.default.useContext(f.RouterContext),T=o.default.useContext(d.AppRouterContext),A=null!=L?L:T,I=!L,{href:S,as:K}=o.default.useMemo(()=>{if(!L){let e=y(u);return{href:e,as:_?y(_):e}}let[e,t]=l.resolveHref(L,u,!0);return{href:e,as:_?l.resolveHref(L,_):t||e}},[L,u,_]),D=o.default.useRef(S),U=o.default.useRef(K);N&&(r=o.default.Children.only(n));let B=N?r&&"object"==typeof r&&r.ref:t,[H,z,W]=p.useIntersection({rootMargin:"200px"}),F=o.default.useCallback(e=>{(U.current!==K||D.current!==S)&&(W(),U.current=K,D.current=S),H(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[K,B,S,W,H]);o.default.useEffect(()=>{A&&z&&R&&m(A,S,K,{locale:E},I)},[K,S,z,E,R,null==L?void 0:L.locale,A,I]);let X={ref:F,onClick(e){N||"function"!=typeof k||k(e),N&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),A&&!e.defaultPrevented&&function(e,t,n,r,a,l,u,c,s,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s&&!i.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[a?"replace":"push"](n,r,{shallow:l,locale:c,scroll:u}):t[a?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};s?o.default.startTransition(h):h()}(e,A,S,K,j,M,C,E,I,R)},onMouseEnter(e){N||"function"!=typeof O||O(e),N&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),A&&(R||!I)&&m(A,S,K,{locale:E,priority:!0,bypassPrefetchedCheck:!0},I)},onTouchStart(e){N||"function"!=typeof w||w(e),N&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),A&&(R||!I)&&m(A,S,K,{locale:E,priority:!0,bypassPrefetchedCheck:!0},I)}};if(c.isAbsoluteUrl(K))X.href=K;else if(!N||b||"a"===r.type&&!("href"in r.props)){let e=void 0!==E?E:null==L?void 0:L.locale,t=(null==L?void 0:L.isLocaleDomain)&&h.getDomainLocale(K,e,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);X.href=t||v.addBasePath(s.addLocale(K,e,null==L?void 0:L.defaultLocale))}return N?o.default.cloneElement(r,X):o.default.createElement("a",Object.assign({},P,X),n)});t.default=g,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:u}=e,c=u||!o,[s,f]=r.useState(!1),d=r.useRef(null),p=r.useCallback(e=>{d.current=e},[]);r.useEffect(()=>{if(o){if(c||s)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:a,elements:o}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let a=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:o,elements:a},i.push(n),l.set(n,t),t}(n);return o.set(e,t),a.observe(e),function(){if(o.delete(e),a.unobserve(e),0===o.size){a.disconnect(),l.delete(r);let e=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!s){let e=a.requestIdleCallback(()=>f(!0));return()=>a.cancelIdleCallback(e)}},[c,n,t,s,d.current]);let h=r.useCallback(()=>{f(!1)},[]);return[p,s,h]};var r=n(7294),a=n(29);let o="function"==typeof IntersectionObserver,l=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7146:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(5893);n(7952);var a=n(9008),o=n.n(a),l=n(1163),i=n(7294),u=[{path:"/",title:"开心☺",isMain:!0},{path:"/blog",title:"Blog",isMain:!0},{path:"/blog/detail",title:"Blog",isMain:!1},{path:"/archive",title:"归档",isMain:!0},{path:"/resume",title:"简介",isMain:!0}],c=n(1664),s=n.n(c),f=n(6126),d=n.n(f);function p(e){return(0,r.jsxs)("div",{className:d().container,children:[(0,r.jsxs)("div",{className:d()["image-container"],children:[(0,r.jsx)("img",{src:"/images/avatar.png",alt:"mingjianglong",className:d().avatar}),(0,r.jsx)("h2",{children:"龙江"}),(0,r.jsx)("h3",{style:{fontWeight:"normal",paddingTop:".6em",color:"grey"},children:"Jiang Long"}),(0,r.jsx)("h4",{style:{paddingTop:"1.3em"},children:"等风也等你~"}),(0,r.jsx)("span",{className:d()["my-face"],children:"ღゝ◡╹)ノ♡"})]}),(0,r.jsx)("div",{})]})}var h=n(3767),v=n.n(h);function _(){let e=(0,l.useRouter)();return(0,r.jsxs)("nav",{className:v().nav,children:[(0,r.jsx)(p,{}),u.map((t,n)=>{if(t.isMain)return(0,r.jsx)(s(),{href:t.path,style:function(t){let{pathname:n}=e;return n==t?{color:"red"}:{color:"black"}}(t.path),children:t.title},t.path)})]})}var m=n(6500),y=n.n(m);function g(e){var t;let{children:n}=e,a=(0,l.useRouter)(),c=(0,i.useMemo)(()=>{var e;return null!==(t=null===(e=u.find(e=>e.path===a.pathname))||void 0===e?void 0:e.title)&&void 0!==t?t:"(*^▽^*)"},[a]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o(),{children:(0,r.jsx)("title",{children:c})}),(0,r.jsx)("div",{className:y()["main-container"],children:(0,r.jsxs)("main",{className:y().main,children:[(0,r.jsx)("div",{style:{width:"15em"},children:(0,r.jsx)(_,{})}),(0,r.jsx)("div",{style:{flex:1,height:"100vh",display:"flex",flexDirection:"column",overflowY:"hidden"},children:n})]})})]})}function x(e){let{Component:t,pageProps:n}=e;return(0,r.jsx)(g,{children:(0,r.jsx)(t,{...n})})}},7952:function(){},6126:function(e){e.exports={container:"Avatar_container__egCID","image-container":"Avatar_image-container__9WrGh",image:"Avatar_image___tLKS","my-face":"Avatar_my-face__hbhE_","my-face-animate":"Avatar_my-face-animate__ehKlW",avatar:"Avatar_avatar__oORu6",float:"Avatar_float__N_z2z"}},6500:function(e){e.exports={"main-container":"layout_main-container__jR90l",main:"layout_main__E22hH"}},3767:function(e){e.exports={nav:"sidebar_nav__EFmKd"}},9008:function(e,t,n){e.exports=n(2636)},1664:function(e,t,n){e.exports=n(5569)},1163:function(e,t,n){e.exports=n(6885)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);