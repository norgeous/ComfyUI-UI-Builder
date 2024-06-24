import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{r as s}from"./index-uCp2LrAq.js";import{P as r}from"./index-D3ylJrlI.js";import{I as C}from"./InputRefContext-CmPhBSwH.js";import{S as q}from"./SpeechContext-cKuR6Onv.js";import{c as T}from"./index-qDzr2xAS.js";import{c as V}from"./index-0_AIZsam.js";import{c as k}from"./index-BZDIBKFQ.js";import{M as d,S as M,j as S}from"./index-BiKVFdKX.js";import{c as u}from"./index-An1K6Ni1.js";import{p as E}from"./styled-components.browser.esm-Drpn4GzW.js";const U=E.textarea`
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
`,l=({id:t=void 0,label:x=void 0,info:g=void 0,value:v=void 0,onChange:p=()=>{},children:h=null})=>{const b=s.useContext(C),{targetId:j,unmutedId:y,setUnmutedId:c,loading:a,error:m,vosk:n,tail:f}=s.useContext(q),o=j===t,i=y===t;return s.useEffect(()=>{o&&p(f)},[f]),e.jsxs(T,{pad:!0,column:!0,gap:"sm",children:[e.jsxs(V,{id:t,label:x,info:g,children:[!n&&!a&&e.jsx(u,{label:"Enable Speech Capture",onClick:()=>c(t),children:e.jsx(d,{})}),!n&&a&&o&&e.jsx(M,{}),!n&&a&&!o&&e.jsx(u,{label:"loading elsewhere",children:e.jsx(d,{})}),n&&e.jsx(u,{label:i?"Unmuted":"Muted",onClick:()=>c(i?void 0:t),children:i?e.jsx(d,{}):e.jsx(S,{})}),h]}),m&&o&&e.jsx(k,{children:m}),e.jsx(U,{ref:b,id:t,value:v,onChange:I=>p(I.target.value)})]})};l.propTypes={id:r.string,label:r.string,info:r.string,onChange:r.func,value:r.any,children:r.node};const G=l;l.__docgenInfo={description:"",methods:[],displayName:"InputTextarea",props:{id:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},info:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"any"},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{G as c};
