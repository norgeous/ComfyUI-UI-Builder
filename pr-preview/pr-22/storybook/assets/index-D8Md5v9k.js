import{j as f}from"./jsx-runtime-Nms4Y4qS.js";import{r as c}from"./index-BwDkhjyp.js";import{P as x}from"./index-D3ylJrlI.js";import{p as E,c as b}from"./styled-components.browser.esm-Cm6OPFyG.js";import{k as $,l as R}from"./index-FfAfuwOy.js";const z=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],a=(()=>{if(typeof document>"u")return!1;const e=z[0],s={};for(const t of z)if((t==null?void 0:t[1])in document){for(const[o,i]of t.entries())s[e[o]]=i;return s}return!1})(),j={change:a.fullscreenchange,error:a.fullscreenerror};let l={request(e=document.documentElement,s){return new Promise((t,n)=>{const o=()=>{l.off("change",o),t()};l.on("change",o);const i=e[a.requestFullscreen](s);i instanceof Promise&&i.then(o).catch(n)})},exit(){return new Promise((e,s)=>{if(!l.isFullscreen){e();return}const t=()=>{l.off("change",t),e()};l.on("change",t);const n=document[a.exitFullscreen]();n instanceof Promise&&n.then(t).catch(s)})},toggle(e,s){return l.isFullscreen?l.exit():l.request(e,s)},onchange(e){l.on("change",e)},onerror(e){l.on("error",e)},on(e,s){const t=j[e];t&&document.addEventListener(t,s,!1)},off(e,s){const t=j[e];t&&document.removeEventListener(t,s,!1)},raw:a};Object.defineProperties(l,{isFullscreen:{get:()=>!!document[a.fullscreenElement]},element:{enumerable:!0,get:()=>document[a.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>!!document[a.fullscreenEnabled]}});a||(l={isEnabled:!1});const h=l,O=E.div`
  height: 100%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,T=E.div`
  display: grid;
  gap: ${({$gapSizePx:e})=>e}px;
  place-items: center;
  justify-content: center;
  ${({$open:e,$columnCount:s})=>e!==void 0?b`
          scroll-snap-type: both mandatory;
          position: fixed;
          z-index: 1;
          inset: 0;
          background: #000e;
          height: 100%;
          overflow-y: auto;
        `:b`
          grid-template-columns: repeat(${s}, auto);
          max-height: 100%;
        `}
`,N=E.img`
  cursor: pointer;
  user-select: none;
  display: block;
  max-width: 100%;
  object-fit: ${({$scaleUp:e})=>e?"contain":"scale-down"};
  ${({$open:e})=>e!==void 0?b`
          scroll-snap-stop: normal;
          scroll-snap-align: center;
          max-height: 100svh;
          height: 100svh;
        `:b`
          max-height: 100%;
          min-height: 0;
        `}
`,V=E.button`
  display: block;
  padding: 4px;
  border: none;
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 100;
`,C=({scrollTo:e=!1,onClick:s=()=>{},...t})=>{const n=c.useRef();c.useEffect(()=>{e&&n.current.scrollIntoView()},[e]);const o=i=>{i.stopPropagation(),s()};return f.jsx(N,{...t,ref:n,crossOrigin:"anonymous",onClick:o})};C.propTypes={scrollTo:x.bool,onClick:x.func};C.__docgenInfo={description:"",methods:[],displayName:"Item",props:{scrollTo:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1}}};const _=({containerWidth:e,containerHeight:s,naturalImageWidth:t,naturalImageHeight:n,gapSizePx:o,imageCount:i})=>{const F=n/t,m=t/n;return Array.from({length:i},(u,r)=>r+1).map(u=>{const r=Math.ceil(i/u),d=o*(u-1),g=o*(r-1),S=(e-d)/u,I=(s-g)/r,q=Math.min(t,S,I/F),P=Math.min(n,I,S/m);return q*P}).reduce((u,r,d,g)=>r>g[u]?d:u,0)+1},B=e=>{const[s,t]=c.useState([512,512]);return c.useEffect(()=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>t([n.naturalWidth,n.naturalHeight]),n.src=e},[e]),s},M=8,k=({images:e=[]})=>{const[s,t]=c.useState(!0),[n,o]=c.useState(),[i,F]=c.useState(1),m=c.useRef(),[w,v]=B(e[0]),p=c.useCallback(()=>{if(!m.current)return;const{width:r,height:d}=m.current.getBoundingClientRect(),g=_({containerWidth:r,containerHeight:d,naturalImageWidth:w,naturalImageHeight:v,gapSizePx:M,imageCount:e.length});F(g)},[e,w,v]);c.useEffect(p,[p]),c.useEffect(()=>(window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)}),[p]);const[y,u]=c.useState(!1);return c.useEffect(()=>{if(!h.isEnabled)return()=>{};const r=()=>{o(h.isFullscreen?n:void 0)};return n!==void 0?(h.request(m.current).then(()=>{setTimeout(()=>u(!0),50)}),h.on("change",r)):(h.exit(),u(!1)),()=>{n!==void 0&&h.off("change",r)}},[n]),e.length?f.jsxs(O,{ref:m,children:[y&&f.jsx(V,{onClick:()=>t(!s),children:s?f.jsx($,{}):f.jsx(R,{})}),f.jsx(T,{$gapSizePx:M,$columnCount:i,$open:n,onClick:()=>o(void 0),children:e.map((r,d)=>f.jsx(C,{alt:"",src:r,onClick:()=>o(n!==void 0?void 0:d),$open:n,$scaleUp:s,scrollTo:y&&n===d},r))})]}):null};k.propTypes={images:x.arrayOf(x.string)};const D=k;k.__docgenInfo={description:"",methods:[],displayName:"ImageGrid",props:{images:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1}}};export{D as c};
