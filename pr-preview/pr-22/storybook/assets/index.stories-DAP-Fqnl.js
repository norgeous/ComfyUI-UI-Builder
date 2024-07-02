import{j as g}from"./jsx-runtime-Nms4Y4qS.js";import{r as a}from"./index-BwDkhjyp.js";import{P as x}from"./index-D3ylJrlI.js";import{s as h}from"./index-DmVOzVZz.js";import{p as $,c as S}from"./styled-components.browser.esm-Cm6OPFyG.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BAMY2Nnw.js";const he=$.div`
  height: 100%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,ne=$.div`
  display: grid;
  gap: ${({$gapSizePx:e})=>e}px;
  place-items: center;
  justify-content: center;
  ${({$open:e,$columnCount:t})=>e!==void 0?S`
          scroll-snap-type: both mandatory;
          position: fixed;
          z-index: 1;
          inset: 0;
          background: #000e;
          height: 100%;
          overflow-y: auto;
        `:S`
          grid-template-columns: repeat(${t}, auto);
          max-height: 100%;
        `}
`,ce=$.img`
  cursor: pointer;
  display: block;
  max-width: 100%;
  ${({$open:e})=>e!==void 0?S`
          scroll-snap-stop: normal;
          scroll-snap-align: center;
          max-height: 100svh;
          height: 100svh;
          object-fit: scale-down;
        `:S`
          max-height: 100%;
          min-height: 0;
        `}
