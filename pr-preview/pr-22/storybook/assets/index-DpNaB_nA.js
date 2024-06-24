import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{c as m}from"./index-BJIBxqCT.js";import{c as u}from"./index-D7gfz8IB.js";import{c as l}from"./index-CL30iTeS.js";import{c as x}from"./index-qDzr2xAS.js";import{r as n}from"./index-uCp2LrAq.js";import{W as f,A as g}from"./AppContext-ZaKAIv11.js";import{c as h}from"./index-Cd27fYzQ.js";import{p as r}from"./styled-components.browser.esm-Drpn4GzW.js";const s=()=>{const{progress:t,lastWsMessage:c,isGenerating:e}=n.useContext(f),{executeInterrupt:i,interruptLoading:p,interruptError:d}=n.useContext(g);return e?o.jsx(h,{isLoading:e,status:`${c} ${e&&`${Math.round(t*100)}%`}`,progress:t,onInterrupt:i,interruptLoading:p,interruptError:d}):null};s.__docgenInfo={description:"",methods:[],displayName:"Queue"};const j=r.aside`
  display: flex;
  flex-direction: column;

  background: var(--bg1);
  color: var(--fg1);

  overflow: hidden;
  height: 100%;
`,b=r.div`
  padding: 8px;
  overflow-y: auto;
  flex-grow: 1;
`,v=r.header`
  background: var(--bg2);
  color: var(--fg2);
`,$=r.footer`
  background: var(--bg2);
  color: var(--fg2);
`,a=()=>o.jsxs(j,{children:[o.jsx(v,{children:o.jsx(m,{})}),o.jsx(b,{children:o.jsx(u,{})}),o.jsx($,{children:o.jsxs(x,{pad:!0,column:!0,children:[o.jsx(s,{}),o.jsx(l,{})]})})]}),A=a;a.__docgenInfo={description:"",methods:[],displayName:"Sidebar"};export{A as c};
