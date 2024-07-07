import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{r as l}from"./index-BwDkhjyp.js";import{C as g}from"./ComfyBridgeContext-CTMRF_Mz.js";import{c as u}from"./index-D8Md5v9k.js";import{c as h}from"./index-D7piXqeM.js";import{p as a}from"./styled-components.browser.esm-Cm6OPFyG.js";import{b}from"./index-wo4bmeOh.js";const j=a.main`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  overflow: hidden;
`,v=a.div`
  ${b(0)}
  flex: 1 1 50%;
  padding: 10px;
  overflow: hidden;
  background-size: 8px 8px;
  background-position: center center;
  background-image: radial-gradient(circle, var(--bg2) 1px, transparent 1px);
`,c=()=>{const{data:o}=l.useContext(g),n=Object.entries(o.queue).filter(([,e])=>e).map(([e,r])=>{var i;return{promptId:e,images:(i=r.output)==null?void 0:i.images.map(d=>{const s=new URLSearchParams;return Object.entries(d).forEach(([f,x])=>s.append(f,x)),`${o.ws.comfyUrl}/view?${s.toString()}`}),...r}}).toReversed(),p=o.queueSelected.promptId,{images:m}=n.find(({promptId:e})=>e===p)||{};return t.jsxs(j,{children:[t.jsx(v,{children:t.jsx(u,{images:m})}),t.jsx(h,{items:n})]})},M=c;c.__docgenInfo={description:"",methods:[],displayName:"MainContent"};export{M as c};
