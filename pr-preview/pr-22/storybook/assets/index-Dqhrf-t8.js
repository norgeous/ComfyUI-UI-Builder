import{j as a}from"./jsx-runtime-Nms4Y4qS.js";import{r as s}from"./index-BwDkhjyp.js";import{P as g}from"./index-D3ylJrlI.js";import{p as b,c as x}from"./styled-components.browser.esm-Cm6OPFyG.js";import{j as _,k as A}from"./index-CrqPYF-W.js";const q=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],c=(()=>{if(typeof document>"u")return!1;const e=q[0],n={};for(const r of q)if((r==null?void 0:r[1])in document){for(const[l,i]of r.entries())n[e[l]]=i;return n}return!1})(),$={change:c.fullscreenchange,error:c.fullscreenerror};let o={request(e=document.documentElement,n){return new Promise((r,t)=>{const l=()=>{o.off("change",l),r()};o.on("change",l);const i=e[c.requestFullscreen](n);i instanceof Promise&&i.then(l).catch(t)})},exit(){return new Promise((e,n)=>{if(!o.isFullscreen){e();return}const r=()=>{o.off("change",r),e()};o.on("change",r);const t=document[c.exitFullscreen]();t instanceof Promise&&t.then(r).catch(n)})},toggle(e,n){return o.isFullscreen?o.exit():o.request(e,n)},onchange(e){o.on("change",e)},onerror(e){o.on("error",e)},on(e,n){const r=$[e];r&&document.addEventListener(r,n,!1)},off(e,n){const r=$[e];r&&document.removeEventListener(r,n,!1)},raw:c};Object.defineProperties(o,{isFullscreen:{get:()=>!!document[c.fullscreenElement]},element:{enumerable:!0,get:()=>document[c.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>!!document[c.fullscreenEnabled]}});c||(o={isEnabled:!1});const d=o,H=b.div`
  height: 100%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,L=b.div`
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
`,U=b.img`
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
`,W=b.button`
  display: block;
  padding: 4px;
  border: none;
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 100;
`,C=({scrollTo:e=!1,onClick:n=()=>{},...r})=>{const t=s.useRef();s.useEffect(()=>{e&&t.current.scrollIntoView()},[e]);const l=i=>{i.stopPropagation(),n()};return a.jsx(U,{...r,ref:t,crossOrigin:"anonymous",onClick:l})};C.propTypes={scrollTo:g.bool,onClick:g.func};C.__docgenInfo={description:"",methods:[],displayName:"Item",props:{scrollTo:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1}}};const D=e=>{const[n,r]=s.useState([512,512]);return s.useEffect(()=>{const t=new Image;t.crossOrigin="anonymous",t.onload=()=>r([t.naturalWidth,t.naturalHeight]),t.src=e},[e]),n},k=8,S=({images:e=[]})=>{const[n,r]=s.useState(!1),[t,l]=s.useState(),[i,R]=s.useState(1),f=s.useRef(),[E,F]=D(e[0]),w=()=>{if(!f.current)return;const{width:u,height:p}=f.current.getBoundingClientRect(),O=e.map((v,y)=>{const h=F/E,m=y+1,I=Math.ceil(e.length/m),T=k*(m-1),N=k*(I-1),M=(u-T)/m,P=(p-N)/I,V=1/h,B=Math.min(E,M,P/h),G=Math.min(F,P,M/V);return B*G}).reduce((v,y,h,m)=>y>m[v]?h:v,0)+1;R(O)};s.useEffect(w,[f,e,E,F]),s.useEffect(()=>(window.addEventListener("resize",w),()=>{window.removeEventListener("resize",w)}),[f,e]);const[z,j]=s.useState(!1);return s.useEffect(()=>{if(!d.isEnabled)return()=>{};const u=()=>{l(d.isFullscreen?t:void 0)};return t!==void 0?(d.request(f.current).then(()=>{setTimeout(()=>j(!0),50)}),d.on("change",u)):(d.exit(),j(!1)),()=>{t!==void 0&&d.off("change",u)}},[t]),e.length?a.jsxs(H,{ref:f,children:[z&&a.jsx(W,{onClick:()=>r(!n),children:n?a.jsx(_,{}):a.jsx(A,{})}),a.jsx(L,{$gapSizePx:k,$columnCount:i,$open:t,onClick:()=>l(void 0),children:e.map((u,p)=>a.jsx(C,{alt:"",src:u,onClick:()=>l(t!==void 0?void 0:p),$open:t,$scaleUp:n,scrollTo:z&&t===p},u))})]}):null};S.propTypes={images:g.arrayOf(g.string)};const ee=S;S.__docgenInfo={description:"",methods:[],displayName:"ImageGrid",props:{images:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1}}};export{ee as c};
