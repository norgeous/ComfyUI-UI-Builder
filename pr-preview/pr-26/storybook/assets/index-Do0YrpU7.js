import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{c as d}from"./index-uyzzwhEt.js";import{c as u}from"./index-CmzWizbL.js";import{c as x}from"./index-DguYmSp_.js";import{c as f}from"./index-qDzr2xAS.js";import{r}from"./index-uCp2LrAq.js";import{W as l,A as g}from"./AppContext-ZaKAIv11.js";import{c as j}from"./index-Cd27fYzQ.js";import{p as s}from"./styled-components.browser.esm-Drpn4GzW.js";import{b as h}from"./index-BXd8L118.js";const n=()=>{const{progress:e,lastWsMessage:p,isGenerating:t}=r.useContext(l),{executeInterrupt:m,interruptLoading:a,interruptError:c}=r.useContext(g);return t?o.jsx(j,{isLoading:t,status:`${p} ${t&&`${Math.round(e*100)}%`}`,progress:e,onInterrupt:m,interruptLoading:a,interruptError:c}):null};n.__docgenInfo={description:"",methods:[],displayName:"Queue"};const $=s.aside`
  ${h(1)}
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
`,b=s.div`
  padding: 8px;
  overflow-y: auto;
  flex-grow: 1;
`,i=()=>o.jsxs($,{children:[o.jsx(d,{}),o.jsx(b,{children:o.jsx(u,{})}),o.jsxs(f,{pad:!0,column:!0,children:[o.jsx(n,{}),o.jsx(x,{})]})]}),L=i;i.__docgenInfo={description:"",methods:[],displayName:"Sidebar"};export{L as c};
