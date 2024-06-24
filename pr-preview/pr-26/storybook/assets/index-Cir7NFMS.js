import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{c as x}from"./index-D-Aee3AS.js";import{c as u}from"./index-Btef1ZP6.js";import{c as l}from"./index-BNk7b99W.js";import{c as f}from"./index-qDzr2xAS.js";import{r as n}from"./index-uCp2LrAq.js";import{W as g,A as h}from"./AppContext-ZaKAIv11.js";import{c as j}from"./index-BypKrYtX.js";import{p as e}from"./styled-components.browser.esm-Drpn4GzW.js";import{b as r}from"./index-BUFFlF7z.js";const i=()=>{const{progress:s,lastWsMessage:p,isGenerating:t}=n.useContext(g),{executeInterrupt:a,interruptLoading:m,interruptError:d}=n.useContext(h);return t?o.jsx(j,{isLoading:t,status:`${p} ${t&&`${Math.round(s*100)}%`}`,progress:s,onInterrupt:a,interruptLoading:m,interruptError:d}):null};i.__docgenInfo={description:"",methods:[],displayName:"Queue"};const $=e.aside`
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
`,c=()=>o.jsxs($,{children:[o.jsx(y,{children:o.jsx(x,{})}),o.jsx(b,{children:o.jsx(u,{})}),o.jsx(C,{children:o.jsxs(f,{pad:!0,column:!0,children:[o.jsx(i,{}),o.jsx(l,{})]})})]}),N=c;c.__docgenInfo={description:"",methods:[],displayName:"Sidebar"};export{N as c};
