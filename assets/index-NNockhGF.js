const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./langs-qisoo3w6.js","./index-vtFYCCwT.js","./index-BUILuLAv.css"])))=>i.map(i=>d[i]);
import{r as o,j as a,_ as b}from"./index-vtFYCCwT.js";import{M as x,R as _}from"./owner-CGzhp8Ob.js";import{u as k}from"./use-is-dark-CnCmKQ4d.js";import{s as h}from"./dom-BowoBODo.js";import{c as w}from"./StyledButton-D_mDAIdz.js";import{a as j}from"./Shiki-CNT6NmDX.js";const d={},i={};function p(e){return new Promise((t,n)=>{const r=d[e];if(r==="loaded")return t(null);if(r==="loading"){i[e]=i[e]?[...i[e],[t,n]]:[[t,n]];return}const s=document.createElement("script");s.src=e,s.crossOrigin="anonymous",d[e]="loading",s.onload=function(){d[e]="loaded",t(null),i[e]&&(i[e].forEach(([c])=>{c(null)}),delete i[e])},s.onerror=function(c){this.onerror=this.onload=null,delete d[e],i[e].forEach(([,y])=>{y(c)}),delete i[e],n(c)},document.head.append(s)})}const l=new Map;function g(e){if(l.has(e)){const n=l.get(e);return{$link:n,remove:()=>{n.parentNode&&n.parentNode.removeChild(n),l.delete(e)}}}const t=document.createElement("link");return t.href=e,t.rel="stylesheet",t.type="text/css",t.crossOrigin="anonymous",l.set(e,t),t.onerror=()=>{t.onerror=null,l.delete(e)},document.head.append(t),{remove:()=>{t.parentNode&&t.parentNode.removeChild(t),l.delete(e)},$link:t}}const m={"code-wrap":"_code-wrap_1uhyk_1","copy-tip":"_copy-tip_1uhyk_11","language-tip":"_language-tip_1uhyk_49"},E=e=>{const{lang:t,content:n}=e,r=o.useCallback(()=>{navigator.clipboard.writeText(n),x.success("已复制到剪贴板")},[n]),s=o.useRef(null);return f(s),a.jsxs("div",{className:m["code-wrap"],onCopy:h,children:[a.jsx("span",{className:m["language-tip"],"aria-hidden":!0,children:t?.toUpperCase()}),a.jsx("pre",{className:"line-numbers !bg-transparent","data-start":"1",children:a.jsx("code",{className:`language-${t??"markup"} !bg-transparent`,ref:s,children:n})}),a.jsx("div",{className:m["copy-tip"],onClick:r,"aria-hidden":!0,children:"Copy"})]})},M=({content:e,lang:t,className:n,style:r})=>{const s=o.useRef(null);return f(s),o.useEffect(()=>{window.Prism?.highlightElement(s.current)},[e,t]),a.jsx("pre",{onCopy:h,className:w("!bg-transparent",n),style:r,"data-start":"1",children:a.jsx("code",{className:`language-${t??"markup"} !bg-transparent`,ref:s,children:e})})},f=e=>{const t=o.useRef(),n=_(),r=k();o.useInsertionEffect(()=>{const s=g(`https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/prism-themes/1.9.0/prism-one-${n?"light":r?"dark":"light"}.css`);if(t.current){const c=t.current;s.$link.onload=()=>{c.remove()}}t.current=s},[r,n]),o.useInsertionEffect(()=>{g("https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/prism/1.23.0/plugins/line-numbers/prism-line-numbers.min.css"),p("https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/prism/1.23.0/components/prism-core.min.js").then(()=>Promise.all([p("https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/prism/1.23.0/plugins/autoloader/prism-autoloader.min.js"),p("https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/prism/1.23.0/plugins/line-numbers/prism-line-numbers.min.js")])).then(()=>{e.current?requestAnimationFrame(()=>{window.Prism?.highlightElement(e.current),requestAnimationFrame(()=>{window.Prism?.highlightElement(e.current)})}):requestAnimationFrame(()=>{requestAnimationFrame(()=>{window.Prism?.highlightAll()})})})},[])};let u=null;const P=e=>{const{lang:t}=e,n=o.use(o.useMemo(async()=>{if(!t)return!1;if(!u){const{bundledLanguages:r}=await b(async()=>{const{bundledLanguages:s}=await import("./langs-qisoo3w6.js");return{bundledLanguages:s}},__vite__mapDeps([0,1,2]),import.meta.url);u=new Set(Object.keys(r))}return u.has(t)},[t]));return a.jsx(j,{...e,lang:n?e.lang:"text"})},A=Object.freeze(Object.defineProperty({__proto__:null,BaseCodeHighlighter:M,HighLighterPrismCdn:E,ShikiFallback:P},Symbol.toStringTag,{value:"Module"}));export{M as B,E as H,A as i,p as l};
