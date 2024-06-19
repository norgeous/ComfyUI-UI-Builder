import{j as m}from"./jsx-runtime-X2b_N9AH.js";import{r as t}from"./index-uCp2LrAq.js";import{P as f}from"./index-D3ylJrlI.js";import{p as j,c as h}from"./styled-components.browser.esm-Drpn4GzW.js";const R=j.div`
  height: 100%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,V=j.div`
  display: grid;
  gap: ${({$gapSizePx:e})=>e}px;
  place-items: center;
  justify-content: center;
  ${({$open:e,$columnCount:r})=>e!==void 0?h`
          scroll-snap-type: both mandatory;
          position: fixed;
          z-index: 1;
          inset: 0;
          background: #000e;
          height: 100%;
          overflow-y: auto;
        `:h`
          grid-template-columns: repeat(${r}, auto);
          max-height: 100%;
        `}
`,_=j.img`
  cursor: pointer;
  display: block;
  max-width: 100%;
  ${({$open:e})=>e!==void 0?h`
          scroll-snap-stop: normal;
          scroll-snap-align: center;
          max-height: 100svh;
          height: 100svh;
          object-fit: scale-down;
        `:h`
          max-height: 100%;
          min-height: 0;
        `}
`,I=({scrollTo:e=!1,onClick:r=()=>{},...l})=>{const n=t.useRef();t.useEffect(()=>{e&&n.current.scrollIntoView()},[e]);const u=g=>{g.stopPropagation(),r()};return m.jsx(_,{...l,ref:n,crossOrigin:"anonymous",onClick:u})};I.propTypes={scrollTo:f.bool,onClick:f.func};I.__docgenInfo={description:"",methods:[],displayName:"Item",props:{scrollTo:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1}}};const w=8,k=({images:e=[]})=>{const[r,l]=t.useState({}),[n,u]=t.useState(),[g,S]=t.useState(1),c=t.useRef(),T=o=>{const{src:s,naturalWidth:a,naturalHeight:p}=o.target;l(i=>({...i,[s]:{w:a,h:p,a:p/a}}))},x=()=>{if(e.length!==Object.keys(r).length||!c.current)return;const{width:o,height:s}=c.current.getBoundingClientRect(),a=Object.values(r),p=a.map(({w:i,h:y,a:d},v)=>{const C=v+1,b=Math.ceil(a.length/C),P=w*(C-1),q=w*(b-1),$=(o-P)/C,O=(s-q)/b,F=1/d,G=Math.min(i,$,O/d),M=Math.min(y,O,$/F);return G*M}).reduce((i,y,d,v)=>y>v[i]?d:i,0)+1;S(p)};t.useEffect(x,[c,r,e]),t.useEffect(()=>(window.addEventListener("resize",x),()=>{window.removeEventListener("resize",x)}),[c,r,e]),t.useEffect(()=>l({}),[e]);const[z,E]=t.useState(!1);return t.useEffect(()=>{var o,s;n!==void 0?(s=(o=c.current).requestFullscreen)==null||s.call(o).then(()=>{setTimeout(()=>E(!0),100)}):window.document.exitFullscreen().then(()=>E(!1)).catch(()=>{})},[n]),e.length?m.jsx(R,{ref:c,children:m.jsx(V,{$gapSizePx:w,$columnCount:g,$open:n,onClick:()=>u(void 0),children:e.map((o,s)=>m.jsx(I,{alt:"",src:o,onClick:()=>u(n!==void 0?void 0:s),onLoad:T,$open:n,scrollTo:z&&n===s},o))})}):null};k.propTypes={images:f.arrayOf(f.string)};const N=k;k.__docgenInfo={description:"",methods:[],displayName:"ImageGrid",props:{images:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1}}};export{N as c};
