(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{5209:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},351:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(4858).Z,a=n(4315).Z,o=r(n(2684)),l=n(3234),i=n(7955),u=n(9882),c=n(4815),s=n(3651),f=n(7489),d=n(5725),p=n(7317),h=n(5209),v=n(9216);let _=new Set;function m(e,t,n,r,a){if(a||i.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let a=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,o=t+"%"+n+"%"+a;if(_.has(o))return;_.add(o)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function g(e){return"string"==typeof e?e:u.formatUrl(e)}let y=o.default.forwardRef(function(e,t){let n,r;let{href:u,as:_,children:y,prefetch:b,passHref:x,replace:j,shallow:M,scroll:C,locale:E,onClick:k,onMouseEnter:O,onTouchStart:w,legacyBehavior:P=!1}=e,N=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=y,P&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let L=!1!==b,R=o.default.useContext(f.RouterContext),T=o.default.useContext(d.AppRouterContext),A=null!=R?R:T,I=!R,{href:S,as:K}=o.default.useMemo(()=>{if(!R){let e=g(u);return{href:e,as:_?g(_):e}}let[e,t]=l.resolveHref(R,u,!0);return{href:e,as:_?l.resolveHref(R,_):t||e}},[R,u,_]),D=o.default.useRef(S),U=o.default.useRef(K);P&&(r=o.default.Children.only(n));let B=P?r&&"object"==typeof r&&r.ref:t,[H,W,z]=p.useIntersection({rootMargin:"200px"}),F=o.default.useCallback(e=>{(U.current!==K||D.current!==S)&&(z(),U.current=K,D.current=S),H(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[K,B,S,z,H]);o.default.useEffect(()=>{A&&W&&L&&m(A,S,K,{locale:E},I)},[K,S,W,E,L,null==R?void 0:R.locale,A,I]);let X={ref:F,onClick(e){P||"function"!=typeof k||k(e),P&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),A&&!e.defaultPrevented&&function(e,t,n,r,a,l,u,c,s,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s&&!i.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[a?"replace":"push"](n,r,{shallow:l,locale:c,scroll:u}):t[a?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};s?o.default.startTransition(h):h()}(e,A,S,K,j,M,C,E,I,L)},onMouseEnter(e){P||"function"!=typeof O||O(e),P&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),A&&(L||!I)&&m(A,S,K,{locale:E,priority:!0,bypassPrefetchedCheck:!0},I)},onTouchStart(e){P||"function"!=typeof w||w(e),P&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),A&&(L||!I)&&m(A,S,K,{locale:E,priority:!0,bypassPrefetchedCheck:!0},I)}};if(c.isAbsoluteUrl(K))X.href=K;else if(!P||x||"a"===r.type&&!("href"in r.props)){let e=void 0!==E?E:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&h.getDomainLocale(K,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);X.href=t||v.addBasePath(s.addLocale(K,e,null==R?void 0:R.defaultLocale))}return P?o.default.cloneElement(r,X):o.default.createElement("a",Object.assign({},N,X),n)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7317:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:u}=e,c=u||!o,[s,f]=r.useState(!1),d=r.useRef(null),p=r.useCallback(e=>{d.current=e},[]);r.useEffect(()=>{if(o){if(c||s)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:a,elements:o}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let a=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:o,elements:a},i.push(n),l.set(n,t),t}(n);return o.set(e,t),a.observe(e),function(){if(o.delete(e),a.unobserve(e),0===o.size){a.disconnect(),l.delete(r);let e=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!s){let e=a.requestIdleCallback(()=>f(!0));return()=>a.cancelIdleCallback(e)}},[c,n,t,s,d.current]);let h=r.useCallback(()=>{f(!1)},[]);return[p,s,h]};var r=n(2684),a=n(9845);let o="function"==typeof IntersectionObserver,l=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1887:function(e,t,n){e.exports=n(6071)},2691:function(e,t,n){e.exports=n(351)},4376:function(e,t,n){e.exports=n(7424)},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(4532)}])},4532:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(8598);n(5759);var a=n(1887),o=n.n(a),l=n(4376),i=n(2684),u=[{path:"/blog",title:"Blog",isMain:!0},{path:"/blog/detail",title:"Blog",isMain:!1},{path:"/archive",title:"归档",isMain:!0},{path:"/resume",title:"简介",isMain:!0}],c=n(2691),s=n.n(c),f=n(9547),d=n.n(f);function p(e){return(0,r.jsxs)("div",{className:d().container,children:[(0,r.jsxs)("div",{className:d()["image-container"],children:[(0,r.jsx)("img",{src:"/images/avatar.png",alt:"mingjianglong",className:d().avatar}),(0,r.jsx)("h2",{children:"龙江"}),(0,r.jsx)("h3",{style:{fontWeight:"normal",paddingTop:".6em",color:"grey"},children:"Jiang Long"}),(0,r.jsx)("h4",{style:{paddingTop:"1.3em"},children:"等风也等你~"}),(0,r.jsx)("span",{className:d()["my-face"],children:"ღゝ◡╹)ノ♡"})]}),(0,r.jsx)("div",{})]})}var h=n(7929),v=n.n(h);function _(){let e=(0,l.useRouter)();return(0,r.jsxs)("nav",{className:v().nav,children:[(0,r.jsx)(p,{}),u.map((t,n)=>{if(t.isMain)return(0,r.jsx)(s(),{href:t.path,style:function(t){let{pathname:n}=e;return n.startsWith(t)?{color:"red"}:{color:"black"}}(t.path),children:t.title},t.path)})]})}var m=n(4609),g=n.n(m);function y(e){let{children:t}=e,n=(0,l.useRouter)(),a=(0,i.useMemo)(()=>{var e;return null===(e=u.find(e=>e.path===n.pathname))||void 0===e?void 0:e.title},[n]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o(),{children:(0,r.jsx)("title",{children:a})}),(0,r.jsxs)("main",{className:g().main,children:[(0,r.jsx)("div",{style:{width:"15em"},children:(0,r.jsx)(_,{})}),(0,r.jsx)("div",{style:{flex:1,height:"100vh",display:"flex",flexDirection:"column",overflowY:"hidden"},children:t})]})]})}function b(e){let{Component:t,pageProps:n}=e;return(0,r.jsx)(y,{children:(0,r.jsx)(t,{...n})})}},5759:function(){},9547:function(e){e.exports={container:"Avatar_container__egCID","image-container":"Avatar_image-container__9WrGh",image:"Avatar_image___tLKS","my-face":"Avatar_my-face__hbhE_","my-face-animate":"Avatar_my-face-animate__ehKlW",avatar:"Avatar_avatar__oORu6",float:"Avatar_float__N_z2z"}},4609:function(e){e.exports={main:"layout_main__E22hH"}},7929:function(e){e.exports={nav:"sidebar_nav__EFmKd"}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(7424)}),_N_E=e.O()}]);