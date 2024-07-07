import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as a}from"./index-BwDkhjyp.js";import{C as r}from"./ComfyBridgeContext-CTMRF_Mz.js";import{h as k,B,G as w,j as S}from"./index-FfAfuwOy.js";import{c as I}from"./index-CXO97U_O.js";import{c as m}from"./index-u0fpT7_V.js";import{L as i,C as d}from"./styled-BAeofX6r.js";import{p as s}from"./styled-components.browser.esm-Cm6OPFyG.js";import{F as v}from"./FormContext-BvePLfBF.js";import{C as D}from"./index-wo4bmeOh.js";import{c as q}from"./index-BK5_XIt8.js";const f=()=>(console.log("!"),e.jsx(m,{"aria-label":"View Debug Data",menuContents:e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:[e.jsx(d,{})," Scale images larger than their natural size"]}),e.jsxs(i,{children:[e.jsx(d,{})," Pixel optimisation smooth"]})]}),children:e.jsx(k,{"aria-label":"Settings"})}));f.__docgenInfo={description:"",methods:[],displayName:"SettingsMenu"};const _=s.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  color: var(--fg-mute);
  background: var(--bg1);
  padding: 4px;
`,c=s.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  overflow: hidden;
  flex-shrink: ${({$shrinkable:t})=>t?1:0};
`,W=s.div`
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,l=s.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
  &:hover {
    color: var(--fg0);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: -2px;
  }
`,u=()=>{const t=a.useContext(r),{formState:g}=a.useContext(v),{config:{baseWorkflow:x}}=a.useContext(D),{adapted:b,adaptedComfyWorkflow:y,bodyData:h}=a.useContext(r),[n,o]=a.useState(),j=[{label:"comfyBridge.data.ws",onClick:()=>o("comfyBridge.data.ws")},{label:"comfyBridge.data.objectInfo",onClick:()=>o("comfyBridge.data.objectInfo")},{label:"comfyBridge.data.prompt",onClick:()=>o("comfyBridge.data.prompt")},{label:"comfyBridge.data.queue",onClick:()=>o("comfyBridge.data.queue")},{label:"comfyBridge.data.queueSelected",onClick:()=>o("comfyBridge.data.queueSelected")},{label:"formState",onClick:()=>o("formState")},{label:"adapted",onClick:()=>o("adapted")},{label:"baseWorkflow",onClick:()=>o("baseWorkflow")},{label:"adaptedComfyWorkflow",onClick:()=>o("adaptedComfyWorkflow")},{label:"bodyData",onClick:()=>o("bodyData")}],C={"comfyBridge.data.ws":t.data.ws,"comfyBridge.data.objectInfo":t.data.objectInfo,"comfyBridge.data.prompt":t.data.prompt,"comfyBridge.data.queue":t.data.queue,"comfyBridge.data.queueSelected":t.data.queueSelected,formState:g,adapted:b,baseWorkflow:x,adaptedComfyWorkflow:y,bodyData:h}[n];return e.jsxs(e.Fragment,{children:[e.jsx(m,{"aria-label":"View Debug Data",options:j,children:e.jsx(B,{})}),n&&e.jsx(q,{onClick:()=>o(),data:C})]})};u.__docgenInfo={description:"",methods:[],displayName:"DebugMenu"};const p=()=>{const t=a.useContext(r);return e.jsxs(_,{children:[e.jsxs(c,{$shrinkable:!0,children:[e.jsx(I,{status:t.data.ws.status}),e.jsx(W,{children:t.data.ws.statusText})]}),e.jsxs(c,{children:[e.jsx(l,{href:"https://github.com/norgeous/ComfyUI-UI-Builder/",target:"_blank","aria-label":"Github",children:e.jsx(w,{})}),e.jsx(l,{href:"https://norgeous.github.io/ComfyUI-UI-Builder/develop/storybook/",target:"_blank","aria-label":"Storybook",children:e.jsx(S,{})}),e.jsx(u,{}),e.jsx(f,{})]})]})},O=p;p.__docgenInfo={description:"",methods:[],displayName:"StatusBar"};export{O as c};
