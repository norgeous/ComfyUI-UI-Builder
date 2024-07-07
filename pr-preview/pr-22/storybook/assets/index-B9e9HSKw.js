import{j as a}from"./jsx-runtime-Nms4Y4qS.js";import{r as c}from"./index-BwDkhjyp.js";import{P as E}from"./index-D3ylJrlI.js";import{p as v,c as w}from"./styled-components.browser.esm-Cm6OPFyG.js";import{k as $,l as R}from"./index-DH7zSrPd.js";const I=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],f=(()=>{if(typeof document>"u")return!1;const e=I[0],s={};for(const t of I)if((t==null?void 0:t[1])in document){for(const[r,i]of t.entries())s[e[r]]=i;return s}return!1})(),z={change:f.fullscreenchange,error:f.fullscreenerror};let l={request(e=document.documentElement,s){return new Promise((t,n)=>{const r=()=>{l.off("change",r),t()};l.on("change",r);const i=e[f.requestFullscreen](s);i instanceof Promise&&i.then(r).catch(n)})},exit(){return new Promise((e,s)=>{if(!l.isFullscreen){e();return}const t=()=>{l.off("change",t),e()};l.on("change",t);const n=document[f.exitFullscreen]();n instanceof Promise&&n.then(t).catch(s)})},toggle(e,s){return l.isFullscreen?l.exit():l.request(e,s)},onchange(e){l.on("change",e)},onerror(e){l.on("error",e)},on(e,s){const t=z[e];t&&document.addEventListener(t,s,!1)},off(e,s){const t=z[e];t&&document.removeEventListener(t,s,!1)},raw:f};Object.defineProperties(l,{isFullscreen:{get:()=>!!document[f.fullscreenElement]},element:{enumerable:!0,get:()=>document[f.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>!!document[f.fullscreenEnabled]}});f||(l={isEnabled:!1});const g=l,O=v.div`
  height: 100%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,T=v.div`
  display: grid;
  gap: ${({$gapSizePx:e})=>e}px;
  place-items: center;
  justify-content: center;
  ${({$open:e,$columnCount:s})=>e!==void 0?w`
          scroll-snap-type: both mandatory;
          position: fixed;
          z-index: 1;
          inset: 0;
          background: #000e;
          height: 100%;
          overflow-y: auto;
        `:w`
          grid-template-columns: repeat(${s}, auto);
          max-height: 100%;
        `}
`,N=v.img`
  cursor: pointer;
  user-select: none;
  display: block;
  max-width: 100%;
  object-fit: ${({$scaleUp:e})=>e?"contain":"scale-down"};
  ${({$open:e})=>e!==void 0?w`
          scroll-snap-stop: normal;
          scroll-snap-align: center;
          max-height: 100svh;
          height: 100svh;
        `:w`
          max-height: 100%;
          min-height: 0;
        `}
`,V=v.button`
  display: block;
  padding: 4px;
  border: none;
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 100;
`,S=({scrollTo:e=!1,onClick:s=()=>{},...t})=>{const n=c.useRef();c.useEffect(()=>{e&&n.current.scrollIntoView()},[e]);const r=i=>{i.stopPropagation(),s()};return a.jsx(N,{...t,ref:n,crossOrigin:"anonymous",onClick:r})};S.propTypes={scrollTo:E.bool,onClick:E.func};S.__docgenInfo={description:"",methods:[],displayName:"Item",props:{scrollTo:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1}}};const _=({containerWidth:e,containerHeight:s,naturalImageWidth:t,naturalImageHeight:n,gapSizePx:r,imageCount:i})=>{const y=n/t,m=t/n;return Array.from({length:i},(o,d)=>d+1).map(o=>{const d=Math.ceil(i/o),p=r*(o-1),h=r*(d-1),u=(e-p)/o,x=(s-h)/d,q=Math.min(t,u,x/y),P=Math.min(n,x,u/m);return q*P}).reduce((o,d,p,h)=>d>h[o]?p:o,0)+1},B=e=>{const[s,t]=c.useState([512,512]);return c.useEffect(()=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>t([n.naturalWidth,n.naturalHeight]),n.src=e},[e]),s},M=8,j=({images:e=[]})=>{var h;const[s,t]=c.useState(!0),[n,r]=c.useState(),[i,y]=c.useState(1),m=c.useRef(),{width:k,height:C}=((h=m.current)==null?void 0:h.getBoundingClientRect())||{},[b,F]=B(e[0]),o=c.useCallback(()=>{if(!m.current)return;const u=_({containerWidth:k,containerHeight:C,naturalImageWidth:b,naturalImageHeight:F,gapSizePx:M,imageCount:e.length});y(u)},[F,C,e.length,b,k]);c.useEffect(o,[o]),c.useEffect(()=>(window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}),[m,e,o]);const[d,p]=c.useState(!1);return c.useEffect(()=>{if(!g.isEnabled)return()=>{};const u=()=>{r(g.isFullscreen?n:void 0)};return n!==void 0?(g.request(m.current).then(()=>{setTimeout(()=>p(!0),50)}),g.on("change",u)):(g.exit(),p(!1)),()=>{n!==void 0&&g.off("change",u)}},[n]),e.length?a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:{position:"absolute",background:"darkred"},children:[b,"x",F]}),a.jsxs(O,{ref:m,children:[d&&a.jsx(V,{onClick:()=>t(!s),children:s?a.jsx($,{}):a.jsx(R,{})}),a.jsx(T,{$gapSizePx:M,$columnCount:i,$open:n,onClick:()=>r(void 0),children:e.map((u,x)=>a.jsx(S,{alt:"",src:u,onClick:()=>r(n!==void 0?void 0:x),$open:n,$scaleUp:s,scrollTo:d&&n===x},u))})]})]}):null};j.propTypes={images:E.arrayOf(E.string)};const D=j;j.__docgenInfo={description:"",methods:[],displayName:"ImageGrid",props:{images:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1}}};export{D as c};
