import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as a}from"./index-BwDkhjyp.js";import{C as s}from"./ComfyBridgeContext-CTMRF_Mz.js";import{F as y}from"./FormContext-BvePLfBF.js";import{C}from"./index-wo4bmeOh.js";import{G as k,c as h,B,d as j}from"./index-DH7zSrPd.js";import{c as w}from"./index-DCdg15hX.js";import{c as n}from"./index-DOxmqhEU.js";import{c as I}from"./index-BK5_XIt8.js";import{p as r}from"./styled-components.browser.esm-Cm6OPFyG.js";const S=r.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  color: var(--fg-mute);
  background: var(--bg1);
  padding: 4px;
`,l=r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  overflow: hidden;
  flex-shrink: ${({$shrinkable:t})=>t?1:0};
`,v=r.div`
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
`,c=()=>{const t=a.useContext(s),{formState:f}=a.useContext(y),{config:{baseWorkflow:m}}=a.useContext(C),{adapted:p,adaptedComfyWorkflow:u,bodyData:b}=a.useContext(s),[i,o]=a.useState(),g=[{label:"comfyBridge.data.ws",onClick:()=>o("comfyBridge.data.ws")},{label:"comfyBridge.data.objectInfo",onClick:()=>o("comfyBridge.data.objectInfo")},{label:"comfyBridge.data.prompt",onClick:()=>o("comfyBridge.data.prompt")},{label:"comfyBridge.data.queue",onClick:()=>o("comfyBridge.data.queue")},{label:"comfyBridge.data.queueSelected",onClick:()=>o("comfyBridge.data.queueSelected")},{label:"formState",onClick:()=>o("formState")},{label:"adapted",onClick:()=>o("adapted")},{label:"baseWorkflow",onClick:()=>o("baseWorkflow")},{label:"adaptedComfyWorkflow",onClick:()=>o("adaptedComfyWorkflow")},{label:"bodyData",onClick:()=>o("bodyData")}],x={"comfyBridge.data.ws":t.data.ws,"comfyBridge.data.objectInfo":t.data.objectInfo,"comfyBridge.data.prompt":t.data.prompt,"comfyBridge.data.queue":t.data.queue,"comfyBridge.data.queueSelected":t.data.queueSelected,formState:f,adapted:p,baseWorkflow:m,adaptedComfyWorkflow:u,bodyData:b}[i];return e.jsxs(S,{children:[e.jsxs(l,{$shrinkable:!0,children:[e.jsx(w,{status:t.data.ws.status}),e.jsx(v,{children:t.data.ws.statusText})]}),e.jsxs(l,{children:[e.jsx(d,{href:"https://github.com/norgeous/ComfyUI-UI-Builder/",target:"_blank",children:e.jsx(k,{"aria-label":"Github"})}),e.jsx(d,{href:"https://norgeous.github.io/ComfyUI-UI-Builder/develop/storybook/",target:"_blank",children:e.jsx(h,{"aria-label":"Storybook"})}),e.jsx(n,{"aria-label":"View Debug Data",options:g,children:e.jsx(B,{})}),i&&e.jsx(I,{onClick:()=>o(),data:x}),e.jsx(n,{"aria-label":"View Debug Data",options:[{label:"op1",onClick:()=>alert("WIP")},{label:"op2",onClick:()=>alert("WIP")}],children:e.jsx(j,{"aria-label":"Settings"})})]})]})},P=c;c.__docgenInfo={description:"",methods:[],displayName:"StatusBar"};export{P as c};
