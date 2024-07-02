import{j as m}from"./jsx-runtime-Nms4Y4qS.js";import{r as n}from"./index-BwDkhjyp.js";import{P as h}from"./index-D3ylJrlI.js";import{s as a}from"./index-DmVOzVZz.js";import{p as E,c as g}from"./styled-components.browser.esm-Cm6OPFyG.js";const _=E.div`
  height: 100%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,D=E.div`
  display: grid;
  gap: ${({$gapSizePx:e})=>e}px;
  place-items: center;
  justify-content: center;
  ${({$open:e,$columnCount:s})=>e!==void 0?g`
          scroll-snap-type: both mandatory;
          position: fixed;
          z-index: 1;
          inset: 0;
          background: #000e;
          height: 100%;
          overflow-y: auto;
        `:g`
          grid-template-columns: repeat(${s}, auto);
          max-height: 100%;
        `}
`,F=E.img`
  cursor: pointer;
  display: block;
  max-width: 100%;
  ${({$open:e})=>e!==void 0?g`
          scroll-snap-stop: normal;
          scroll-snap-align: center;
          max-height: 100svh;
          height: 100svh;
          object-fit: scale-down;
        `:g`
          max-height: 100%;
          min-height: 0;
        `}
`,I=({scrollTo:e=!1,onClick:s=()=>{},...p})=>{const t=n.useRef();n.useEffect(()=>{e&&t.current.scrollIntoView()},[e]);const l=y=>{y.stopPropagation(),s()};return m.jsx(F,{...p,ref:t,crossOrigin:"anonymous",onClick:l})};I.propTypes={scrollTo:h.bool,onClick:h.func};I.__docgenInfo={description:"",methods:[],displayName:"Item",props:{scrollTo:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1}}};const j=8,b=({images:e=[]})=>{const[s,p]=n.useState({}),[t,l]=n.useState(),[y,T]=n.useState(1),r=n.useRef(),z=o=>{const{src:i,naturalWidth:u,naturalHeight:d}=o.target;p(c=>({...c,[i]:{w:u,h:d,a:d/u}}))},v=()=>{if(e.length!==Object.keys(s).length||!r.current)return;const{width:o,height:i}=r.current.getBoundingClientRect(),u=Object.values(s),d=u.map(({w:c,h:x,a:f},C)=>{const w=C+1,$=Math.ceil(u.length/w),q=j*(w-1),G=j*($-1),O=(o-q)/w,S=(i-G)/$,M=1/f,R=Math.min(c,O,S/f),V=Math.min(x,S,O/M);return R*V}).reduce((c,x,f,C)=>x>C[c]?f:c,0)+1;T(d)};n.useEffect(v,[r,s,e]),n.useEffect(()=>(window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)}),[r,s,e]),n.useEffect(()=>p({}),[e]);const[P,k]=n.useState(!1);return n.useEffect(()=>{if(!a.isEnabled)return()=>{};const o=()=>{l(a.isFullscreen?t:void 0)};return t!==void 0?(a.request(r.current).then(()=>{setTimeout(()=>k(!0),50)}),a.on("change",o)):(a.exit(),k(!1)),()=>{t!==void 0&&a.off("change",o)}},[t]),e.length?m.jsx(_,{ref:r,children:m.jsx(D,{$gapSizePx:j,$columnCount:y,$open:t,onClick:()=>l(void 0),children:e.map((o,i)=>m.jsx(I,{alt:"",src:o,onClick:()=>l(t!==void 0?void 0:i),onLoad:z,$open:t,scrollTo:P&&t===i},o))})}):null};b.propTypes={images:h.arrayOf(h.string)};const J=b;b.__docgenInfo={description:"",methods:[],displayName:"ImageGrid",props:{images:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1}}};export{J as c};
