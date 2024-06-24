import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{c as d}from"./index-arn3qWY0.js";import{c as u}from"./index-mHXvSy_Q.js";import{c as x}from"./index-CUNpqF_p.js";import{c as l}from"./index-qDzr2xAS.js";import{r as e}from"./index-uCp2LrAq.js";import{A as f}from"./AppContext-DX1Wlwzv.js";import{W as g}from"./WsContext-9iT9ZgtG.js";import{c as j}from"./index-BVWtDH-0.js";import{p as n}from"./styled-components.browser.esm-Drpn4GzW.js";const s=()=>{const{progress:t,lastWsMessage:p,isGenerating:r}=e.useContext(g),{executeInterrupt:a,interruptLoading:c,interruptError:m}=e.useContext(f);return r?o.jsx(j,{isLoading:r,status:`${p} ${r&&`${Math.round(t*100)}%`}`,progress:t,onInterrupt:a,interruptLoading:c,interruptError:m}):null};s.__docgenInfo={description:"",methods:[],displayName:"Queue"};const h=n.aside`
  display: flex;
  flex-direction: column;

  background: var(--bg1);
  color: var(--fg1);

  overflow: hidden;
  height: 100%;
`,$=n.div`
  padding: 8px;
  overflow-y: auto;
  flex-grow: 1;
`,i=()=>o.jsxs(h,{children:[o.jsx(d,{}),o.jsx($,{children:o.jsx(u,{})}),o.jsxs(l,{pad:!0,column:!0,children:[o.jsx(s,{}),o.jsx(x,{})]})]}),A=i;i.__docgenInfo={description:"",methods:[],displayName:"Sidebar"};export{A as c};
