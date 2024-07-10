import{j as g}from"./jsx-runtime-Nms4Y4qS.js";import{r as l}from"./index-BwDkhjyp.js";import{P as x}from"./index-D3ylJrlI.js";import{p as v,c as E}from"./styled-components.browser.esm-Cm6OPFyG.js";import{S as j}from"./SettingsContext-CrmNDnzl.js";const I=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],u=(()=>{if(typeof document>"u")return!1;const e=I[0],n={};for(const t of I)if((t==null?void 0:t[1])in document){for(const[c,o]of t.entries())n[e[c]]=o;return n}return!1})(),$={change:u.fullscreenchange,error:u.fullscreenerror};let s={request(e=document.documentElement,n){return new Promise((t,r)=>{const c=()=>{s.off("change",c),t()};s.on("change",c);const o=e[u.requestFullscreen](n);o instanceof Promise&&o.then(c).catch(r)})},exit(){return new Promise((e,n)=>{if(!s.isFullscreen){e();return}const t=()=>{s.off("change",t),e()};s.on("change",t);const r=document[u.exitFullscreen]();r instanceof Promise&&r.then(t).catch(n)})},toggle(e,n){return s.isFullscreen?s.exit():s.request(e,n)},onchange(e){s.on("change",e)},onerror(e){s.on("error",e)},on(e,n){const t=$[e];t&&document.addEventListener(t,n,!1)},off(e,n){const t=$[e];t&&document.removeEventListener(t,n,!1)},raw:u};Object.defineProperties(s,{isFullscreen:{get:()=>!!document[u.fullscreenElement]},element:{enumerable:!0,get:()=>document[u.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>!!document[u.fullscreenEnabled]}});u||(s={isEnabled:!1});const h=s,R=v.div`
  height: 100%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,O=v.div`
  display: grid;
  gap: ${({$gapSizePx:e})=>e}px;
  place-items: center;
  justify-content: center;
  ${({$open:e,$columnCount:n})=>e!==void 0?E`
          scroll-snap-type: both mandatory;
          position: fixed;
          z-index: 1;
          inset: 0;
          background: #000e;
          height: 100%;
          overflow-y: auto;
        `:E`
          grid-template-columns: repeat(${n}, auto);
          max-height: 100%;
        `}
`,T=v.img`
  cursor: pointer;
  user-select: none;
  display: block;
  max-width: 100%;
  object-fit: ${({$scaleUp:e})=>e?"contain":"scale-down"};
  image-rendering: ${({$pixelSmooth:e})=>e?"auto":"pixelated"};
  ${({$open:e})=>e!==void 0?E`
          scroll-snap-stop: normal;
          scroll-snap-align: center;
          max-height: 100svh;
          height: 100svh;
        `:E`
          max-height: 100%;
          min-height: 0;
        `}
`,C=({scrollTo:e=!1,onClick:n=()=>{},...t})=>{const{settings:{scaleUp:r,pixelSmooth:c}}=l.useContext(j),o=l.useRef();l.useEffect(()=>{e&&o.current.scrollIntoView()},[e]);const d=m=>{m.stopPropagation(),n()};return g.jsx(T,{...t,ref:o,$scaleUp:r,$pixelSmooth:c,crossOrigin:"anonymous",onClick:d})};C.propTypes={scrollTo:x.bool,onClick:x.func};C.__docgenInfo={description:"",methods:[],displayName:"Item",props:{scrollTo:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1}}};const N=({containerWidth:e,containerHeight:n,naturalImageWidth:t,naturalImageHeight:r,gapSizePx:c,imageCount:o})=>{const d=r/t,m=t/r;return Array.from({length:o},(i,f)=>f+1).map(i=>{const f=Math.ceil(o/i),b=c*(i-1),w=c*(f-1),k=(e-b)/i,z=(n-w)/f,P=Math.min(t,k,z/d),M=Math.min(r,z,k/m);return P*M}).reduce((i,f,b,w)=>f>w[i]?b:i,0)+1},V=e=>{const[n,t]=l.useState([512,512]);return l.useEffect(()=>{if(!e)return;const r=new Image;r.crossOrigin="anonymous",r.onload=()=>t([r.naturalWidth,r.naturalHeight]),r.src=e},[e]),n},q=8,y=({images:e=[]})=>{const[n,t]=l.useState(),[r,c]=l.useState(1),o=l.useRef(),[d,m]=V(e[0]),p=l.useCallback(()=>{if(!o.current)return;const{width:a,height:i}=o.current.getBoundingClientRect(),f=N({containerWidth:a,containerHeight:i,naturalImageWidth:d,naturalImageHeight:m,gapSizePx:q,imageCount:e.length});c(f)},[e,m,d]);l.useEffect(p,[p]),l.useEffect(()=>(window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)}),[p]);const[S,F]=l.useState(!1);return l.useEffect(()=>{if(!h.isEnabled)return()=>{};const a=()=>{t(h.isFullscreen?n:void 0)};return n!==void 0?(h.request(o.current).then(()=>{setTimeout(()=>F(!0),50)}),h.on("change",a)):(h.exit(),F(!1)),()=>{n!==void 0&&h.off("change",a)}},[n]),e.length?g.jsx(R,{ref:o,children:g.jsx(O,{$gapSizePx:q,$columnCount:r,$open:n,onClick:()=>t(void 0),children:e.map((a,i)=>g.jsx(C,{alt:"",src:a,onClick:()=>t(n!==void 0?void 0:i),$open:n,scrollTo:S&&n===i},a))})}):null};y.propTypes={images:x.arrayOf(x.string)};const A=y;y.__docgenInfo={description:"",methods:[],displayName:"ImageGrid",props:{images:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1}}};export{A as c};
