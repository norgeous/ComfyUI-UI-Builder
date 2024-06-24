import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{c as d}from"./index-hjaR0Ard.js";import{c as u}from"./index-Bb8jVZib.js";import{c as l}from"./index-BP5Q_qd-.js";import{c as x}from"./index-qDzr2xAS.js";import{r as n}from"./index-uCp2LrAq.js";import{W as f,A as g}from"./AppContext-ZaKAIv11.js";import{c as h}from"./index-DPtK5U9M.js";import{p as r}from"./styled-components.browser.esm-Drpn4GzW.js";import{b as j}from"./index-CZ727q7L.js";const s=()=>{const{progress:t,lastWsMessage:a,isGenerating:e}=n.useContext(f),{executeInterrupt:c,interruptLoading:p,interruptError:m}=n.useContext(g);return e?o.jsx(h,{isLoading:e,status:`${a} ${e&&`${Math.round(t*100)}%`}`,progress:t,onInterrupt:c,interruptLoading:p,interruptError:m}):null};s.__docgenInfo={description:"",methods:[],displayName:"Queue"};const b=r.aside`
  ${j(1)}
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
`,$=r.div`
  padding: 8px;
  overflow-y: auto;
  flex-grow: 1;
`,v=r.header`
  background: var(--bg2);
  color: var(--fg2);
`,y=r.footer`
  background: var(--bg2);
  color: var(--fg2);
`,i=()=>o.jsxs(b,{children:[o.jsx(v,{children:o.jsx(d,{})}),o.jsx($,{children:o.jsx(u,{})}),o.jsx(y,{children:o.jsxs(x,{pad:!0,column:!0,children:[o.jsx(s,{}),o.jsx(l,{})]})})]}),M=i;i.__docgenInfo={description:"",methods:[],displayName:"Sidebar"};export{M as c};
