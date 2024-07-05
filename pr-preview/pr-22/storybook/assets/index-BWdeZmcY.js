import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as c}from"./index-BwDkhjyp.js";import{C as d}from"./ComfyBridgeContext-CTMRF_Mz.js";import{c as x}from"./index-CKiSEJ_X.js";import{c as f}from"./index-DTY7T3hS.js";import{c as g}from"./index-6Wdl5W-1.js";import{p as i}from"./styled-components.browser.esm-Cm6OPFyG.js";import{b as l}from"./index-wo4bmeOh.js";const u=i.main`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  overflow: hidden;
`,j=i.div`
  ${l(0)}
  flex: 1;
  padding: 10px;
  overflow: hidden;
  background-size: 8px 8px;
  background-position: center center;
  background-image: radial-gradient(circle, var(--bg2) 1px, transparent 1px);
`,s=()=>{const{data:e}=c.useContext(d),t=Object.entries(e.queue).map(([m,n])=>{var r;return{promptId:m,images:(r=n.output)==null?void 0:r.images.map(({filename:p})=>`${e.ws.comfyUrl}/view?type=output&filename=${p}`),...n}}).toReversed(),{images:a}=t[0];return o.jsxs(u,{children:[o.jsx(j,{children:o.jsx(x,{images:a})}),o.jsx(f,{items:t}),o.jsx(g,{})]})},M=s;s.__docgenInfo={description:"",methods:[],displayName:"MainContent"};export{M as c};
