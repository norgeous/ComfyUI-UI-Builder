import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{c as m}from"./index-CENOErUM.js";import{c as a}from"./index-CjEf00yb.js";import{c as d}from"./index-CDEgeL1I.js";import{c as u}from"./index-CHdWR4mw.js";import{r}from"./index-uCp2LrAq.js";import{A as x}from"./AppContext-DX1Wlwzv.js";import{W as f}from"./WsContext-9iT9ZgtG.js";import{c as l}from"./index-6abmyGh6.js";import{p as e}from"./styled-components.browser.esm-Drpn4GzW.js";const n=()=>{const{isGenerating:t}=r.useContext(f),{executeInterrupt:i,interruptLoading:p,interruptError:c}=r.useContext(x);return t?o.jsx(l,{jobName:"Job 1",isLoading:t,status:"Running...",onInterrupt:i,interruptLoading:p,interruptError:c}):null};n.__docgenInfo={description:"",methods:[],displayName:"Queue"};const g=e.aside`
  display: flex;
  flex-direction: column;

  background: var(--bg1);
  color: var(--fg1);

  overflow: hidden;
  height: 100%;
`,j=e.div`
  padding: 8px;
  overflow-y: auto;
  flex-grow: 1;
`,s=()=>o.jsxs(g,{children:[o.jsx(m,{}),o.jsx(j,{children:o.jsx(a,{})}),o.jsxs(u,{pad:!0,column:!0,children:[o.jsx(n,{}),o.jsx(d,{})]})]}),E=s;s.__docgenInfo={description:"",methods:[],displayName:"Sidebar"};export{E as c};
