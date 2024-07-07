import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as a}from"./index-BwDkhjyp.js";import{C as s}from"./ComfyBridgeContext-CTMRF_Mz.js";import{B as y,G as C,h}from"./index-BxrFAvcI.js";import{c as k}from"./index-CXO97U_O.js";import{c as B}from"./index-B6rRGnn3.js";import{p as r}from"./styled-components.browser.esm-Cm6OPFyG.js";import{F as j}from"./FormContext-BvePLfBF.js";import{C as w}from"./index-wo4bmeOh.js";import{c as v}from"./index-u0fpT7_V.js";import{c as I}from"./index-BK5_XIt8.js";const S=r.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  color: var(--fg-mute);
  background: var(--bg1);
  padding: 4px;
`,i=r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  overflow: hidden;
  flex-shrink: ${({$shrinkable:t})=>t?1:0};
`,D=r.div`
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,d=r.a`
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
`,c=()=>{const t=a.useContext(s),{formState:f}=a.useContext(j),{config:{baseWorkflow:m}}=a.useContext(w),{adapted:p,adaptedComfyWorkflow:u,bodyData:g}=a.useContext(s),[n,o]=a.useState(),b=[{label:"comfyBridge.data.ws",onClick:()=>o("comfyBridge.data.ws")},{label:"comfyBridge.data.objectInfo",onClick:()=>o("comfyBridge.data.objectInfo")},{label:"comfyBridge.data.prompt",onClick:()=>o("comfyBridge.data.prompt")},{label:"comfyBridge.data.queue",onClick:()=>o("comfyBridge.data.queue")},{label:"comfyBridge.data.queueSelected",onClick:()=>o("comfyBridge.data.queueSelected")},{label:"formState",onClick:()=>o("formState")},{label:"adapted",onClick:()=>o("adapted")},{label:"baseWorkflow",onClick:()=>o("baseWorkflow")},{label:"adaptedComfyWorkflow",onClick:()=>o("adaptedComfyWorkflow")},{label:"bodyData",onClick:()=>o("bodyData")}],x={"comfyBridge.data.ws":t.data.ws,"comfyBridge.data.objectInfo":t.data.objectInfo,"comfyBridge.data.prompt":t.data.prompt,"comfyBridge.data.queue":t.data.queue,"comfyBridge.data.queueSelected":t.data.queueSelected,formState:f,adapted:p,baseWorkflow:m,adaptedComfyWorkflow:u,bodyData:g}[n];return e.jsxs(e.Fragment,{children:[e.jsx(v,{"aria-label":"View Debug Data",options:b,children:e.jsx(y,{})}),n&&e.jsx(I,{onClick:()=>o(),data:x})]})};c.__docgenInfo={description:"",methods:[],displayName:"DebugMenu"};const l=()=>{const t=a.useContext(s);return e.jsxs(S,{children:[e.jsxs(i,{$shrinkable:!0,children:[e.jsx(k,{status:t.data.ws.status}),e.jsx(D,{children:t.data.ws.statusText})]}),e.jsxs(i,{children:[e.jsx(d,{href:"https://github.com/norgeous/ComfyUI-UI-Builder/",target:"_blank","aria-label":"Github",children:e.jsx(C,{})}),e.jsx(d,{href:"https://norgeous.github.io/ComfyUI-UI-Builder/develop/storybook/",target:"_blank","aria-label":"Storybook",children:e.jsx(h,{})}),e.jsx(c,{}),e.jsx(B,{})]})]})},z=l;l.__docgenInfo={description:"",methods:[],displayName:"StatusBar"};export{z as c};