`,b=({scrollTo:e=!1,onClick:t=()=>{},...l})=>{const i=a.useRef();a.useEffect(()=>{e&&i.current.scrollIntoView()},[e]);const y=q=>{q.stopPropagation(),t()};return g.jsx(ce,{...l,ref:i,crossOrigin:"anonymous",onClick:y})};b.propTypes={scrollTo:x.bool,onClick:x.func};b.__docgenInfo={description:"",methods:[],displayName:"Item",props:{scrollTo:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1}}};const k=8,_=({imageSize:e=[512,512],images:t=[]})=>{const[l,i]=a.useState(),[y,q]=a.useState(1),s=a.useRef(),C=()=>{if(!s.current)return;const{width:o,height:c}=s.current.getBoundingClientRect(),te=t.map((E,I)=>{const[m,p]=e,T=p/m,j=I+1,z=Math.ceil(t.length/j),le=k*(j-1),ae=k*(z-1),G=(o-le)/j,P=(c-ae)/z,oe=1/T,ie=Math.min(m,G,P/T),se=Math.min(p,P,G/oe);return ie*se}).reduce((E,I,m,p)=>I>p[E]?m:E,0)+1;q(te)};a.useEffect(C,[s,t,e]),a.useEffect(()=>(window.addEventListener("resize",C),()=>{window.removeEventListener("resize",C)}),[s,t]);const[ee,O]=a.useState(!1);return a.useEffect(()=>{if(!h.isEnabled)return()=>{};const o=()=>{i(h.isFullscreen?l:void 0)};return l!==void 0?(h.request(s.current).then(()=>{setTimeout(()=>O(!0),50)}),h.on("change",o)):(h.exit(),O(!1)),()=>{l!==void 0&&h.off("change",o)}},[l]),t.length?g.jsx(he,{ref:s,children:g.jsx(ne,{$gapSizePx:k,$columnCount:y,$open:l,onClick:()=>i(void 0),children:t.map((o,c)=>g.jsx(b,{alt:"",src:o,onClick:()=>i(l!==void 0?void 0:c),$open:l,scrollTo:ee&&l===c},o))})}):null};_.propTypes={images:x.arrayOf(x.string)};const me=_;_.__docgenInfo={description:"",methods:[],displayName:"ImageGrid",props:{imageSize:{defaultValue:{value:"[512, 512]",computed:!1},required:!1},images:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1}}};const xe={title:"ImageGrid2",component:me},n={screenshot:{viewport:{width:412,height:400}}},r={parameters:n,args:{images:["http://localhost:6006/view?filename=01"]}},f={parameters:n,args:{images:["http://localhost:6006/view?filename=01","http://localhost:6006/view?filename=02"]}},v={parameters:n,args:{images:["http://localhost:6006/view?filename=01","http://localhost:6006/view?filename=02","http://localhost:6006/view?filename=03"]}},w={parameters:n,args:{images:["http://localhost:6006/view?filename=01","http://localhost:6006/view?filename=02","http://localhost:6006/view?filename=03","http://localhost:6006/view?filename=04"]}},u={parameters:n,args:{images:["http://localhost:6006/view?filename=01","http://localhost:6006/view?filename=02","http://localhost:6006/view?filename=03","http://localhost:6006/view?filename=04","http://localhost:6006/view?filename=05","http://localhost:6006/view?filename=06","http://localhost:6006/view?filename=07","http://localhost:6006/view?filename=08","http://localhost:6006/view?filename=09","http://localhost:6006/view?filename=10","http://localhost:6006/view?filename=11","http://localhost:6006/view?filename=12","http://localhost:6006/view?filename=13","http://localhost:6006/view?filename=14","http://localhost:6006/view?filename=15","http://localhost:6006/view?filename=16","http://localhost:6006/view?filename=17","http://localhost:6006/view?filename=18","http://localhost:6006/view?filename=19","http://localhost:6006/view?filename=20","http://localhost:6006/view?filename=21","http://localhost:6006/view?filename=22","http://localhost:6006/view?filename=23","http://localhost:6006/view?filename=24","http://localhost:6006/view?filename=25"]}},d={parameters:n,args:{images:["http://localhost:6006/view?filename=01","http://localhost:6006/view?filename=02","http://localhost:6006/view?filename=03","http://localhost:6006/view?filename=04","http://localhost:6006/view?filename=05","http://localhost:6006/view?filename=06","http://localhost:6006/view?filename=07","http://localhost:6006/view?filename=08","http://localhost:6006/view?filename=09","http://localhost:6006/view?filename=10","http://localhost:6006/view?filename=11","http://localhost:6006/view?filename=12","http://localhost:6006/view?filename=13","http://localhost:6006/view?filename=14","http://localhost:6006/view?filename=15","http://localhost:6006/view?filename=16","http://localhost:6006/view?filename=17","http://localhost:6006/view?filename=18","http://localhost:6006/view?filename=19","http://localhost:6006/view?filename=20","http://localhost:6006/view?filename=21","http://localhost:6006/view?filename=22","http://localhost:6006/view?filename=23","http://localhost:6006/view?filename=24","http://localhost:6006/view?filename=25","http://localhost:6006/view?filename=26","http://localhost:6006/view?filename=27","http://localhost:6006/view?filename=28","http://localhost:6006/view?filename=29","http://localhost:6006/view?filename=30","http://localhost:6006/view?filename=31","http://localhost:6006/view?filename=32","http://localhost:6006/view?filename=33","http://localhost:6006/view?filename=34","http://localhost:6006/view?filename=35","http://localhost:6006/view?filename=36","http://localhost:6006/view?filename=37","http://localhost:6006/view?filename=38","http://localhost:6006/view?filename=39","http://localhost:6006/view?filename=40","http://localhost:6006/view?filename=41","http://localhost:6006/view?filename=42","http://localhost:6006/view?filename=43","http://localhost:6006/view?filename=44","http://localhost:6006/view?filename=45","http://localhost:6006/view?filename=46","http://localhost:6006/view?filename=47","http://localhost:6006/view?filename=48","http://localhost:6006/view?filename=49","http://localhost:6006/view?filename=50"]}};var V,M,R;r.parameters={...r.parameters,docs:{...(V=r.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters,
  args: {
    images: ['http://localhost:6006/view?filename=01']
  }
}`,...(R=(M=r.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var F,A,H;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters,
  args: {
    images: ['http://localhost:6006/view?filename=01', 'http://localhost:6006/view?filename=02']
  }
}`,...(H=(A=f.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var L,N,W;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters,
  args: {
    images: ['http://localhost:6006/view?filename=01', 'http://localhost:6006/view?filename=02', 'http://localhost:6006/view?filename=03']
  }
}`,...(W=(N=v.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var B,D,J;w.parameters={...w.parameters,docs:{...(B=w.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters,
  args: {
    images: ['http://localhost:6006/view?filename=01', 'http://localhost:6006/view?filename=02', 'http://localhost:6006/view?filename=03', 'http://localhost:6006/view?filename=04']
  }
}`,...(J=(D=w.parameters)==null?void 0:D.docs)==null?void 0:J.source}}};var K,Q,U;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters,
  args: {
    images: ['http://localhost:6006/view?filename=01', 'http://localhost:6006/view?filename=02', 'http://localhost:6006/view?filename=03', 'http://localhost:6006/view?filename=04', 'http://localhost:6006/view?filename=05', 'http://localhost:6006/view?filename=06', 'http://localhost:6006/view?filename=07', 'http://localhost:6006/view?filename=08', 'http://localhost:6006/view?filename=09', 'http://localhost:6006/view?filename=10', 'http://localhost:6006/view?filename=11', 'http://localhost:6006/view?filename=12', 'http://localhost:6006/view?filename=13', 'http://localhost:6006/view?filename=14', 'http://localhost:6006/view?filename=15', 'http://localhost:6006/view?filename=16', 'http://localhost:6006/view?filename=17', 'http://localhost:6006/view?filename=18', 'http://localhost:6006/view?filename=19', 'http://localhost:6006/view?filename=20', 'http://localhost:6006/view?filename=21', 'http://localhost:6006/view?filename=22', 'http://localhost:6006/view?filename=23', 'http://localhost:6006/view?filename=24', 'http://localhost:6006/view?filename=25']
  }
}`,...(U=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  parameters,
  args: {
    images: ['http://localhost:6006/view?filename=01', 'http://localhost:6006/view?filename=02', 'http://localhost:6006/view?filename=03', 'http://localhost:6006/view?filename=04', 'http://localhost:6006/view?filename=05', 'http://localhost:6006/view?filename=06', 'http://localhost:6006/view?filename=07', 'http://localhost:6006/view?filename=08', 'http://localhost:6006/view?filename=09', 'http://localhost:6006/view?filename=10', 'http://localhost:6006/view?filename=11', 'http://localhost:6006/view?filename=12', 'http://localhost:6006/view?filename=13', 'http://localhost:6006/view?filename=14', 'http://localhost:6006/view?filename=15', 'http://localhost:6006/view?filename=16', 'http://localhost:6006/view?filename=17', 'http://localhost:6006/view?filename=18', 'http://localhost:6006/view?filename=19', 'http://localhost:6006/view?filename=20', 'http://localhost:6006/view?filename=21', 'http://localhost:6006/view?filename=22', 'http://localhost:6006/view?filename=23', 'http://localhost:6006/view?filename=24', 'http://localhost:6006/view?filename=25', 'http://localhost:6006/view?filename=26', 'http://localhost:6006/view?filename=27', 'http://localhost:6006/view?filename=28', 'http://localhost:6006/view?filename=29', 'http://localhost:6006/view?filename=30', 'http://localhost:6006/view?filename=31', 'http://localhost:6006/view?filename=32', 'http://localhost:6006/view?filename=33', 'http://localhost:6006/view?filename=34', 'http://localhost:6006/view?filename=35', 'http://localhost:6006/view?filename=36', 'http://localhost:6006/view?filename=37', 'http://localhost:6006/view?filename=38', 'http://localhost:6006/view?filename=39', 'http://localhost:6006/view?filename=40', 'http://localhost:6006/view?filename=41', 'http://localhost:6006/view?filename=42', 'http://localhost:6006/view?filename=43', 'http://localhost:6006/view?filename=44', 'http://localhost:6006/view?filename=45', 'http://localhost:6006/view?filename=46', 'http://localhost:6006/view?filename=47', 'http://localhost:6006/view?filename=48', 'http://localhost:6006/view?filename=49', 'http://localhost:6006/view?filename=50']
  }
}`,...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Se=["Square1","Square2","Square3","Square4","Square25","Square50"];export{r as Square1,f as Square2,u as Square25,v as Square3,w as Square4,d as Square50,Se as __namedExportsOrder,xe as default};
