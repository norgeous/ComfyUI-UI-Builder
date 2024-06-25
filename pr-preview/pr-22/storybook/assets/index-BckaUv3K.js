import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{c as x}from"./index-4Yl9QJ30.js";import{c as u}from"./index-C43qCOkX.js";import{c as f}from"./index-BXWBPUUM.js";import{c as l}from"./index-BbXZFMxk.js";import{r as n}from"./index-uCp2LrAq.js";import{A as g}from"./AppContext-DX1Wlwzv.js";import{W as h}from"./WsContext-9iT9ZgtG.js";import{c as j}from"./index-BlrHfJLH.js";import{p as e}from"./styled-components.browser.esm-Drpn4GzW.js";import{b as r}from"./index-BUFFlF7z.js";const i=()=>{const{progress:s,lastWsMessage:c,isGenerating:t}=n.useContext(h),{executeInterrupt:m,interruptLoading:a,interruptError:d}=n.useContext(g);return t?o.jsx(j,{isLoading:t,status:`${c} ${t&&`${Math.round(s*100)}%`}`,progress:s,onInterrupt:m,interruptLoading:a,interruptError:d}):null};i.__docgenInfo={description:"",methods:[],displayName:"Queue"};const $=e.aside`
  ${r(1)}
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
`,b=e.div`
  padding: 8px;
  overflow-y: auto;
  flex-grow: 1;
`,y=e.header`
  ${r(2)}
`,C=e.footer`
  ${r(2)}
`,p=()=>o.jsxs($,{children:[o.jsx(y,{children:o.jsx(x,{})}),o.jsx(b,{children:o.jsx(u,{})}),o.jsx(C,{children:o.jsxs(l,{pad:!0,column:!0,children:[o.jsx(i,{}),o.jsx(f,{})]})})]}),Q=p;p.__docgenInfo={description:"",methods:[],displayName:"Sidebar"};export{Q as c};
