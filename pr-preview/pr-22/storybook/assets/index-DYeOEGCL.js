import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{r as d}from"./index-BwDkhjyp.js";import{C as f}from"./ComfyBridgeContext-CTMRF_Mz.js";import{c as l}from"./index-imQg_qY8.js";import{c as x}from"./index-CG9vDXyv.js";import{p as s}from"./styled-components.browser.esm-Cm6OPFyG.js";import{b as u}from"./index-wo4bmeOh.js";const g=s.main`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  overflow: hidden;
`,b=s.div`
  ${u(0)}
  flex: 1 1 50%;
  padding: 10px;
  overflow: hidden;
  background-size: 8px 8px;
  background-position: center center;
  background-image: radial-gradient(circle, var(--bg2) 1px, transparent 1px);
`,a=()=>{const{data:o}=d.useContext(f),n=Object.entries(o.queue).filter(([,e])=>e).map(([e,r])=>{var i;return{promptId:e,images:(i=r.output)==null?void 0:i.images.map(({filename:m})=>`${o.ws.comfyUrl}/view?type=output&filename=${m}`),...r}}).toReversed(),p=o.queueSelected.promptId,{images:c}=n.find(({promptId:e})=>e===p)||{};return t.jsxs(g,{children:[t.jsx(b,{children:t.jsx(l,{images:c})}),t.jsx(x,{items:n})]})},k=a;a.__docgenInfo={description:"",methods:[],displayName:"MainContent"};export{k as c};
