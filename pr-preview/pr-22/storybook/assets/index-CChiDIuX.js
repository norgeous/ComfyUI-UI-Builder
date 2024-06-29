import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as s}from"./index-BwDkhjyp.js";import{C as m}from"./ComfyBridgeContext-CTMRF_Mz.js";import{c as p}from"./index-Bm7KGtcn.js";import{c}from"./index-CgAZTNsM.js";import{p as n}from"./styled-components.browser.esm-Cm6OPFyG.js";import{b as d}from"./index-CXGN0Eu6.js";const x=n.main`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  overflow: hidden;
`,f=n.div`
  ${d(0)}
  flex: 1;
  padding: 10px;
  overflow: hidden;
  background-size: 8px 8px;
  background-position: center center;
  background-image: radial-gradient(circle, var(--bg2) 1px, transparent 1px);
`,t=()=>{const{comfyUrl:r,output:e}=s.useContext(m),i=((e==null?void 0:e.images)||[]).map(({filename:a})=>`${r}/view?type=output&filename=${a}`);return o.jsxs(x,{children:[o.jsx(f,{children:o.jsx(p,{images:i})}),o.jsx(c,{})]})},v=t;t.__docgenInfo={description:"",methods:[],displayName:"MainContent"};export{v as c};
