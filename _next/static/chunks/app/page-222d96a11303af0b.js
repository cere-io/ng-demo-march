(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{93808:(e,t,n)=>{Promise.resolve().then(n.bind(n,17699))},17699:(e,t,n)=>{"use strict";n.d(t,{default:()=>u});var l=n(34001),r=n(57749);let a=(0,n(3865).default)(()=>Promise.all([n.e(421),n.e(329),n.e(274)]).then(n.bind(n,48274)),{loadableGenerated:{webpack:()=>[48274]},ssr:!1,loading:()=>(0,l.jsx)("div",{className:"min-h-screen bg-background flex items-center justify-center",children:(0,l.jsx)("div",{className:"animate-pulse text-white",children:"Loading dashboard..."})})});function u(){return(0,l.jsx)(r.Suspense,{fallback:(0,l.jsx)("div",{className:"min-h-screen bg-background flex items-center justify-center",children:"Loading..."}),children:(0,l.jsx)(a,{})})}},3865:(e,t,n)=>{"use strict";n.d(t,{default:()=>r.a});var l=n(2130),r=n.n(l)},2130:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}});let l=n(63638)._(n(33586));function r(e,t){var n;let r={};"function"==typeof e&&(r.loader=e);let a={...r,...t};return(0,l.default)({...a,modules:null==(n=a.loadableGenerated)?void 0:n.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},93489:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return r}});let l=n(45333);function r(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new l.BailoutToCSRError(t);return n}},33586:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let l=n(34001),r=n(57749),a=n(93489),u=n(78764);function s(e){return{default:e&&"default"in e?e.default:e}}let d={loader:()=>Promise.resolve(s(()=>null)),loading:null,ssr:!0},o=function(e){let t={...d,...e},n=(0,r.lazy)(()=>t.loader().then(s)),o=t.loading;function i(e){let s=o?(0,l.jsx)(o,{isLoading:!0,pastDelay:!0,error:null}):null,d=!t.ssr||!!t.loading,i=d?r.Suspense:r.Fragment,f=t.ssr?(0,l.jsxs)(l.Fragment,{children:["undefined"==typeof window?(0,l.jsx)(u.PreloadChunks,{moduleIds:t.modules}):null,(0,l.jsx)(n,{...e})]}):(0,l.jsx)(a.BailoutToCSR,{reason:"next/dynamic",children:(0,l.jsx)(n,{...e})});return(0,l.jsx)(i,{...d?{fallback:s}:{},children:f})}return i.displayName="LoadableComponent",i}},78764:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadChunks",{enumerable:!0,get:function(){return s}});let l=n(34001),r=n(39864),a=n(63467),u=n(35826);function s(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=a.workAsyncStorage.getStore();if(void 0===n)return null;let s=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files;s.push(...t)}}return 0===s.length?null:(0,l.jsx)(l.Fragment,{children:s.map(e=>{let t=n.assetPrefix+"/_next/"+(0,u.encodeURIPath)(e);return e.endsWith(".css")?(0,l.jsx)("link",{precedence:"dynamic",href:t,rel:"stylesheet",as:"style"},e):((0,r.preload)(t,{as:"script",fetchPriority:"low"}),null)})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[142,767,358],()=>t(93808)),_N_E=e.O()}]);