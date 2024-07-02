import{j as h}from"./jsx-runtime-Nms4Y4qS.js";import{r as s}from"./index-BwDkhjyp.js";import{P as g}from"./index-D3ylJrlI.js";import{p as y,c as x}from"./styled-components.browser.esm-Cm6OPFyG.js";const j=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],c=(()=>{if(typeof document>"u")return!1;const e=j[0],t={};for(const n of j)if((n==null?void 0:n[1])in document){for(const[l,u]of n.entries())t[e[l]]=u;return t}return!1})(),I={change:c.fullscreenchange,error:c.fullscreenerror};let r={request(e=document.documentElement,t){return new Promise((n,o)=>{const l=()=>{r.off("change",l),n()};r.on("change",l);const u=e[c.requestFullscreen](t);u instanceof Promise&&u.then(l).catch(o)})},exit(){return new Promise((e,t)=>{if(!r.isFullscreen){e();return}const n=()=>{r.off("change",n),e()};r.on("change",n);const o=document[c.exitFullscreen]();o instanceof Promise&&o.then(n).catch(t)})},toggle(e,t){return r.isFullscreen?r.exit():r.request(e,t)},onchange(e){r.on("change",e)},onerror(e){r.on("error",e)},on(e,t){const n=I[e];n&&document.addEventListener(n,t,!1)},off(e,t){const n=I[e];n&&document.removeEventListener(n,t,!1)},raw:c};Object.defineProperties(r,{isFullscreen:{get:()=>!!document[c.fullscreenElement]},element:{enumerable:!0,get:()=>document[c.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>!!document[c.fullscreenEnabled]}});c||(r={isEnabled:!1});const f=r,_=y.div`
  height: 100%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,A=y.div`
  display: grid;
  gap: ${({$gapSizePx:e})=>e}px;
  place-items: center;
  justify-content: center;
  ${({$open:e,$columnCount:t})=>e!==void 0?x`
          scroll-snap-type: both mandatory;
          position: fixed;
          z-index: 1;
          inset: 0;
          background: #000e;
          height: 100%;
          overflow-y: auto;
        `:x`
          grid-template-columns: repeat(${t}, auto);
          max-height: 100%;
        `}
`,B=y.img`
  cursor: pointer;
  display: block;
  max-width: 100%;
  ${({$open:e})=>e!==void 0?x`
          scroll-snap-stop: normal;
          scroll-snap-align: center;
          max-height: 100svh;
          height: 100svh;
          object-fit: scale-down;
        `:x`
          max-height: 100%;
          min-height: 0;
        `}
`,C=({scrollTo:e=!1,onClick:t=()=>{},...n})=>{const o=s.useRef();s.useEffect(()=>{e&&o.current.scrollIntoView()},[e]);const l=u=>{u.stopPropagation(),t()};return h.jsx(B,{...n,ref:o,crossOrigin:"anonymous",onClick:l})};C.propTypes={scrollTo:g.bool,onClick:g.func};C.__docgenInfo={description:"",methods:[],displayName:"Item",props:{scrollTo:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1}}};const v=8,k=({imageSize:e=[512,512],images:t=[]})=>{const[n,o]=s.useState(),[l,u]=s.useState(1),a=s.useRef(),F=()=>{if(!a.current)return;const{width:i,height:d}=a.current.getBoundingClientRect(),R=t.map((E,b)=>{const[m,p]=e,q=p/m,w=b+1,P=Math.ceil(t.length/w),O=v*(w-1),T=v*(P-1),z=(i-O)/w,M=(d-T)/P,V=1/q,N=Math.min(m,z,M/q),G=Math.min(p,M,z/V);return N*G}).reduce((E,b,m,p)=>b>p[E]?m:E,0)+1;u(R)};s.useEffect(F,[a,t,e]),s.useEffect(()=>(window.addEventListener("resize",F),()=>{window.removeEventListener("resize",F)}),[a,t]);const[$,S]=s.useState(!1);return s.useEffect(()=>{if(!f.isEnabled)return()=>{};const i=()=>{o(f.isFullscreen?n:void 0)};return n!==void 0?(f.request(a.current).then(()=>{setTimeout(()=>S(!0),50)}),f.on("change",i)):(f.exit(),S(!1)),()=>{n!==void 0&&f.off("change",i)}},[n]),t.length?h.jsx(_,{ref:a,children:h.jsx(A,{$gapSizePx:v,$columnCount:l,$open:n,onClick:()=>o(void 0),children:t.map((i,d)=>h.jsx(C,{alt:"",src:i,onClick:()=>o(n!==void 0?void 0:d),$open:n,scrollTo:$&&n===d},i))})}):null};k.propTypes={images:g.arrayOf(g.string)};const K=k;k.__docgenInfo={description:"",methods:[],displayName:"ImageGrid",props:{imageSize:{defaultValue:{value:"[512, 512]",computed:!1},required:!1},images:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1}}};export{K as c};
