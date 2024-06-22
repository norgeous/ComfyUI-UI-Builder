import{j as x}from"./jsx-runtime-X2b_N9AH.js";import{r as l}from"./index-uCp2LrAq.js";import{P as E}from"./index-D3ylJrlI.js";import{p as k,c as F}from"./styled-components.browser.esm-Drpn4GzW.js";const M=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],i=(()=>{if(typeof document>"u")return!1;const e=M[0],n={};for(const t of M)if((t==null?void 0:t[1])in document){for(const[s,u]of t.entries())n[e[s]]=u;return n}return!1})(),$={change:i.fullscreenchange,error:i.fullscreenerror};let o={request(e=document.documentElement,n){return new Promise((t,r)=>{const s=()=>{o.off("change",s),t()};o.on("change",s);const u=e[i.requestFullscreen](n);u instanceof Promise&&u.then(s).catch(r)})},exit(){return new Promise((e,n)=>{if(!o.isFullscreen){e();return}const t=()=>{o.off("change",t),e()};o.on("change",t);const r=document[i.exitFullscreen]();r instanceof Promise&&r.then(t).catch(n)})},toggle(e,n){return o.isFullscreen?o.exit():o.request(e,n)},onchange(e){o.on("change",e)},onerror(e){o.on("error",e)},on(e,n){const t=$[e];t&&document.addEventListener(t,n,!1)},off(e,n){const t=$[e];t&&document.removeEventListener(t,n,!1)},raw:i};Object.defineProperties(o,{isFullscreen:{get:()=>!!document[i.fullscreenElement]},element:{enumerable:!0,get:()=>document[i.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>!!document[i.fullscreenEnabled]}});i||(o={isEnabled:!1});const d=o,A=k.div`
  height: 100%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,B=k.div`
  display: grid;
  gap: ${({$gapSizePx:e})=>e}px;
  place-items: center;
  justify-content: center;
  ${({$open:e,$columnCount:n})=>e!==void 0?F`
          scroll-snap-type: both mandatory;
          position: fixed;
          z-index: 1;
          inset: 0;
          background: #000e;
          height: 100%;
          overflow-y: auto;
        `:F`
          grid-template-columns: repeat(${n}, auto);
          max-height: 100%;
        `}
`,D=k.img`
  cursor: pointer;
  display: block;
  max-width: 100%;
  ${({$open:e})=>e!==void 0?F`
          scroll-snap-stop: normal;
          scroll-snap-align: center;
          max-height: 100svh;
          height: 100svh;
          object-fit: scale-down;
        `:F`
          max-height: 100%;
          min-height: 0;
        `}
`,S=({scrollTo:e=!1,onClick:n=()=>{},...t})=>{const r=l.useRef();l.useEffect(()=>{e&&r.current.scrollIntoView()},[e]);const s=u=>{u.stopPropagation(),n()};return x.jsx(D,{...t,ref:r,crossOrigin:"anonymous",onClick:s})};S.propTypes={scrollTo:E.bool,onClick:E.func};S.__docgenInfo={description:"",methods:[],displayName:"Item",props:{scrollTo:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1}}};const C=8,P=({images:e=[]})=>{const[n,t]=l.useState({}),[r,s]=l.useState(),[u,O]=l.useState(1),a=l.useRef(),R=c=>{const{src:f,naturalWidth:p,naturalHeight:h}=c.target;t(m=>({...m,[f]:{w:p,h,a:h/p}}))},b=()=>{if(e.length!==Object.keys(n).length||!a.current)return;const{width:c,height:f}=a.current.getBoundingClientRect(),p=Object.values(n),h=p.map(({w:m,h:w,a:g},v)=>{const y=v+1,q=Math.ceil(p.length/y),N=C*(y-1),V=C*(q-1),z=(c-N)/y,I=(f-V)/q,G=1/g,L=Math.min(m,z,I/g),_=Math.min(w,I,z/G);return L*_}).reduce((m,w,g,v)=>w>v[m]?g:m,0)+1;O(h)};l.useEffect(b,[a,n,e]),l.useEffect(()=>(window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)}),[a,n,e]),l.useEffect(()=>t({}),[e]);const[T,j]=l.useState(!1);return l.useEffect(()=>{if(!d.isEnabled)return()=>{};const c=()=>{s(d.isFullscreen?r:void 0)};return r!==void 0?(d.request(a.current).then(()=>{setTimeout(()=>j(!0),50)}),d.on("change",c)):(d.exit(),j(!1)),()=>{r!==void 0&&d.off("change",c)}},[r]),e.length?x.jsx(A,{ref:a,children:x.jsx(B,{$gapSizePx:C,$columnCount:u,$open:r,onClick:()=>s(void 0),children:e.map((c,f)=>x.jsx(S,{alt:"",src:c,onClick:()=>s(r!==void 0?void 0:f),onLoad:R,$open:r,scrollTo:T&&r===f},c))})}):null};P.propTypes={images:E.arrayOf(E.string)};const U=P;P.__docgenInfo={description:"",methods:[],displayName:"ImageGrid",props:{images:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1}}};export{U as c};
