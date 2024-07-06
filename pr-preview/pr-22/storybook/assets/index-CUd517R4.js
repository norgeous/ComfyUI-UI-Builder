import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as d}from"./index-BwDkhjyp.js";import{C as f}from"./ComfyBridgeContext-CTMRF_Mz.js";import{c as x}from"./index-CKiSEJ_X.js";import{c as l}from"./index-C1bEwWJ3.js";import{c as u}from"./index-BJTGTFMl.js";import{p as s}from"./styled-components.browser.esm-Cm6OPFyG.js";import{b as g}from"./index-wo4bmeOh.js";const j=s.main`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  overflow: hidden;
`,b=s.div`
  ${g(0)}
  flex: 1;
  padding: 10px;
  overflow: hidden;
  background-size: 8px 8px;
  background-position: center center;
  background-image: radial-gradient(circle, var(--bg2) 1px, transparent 1px);
`,a=()=>{const{data:o}=d.useContext(f),n=Object.entries(o.queue).map(([t,r])=>{var i;return{promptId:t,images:(i=r.output)==null?void 0:i.images.map(({filename:c})=>`${o.ws.comfyUrl}/view?type=output&filename=${c}`),...r}}).toReversed(),p=o.queueSelected.promptId,{images:m}=n.find(({promptId:t})=>t===p)||{};return e.jsxs(j,{children:[e.jsx(b,{children:e.jsx(x,{images:m})}),e.jsx(l,{items:n}),e.jsx(u,{})]})},M=a;a.__docgenInfo={description:"",methods:[],displayName:"MainContent"};export{M as c};
