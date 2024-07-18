import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as l}from"./index-BwDkhjyp.js";import{P as o}from"./index-D3ylJrlI.js";import{I as y}from"./InputRefContext-5kgal7hN.js";import{S as w}from"./SpeechContext-CGWUamV5.js";import{c as T}from"./index-BLrka4M9.js";import{c as k}from"./index-BgG56ZXN.js";import{c as q}from"./index-DCyj6PKy.js";import{g as V,h as $,M as d,a as L,j as M,L as P}from"./index-usF4-fxs.js";import{c as n}from"./index-Brh1w6mr.js";import{c as U}from"./index-D59UKBIg.js";import{d as E}from"./styled-components.browser.esm-CgTwxB-0.js";import{b as R}from"./bgfg-BUc8g66r.js";const S=E.textarea`
  ${R(4)}
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
`,u=({id:t=void 0,label:x=void 0,info:g=void 0,value:h=void 0,onChange:p=()=>{},children:j=null})=>{const v=l.useContext(y),{targetId:b,unmutedId:C,setUnmutedId:c,loading:a,error:m,vosk:r,tail:f}=l.useContext(w),i=b===t,s=C===t;return l.useEffect(()=>{i&&p(f)},[f]),e.jsxs(T,{pad:!0,column:!0,gap:"sm",children:[e.jsxs(k,{id:t,label:x,info:g,children:[e.jsx(n,{label:"Prompt weight up (CTRL+UP)",onClick:()=>{},children:e.jsx(V,{})}),e.jsx(n,{label:"Prompt weight down (CTRL+DOWN)",onClick:()=>{},children:e.jsx($,{})}),!r&&!a&&e.jsx(n,{label:"Enable Speech Capture",onClick:()=>c(t),children:e.jsx(d,{})}),!r&&a&&i&&e.jsx(L,{}),!r&&a&&!i&&e.jsx(n,{label:"loading elsewhere",children:e.jsx(d,{})}),r&&e.jsx(n,{label:s?"Capturing...":"Muted",onClick:()=>c(s?void 0:t),children:s?e.jsx(d,{}):e.jsx(M,{})}),e.jsx(U,{label:"Limit text length to 20 words",onClick:()=>{},value:!0,children:e.jsx(P,{})}),j]}),m&&i&&e.jsx(q,{children:m}),e.jsx(S,{ref:v,id:t,value:h,onChange:I=>p(I.target.value)})]})};u.propTypes={id:o.string,label:o.string,info:o.string,onChange:o.func,value:o.any,children:o.node};const Q=u;u.__docgenInfo={description:"",methods:[],displayName:"InputTextarea",props:{id:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},info:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},value:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"any"},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};export{Q as c};
