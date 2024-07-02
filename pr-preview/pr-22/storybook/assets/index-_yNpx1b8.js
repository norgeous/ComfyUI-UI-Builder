import{j as a}from"./jsx-runtime-Nms4Y4qS.js";import{r as c}from"./index-BwDkhjyp.js";import{P as g}from"./index-D3ylJrlI.js";import{p as b,c as x}from"./styled-components.browser.esm-Cm6OPFyG.js";import{k as A,l as L}from"./index-n3Wug2HJ.js";const I=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],i=(()=>{if(typeof document>"u")return!1;const e=I[0],n={};for(const t of I)if((t==null?void 0:t[1])in document){for(const[r,l]of t.entries())n[e[r]]=l;return n}return!1})(),$={change:i.fullscreenchange,error:i.fullscreenerror};let o={request(e=document.documentElement,n){return new Promise((t,s)=>{const r=()=>{o.off("change",r),t()};o.on("change",r);const l=e[i.requestFullscreen](n);l instanceof Promise&&l.then(r).catch(s)})},exit(){return new Promise((e,n)=>{if(!o.isFullscreen){e();return}const t=()=>{o.off("change",t),e()};o.on("change",t);const s=document[i.exitFullscreen]();s instanceof Promise&&s.then(t).catch(n)})},toggle(e,n){return o.isFullscreen?o.exit():o.request(e,n)},onchange(e){o.on("change",e)},onerror(e){o.on("error",e)},on(e,n){const t=$[e];t&&document.addEventListener(t,n,!1)},off(e,n){const t=$[e];t&&document.removeEventListener(t,n,!1)},raw:i};Object.defineProperties(o,{isFullscreen:{get:()=>!!document[i.fullscreenElement]},element:{enumerable:!0,get:()=>document[i.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>!!document[i.fullscreenEnabled]}});i||(o={isEnabled:!1});const d=o,U=b.div`
  height: 100%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,H=b.div`
  display: grid;
  gap: ${({$gapSizePx:e})=>e}px;
  place-items: center;
  justify-content: center;
  ${({$open:e,$columnCount:n})=>e!==void 0?x`
          scroll-snap-type: both mandatory;
          position: fixed;
          z-index: 1;
          inset: 0;
          background: #000e;
          height: 100%;
          overflow-y: auto;
        `:x`
          grid-template-columns: repeat(${n}, auto);
          max-height: 100%;
        `}
`,W=b.img`
  cursor: pointer;
  display: block;
  max-width: 100%;
  ${({$open:e,$scaleUp:n})=>e!==void 0?x`
          scroll-snap-stop: normal;
          scroll-snap-align: center;
          max-height: 100svh;
          height: 100svh;
          ${!n&&"object-fit: scale-down"};
        `:x`
          max-height: 100%;
          min-height: 0;
        `}
`,D=b.button`
  display: block;
  padding: 4px;
  border: none;
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 100;
`,y=({scrollTo:e=!1,onClick:n=()=>{},...t})=>{const s=c.useRef();c.useEffect(()=>{e&&s.current.scrollIntoView()},[e]);const r=l=>{l.stopPropagation(),n()};return a.jsx(W,{...t,ref:s,crossOrigin:"anonymous",onClick:r})};y.propTypes={scrollTo:g.bool,onClick:g.func};y.__docgenInfo={description:"",methods:[],displayName:"Item",props:{scrollTo:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1}}};const k=8,C=({imageSize:e=[512,512],images:n=[]})=>{const[t,s]=c.useState(!1),[r,l]=c.useState(),[R,O]=c.useState(1),f=c.useRef(),F=()=>{if(!f.current)return;const{width:u,height:m}=f.current.getBoundingClientRect(),T=n.map((E,w)=>{const[p,h]=e,q=h/p,v=w+1,M=Math.ceil(n.length/v),V=k*(v-1),N=k*(M-1),P=(u-V)/v,z=(m-N)/M,B=1/q,G=Math.min(p,P,z/q),_=Math.min(h,z,P/B);return G*_}).reduce((E,w,p,h)=>w>h[E]?p:E,0)+1;O(T)};c.useEffect(F,[f,n,e]),c.useEffect(()=>(window.addEventListener("resize",F),()=>{window.removeEventListener("resize",F)}),[f,n]);const[S,j]=c.useState(!1);return c.useEffect(()=>{if(!d.isEnabled)return()=>{};const u=()=>{l(d.isFullscreen?r:void 0)};return r!==void 0?(d.request(f.current).then(()=>{setTimeout(()=>j(!0),50)}),d.on("change",u)):(d.exit(),j(!1)),()=>{r!==void 0&&d.off("change",u)}},[r]),n.length?a.jsxs(U,{ref:f,children:[S&&a.jsx(D,{onClick:()=>s(!t),children:t?a.jsx(A,{}):a.jsx(L,{})}),a.jsx(H,{$gapSizePx:k,$columnCount:R,$open:r,onClick:()=>l(void 0),children:n.map((u,m)=>a.jsx(y,{alt:"",src:u,onClick:()=>l(r!==void 0?void 0:m),$open:r,$scaleUp:t,scrollTo:S&&r===m},u))})]}):null};C.propTypes={images:g.arrayOf(g.string)};const ee=C;C.__docgenInfo={description:"",methods:[],displayName:"ImageGrid",props:{imageSize:{defaultValue:{value:"[512, 512]",computed:!1},required:!1},images:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1}}};export{ee as c};
