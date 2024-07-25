import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{r as l}from"./index-BwDkhjyp.js";import{C as g}from"./ComfyBridgeContext-CTMRF_Mz.js";import{c as u}from"./index-D8UHRkLO.js";import{c as h}from"./index-BWU1MRf4.js";import{d as i}from"./styled-components.browser.esm-CgTwxB-0.js";import{b}from"./bgfg-BUc8g66r.js";const j=i.main`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`,C=i.div`
  ${b(0)}
  flex: 1 1 50%;
  padding: 10px;
  overflow: hidden;
  background-size: 8px 8px;
  background-position: center center;
  background-image: radial-gradient(circle, var(--bg2) 1px, transparent 1px);
`,c=()=>{const{data:o}=l.useContext(g),n=Object.entries(o.queue).filter(([,e])=>e).map(([e,r])=>{var s;return{promptId:e,images:(s=r.output)==null?void 0:s.images.map(d=>{const a=new URLSearchParams;return Object.entries(d).forEach(([f,x])=>a.append(f,x)),`${o.ws.comfyUrl}/view?${a.toString()}`}),...r}}).toReversed(),m=o.queueSelected.promptId,{images:p}=n.find(({promptId:e})=>e===m)||{};return t.jsxs(j,{children:[t.jsx(C,{children:t.jsx(u,{images:p})}),!!n.length&&t.jsx(h,{items:n})]})},M=c;c.__docgenInfo={description:"",methods:[],displayName:"MainContent"};export{M as c};
