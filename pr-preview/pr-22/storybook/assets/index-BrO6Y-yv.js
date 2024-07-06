import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as d}from"./index-BwDkhjyp.js";import{C as f}from"./ComfyBridgeContext-CTMRF_Mz.js";import{c as x}from"./index-B_9R1S_0.js";import{c as l}from"./index-8QjCjCSO.js";import{p as s}from"./styled-components.browser.esm-Cm6OPFyG.js";import{b as u}from"./index-wo4bmeOh.js";const g=s.main`
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
`,a=()=>{const{data:o}=d.useContext(f),n=Object.entries(o.queue).map(([t,r])=>{var i;return{promptId:t,images:(i=r.output)==null?void 0:i.images.map(({filename:m})=>`${o.ws.comfyUrl}/view?type=output&filename=${m}`),...r}}).toReversed(),p=o.queueSelected.promptId,{images:c}=n.find(({promptId:t})=>t===p)||{};return e.jsxs(g,{children:[e.jsx(b,{children:e.jsx(x,{images:c})}),e.jsx(l,{items:n})]})},k=a;a.__docgenInfo={description:"",methods:[],displayName:"MainContent"};export{k as c};
