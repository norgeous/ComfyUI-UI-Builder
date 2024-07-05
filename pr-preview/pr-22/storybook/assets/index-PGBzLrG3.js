import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as c}from"./index-BwDkhjyp.js";import{C as d}from"./ComfyBridgeContext-CTMRF_Mz.js";import{c as x}from"./index-CKiSEJ_X.js";import{c as f}from"./index-DUCVnDsu.js";import{c as l}from"./index-6Wdl5W-1.js";import{p as n}from"./styled-components.browser.esm-Cm6OPFyG.js";import{b as g}from"./index-wo4bmeOh.js";const u=n.main`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  overflow: hidden;
`,j=n.div`
  ${g(0)}
  flex: 1;
  padding: 10px;
  overflow: hidden;
  background-size: 8px 8px;
  background-position: center center;
  background-image: radial-gradient(circle, var(--bg2) 1px, transparent 1px);
`,r=()=>{const{data:i,comfyUrl:s,output:e}=c.useContext(d),a=((e==null?void 0:e.images)||[]).map(({filename:t})=>`${s}/view?type=output&filename=${t}`),m=Object.entries(i.queue).map(([t,p])=>({promptId:t,...p}));return o.jsxs(u,{children:[o.jsx(j,{children:o.jsx(x,{images:a})}),o.jsx(f,{items:m}),o.jsx(l,{})]})},M=r;r.__docgenInfo={description:"",methods:[],displayName:"MainContent"};export{M as c};
