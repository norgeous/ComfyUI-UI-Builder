import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{c as a}from"./index-CENOErUM.js";import{c as d}from"./index-CjEf00yb.js";import{c as u}from"./index-CDEgeL1I.js";import{c as x}from"./index-CHdWR4mw.js";import{r as t}from"./index-uCp2LrAq.js";import{A as f}from"./AppContext-DX1Wlwzv.js";import{W as l}from"./WsContext-9iT9ZgtG.js";import{c as g}from"./index-vCn7OGcW.js";import{p as e}from"./styled-components.browser.esm-Drpn4GzW.js";const n=()=>{const{progress:i,isGenerating:r}=t.useContext(l),{executeInterrupt:p,interruptLoading:c,interruptError:m}=t.useContext(f);return r?o.jsx(g,{jobName:"Job 1",isLoading:r,status:"Running...",progress:i,onInterrupt:p,interruptLoading:c,interruptError:m}):null};n.__docgenInfo={description:"",methods:[],displayName:"Queue"};const j=e.aside`
  display: flex;
  flex-direction: column;

  background: var(--bg1);
  color: var(--fg1);

  overflow: hidden;
  height: 100%;
`,h=e.div`
  padding: 8px;
  overflow-y: auto;
  flex-grow: 1;
`,s=()=>o.jsxs(j,{children:[o.jsx(a,{}),o.jsx(h,{children:o.jsx(d,{})}),o.jsxs(x,{pad:!0,column:!0,children:[o.jsx(n,{}),o.jsx(u,{})]})]}),N=s;s.__docgenInfo={description:"",methods:[],displayName:"Sidebar"};export{N as c};
