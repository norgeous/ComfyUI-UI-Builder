import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{c as d}from"./index-BGj3-DRj.js";import{c as u}from"./index-DftfwHFk.js";import{c as x}from"./index-Bj5f2gmK.js";import{c as l}from"./index-qDzr2xAS.js";import{r as e}from"./index-uCp2LrAq.js";import{W as f,A as g}from"./AppContext-ZaKAIv11.js";import{c as j}from"./index-DJCRWqZ4.js";import{p as n}from"./styled-components.browser.esm-Drpn4GzW.js";const s=()=>{const{progress:r,lastWsMessage:p,isGenerating:t}=e.useContext(f),{executeInterrupt:a,interruptLoading:c,interruptError:m}=e.useContext(g);return t?o.jsx(j,{isLoading:t,status:`${p} ${t&&`${Math.round(r*100)}%`}`,progress:r,onInterrupt:a,interruptLoading:c,interruptError:m}):null};s.__docgenInfo={description:"",methods:[],displayName:"Queue"};const h=n.aside`
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
`,i=()=>o.jsxs(h,{children:[o.jsx(d,{}),o.jsx($,{children:o.jsx(u,{})}),o.jsxs(l,{pad:!0,column:!0,children:[o.jsx(s,{}),o.jsx(x,{})]})]}),W=i;i.__docgenInfo={description:"",methods:[],displayName:"Sidebar"};export{W as c};
