import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as d}from"./index-BwDkhjyp.js";import{P as o}from"./index-D3ylJrlI.js";import{I as C}from"./InputRefContext-5kgal7hN.js";import{S as q}from"./SpeechContext-CGWUamV5.js";import{c as T}from"./index-BLrka4M9.js";import{c as V}from"./index-BgG56ZXN.js";import{c as $}from"./index-DCyj6PKy.js";import{M as l,a as k,j as M,L as E}from"./index-usF4-fxs.js";import{c as u}from"./index-Brh1w6mr.js";import{c as S}from"./index-D59UKBIg.js";import{d as U}from"./styled-components.browser.esm-CgTwxB-0.js";import{b as w}from"./bgfg-BUc8g66r.js";const L=U.textarea`
  ${w(4)}
  border: 1px solid var(--bg5);
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: var(--radius);
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
  min-height: 33.3333px;
  height: 0;
  line-height: 21px;
  padding: 4px 8px;
  resize: vertical;
`,p=({id:t=void 0,label:x=void 0,info:g=void 0,value:h=void 0,onChange:c=()=>{},children:v=null})=>{const b=d.useContext(C),{targetId:j,unmutedId:y,setUnmutedId:i,loading:s,error:m,vosk:n,tail:f}=d.useContext(q),r=j===t,a=y===t;return d.useEffect(()=>{r&&c(f)},[f]),e.jsxs(T,{pad:!0,column:!0,gap:"sm",children:[e.jsxs(V,{id:t,label:x,info:g,children:[!n&&!s&&e.jsx(u,{label:"Enable Speech Capture",onClick:()=>i(t),children:e.jsx(l,{})}),!n&&s&&r&&e.jsx(k,{}),!n&&s&&!r&&e.jsx(u,{label:"loading elsewhere",children:e.jsx(l,{})}),n&&e.jsx(u,{label:a?"Unmuted":"Muted",onClick:()=>i(a?void 0:t),children:a?e.jsx(l,{}):e.jsx(M,{})}),e.jsx(S,{label:"Limit text length to 20 words",onClick:()=>i(a?void 0:t),value:!0,children:e.jsx(E,{})}),v]}),m&&r&&e.jsx($,{children:m}),e.jsx(L,{ref:b,id:t,value:h,onChange:I=>c(I.target.value)})]})};p.propTypes={id:o.string,label:o.string,info:o.string,onChange:o.func,value:o.any,children:o.node};const O=p;p.__docgenInfo={description:"",methods:[],displayName:"InputTextarea",props:{id:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},info:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"any"},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{O as c};
