import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{r as s}from"./index-uCp2LrAq.js";import{P as n}from"./index-D3ylJrlI.js";import{I as C}from"./InputRefContext-CmPhBSwH.js";import{S as q}from"./SpeechContext-cKuR6Onv.js";import{c as T}from"./index-BZF6B-3v.js";import{c as V}from"./index-BZDIBKFQ.js";import{M as d,S as k,j as M}from"./index-BiKVFdKX.js";import{c as l}from"./index-D_SX36Yj.js";import{c as S}from"./index-CaMEndn5.js";import{p as E}from"./styled-components.browser.esm-Drpn4GzW.js";const U=E.textarea`
  background: var(--bg3);
  color: var(--fg3);
  border: 1px solid var(--bg4);

  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: var(--radius);
  min-height: 80px;
  line-height: 21px;
  padding: 4px 8px;
  resize: vertical;
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
`,u=({id:t=void 0,label:x=void 0,info:g=void 0,value:v=void 0,onChange:p=()=>{},children:h=null})=>{const b=s.useContext(C),{targetId:j,unmutedId:y,setUnmutedId:c,loading:a,error:m,vosk:o,tail:f}=s.useContext(q),r=j===t,i=y===t;return s.useEffect(()=>{r&&p(f)},[f]),e.jsxs(S,{children:[e.jsxs(T,{id:t,label:x,info:g,children:[!o&&!a&&e.jsx(l,{label:"Enable Speech Capture",onClick:()=>c(t),children:e.jsx(d,{})}),!o&&a&&r&&e.jsx(k,{}),!o&&a&&!r&&e.jsx(l,{label:"loading elsewhere",children:e.jsx(d,{})}),o&&e.jsx(l,{label:i?"Unmuted":"Muted",onClick:()=>c(i?void 0:t),children:i?e.jsx(d,{}):e.jsx(M,{})}),h]}),m&&r&&e.jsx(V,{children:m}),e.jsx(U,{ref:b,id:t,value:v,onChange:I=>p(I.target.value)})]})};u.propTypes={id:n.string,label:n.string,info:n.string,onChange:n.func,value:n.any,children:n.node};const G=u;u.__docgenInfo={description:"",methods:[],displayName:"InputTextarea",props:{id:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},info:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"any"},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{G as c};