import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as f}from"./index-BwDkhjyp.js";import{C as l}from"./ComfyBridgeContext-CTMRF_Mz.js";import{c as x}from"./index-CKiSEJ_X.js";import{c as g}from"./index-CLZrHIdD.js";import{c as u}from"./index-6Wdl5W-1.js";import{p as s}from"./styled-components.browser.esm-Cm6OPFyG.js";import{b as j}from"./index-wo4bmeOh.js";const $=s.main`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  overflow: hidden;
`,b=s.div`
  ${j(0)}
  flex: 1;
  padding: 10px;
  overflow: hidden;
  background-size: 8px 8px;
  background-position: center center;
  background-image: radial-gradient(circle, var(--bg2) 1px, transparent 1px);
`,a=()=>{const{data:e,comfyUrl:m,output:t}=f.useContext(l),p=((t==null?void 0:t.images)||[]).map(({filename:n})=>`${m}/view?type=output&filename=${n}`);console.log(e);const c=Object.entries(e.queue).map(([n,i])=>{var r;return{promptId:n,images:(r=i.output)==null?void 0:r.images.map(({filename:d})=>`${e.ws.comfyUrl}/view?type=output&filename=${d}`),...i}});return o.jsxs($,{children:[o.jsx(b,{children:o.jsx(x,{images:p})}),o.jsx(g,{items:c}),o.jsx(u,{})]})},E=a;a.__docgenInfo={description:"",methods:[],displayName:"MainContent"};export{E as c};
