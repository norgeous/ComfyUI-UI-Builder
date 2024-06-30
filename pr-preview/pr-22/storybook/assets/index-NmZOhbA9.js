import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as a}from"./index-BwDkhjyp.js";import{C as n}from"./ComfyBridgeContext-CTMRF_Mz.js";import{F as g}from"./FormContext-BvePLfBF.js";import{C as y}from"./index-CXGN0Eu6.js";import{G as C,d as k,B as h}from"./index-VWZqVgFq.js";import{c as w}from"./index-DcJkU15T.js";import{c as j}from"./index-puLRY7LT.js";import{c as B}from"./index-BK5_XIt8.js";import{p as s}from"./styled-components.browser.esm-Cm6OPFyG.js";const v=s.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  color: var(--fg-mute);
  background: var(--bg1);
  padding: 4px;
`,i=s.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  overflow: hidden;
  flex-shrink: ${({$shrinkable:t})=>t?1:0};
`,I=s.div`
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,c=s.a`
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
`,d=()=>{const t=a.useContext(n),{formState:l}=a.useContext(g),{config:{baseWorkflow:f}}=a.useContext(y),{adapted:m,adaptedComfyWorkflow:p,bodyData:u}=a.useContext(n),[r,e]=a.useState(),b=[{label:"comfyBridge.data.ws",onClick:()=>e("comfyBridge.data.ws")},{label:"comfyBridge.data.objectInfo",onClick:()=>e("comfyBridge.data.objectInfo")},{label:"comfyBridge.data.queue",onClick:()=>e("comfyBridge.data.queue")},{label:"formState",onClick:()=>e("formState")},{label:"adapted",onClick:()=>e("adapted")},{label:"baseWorkflow",onClick:()=>e("baseWorkflow")},{label:"adaptedComfyWorkflow",onClick:()=>e("adaptedComfyWorkflow")},{label:"bodyData",onClick:()=>e("bodyData")}],x={"comfyBridge.data.ws":t.data.ws,"comfyBridge.data.objectInfo":t.data.objectInfo,"comfyBridge.data.queue":t.data.queue,formState:l,adapted:m,baseWorkflow:f,adaptedComfyWorkflow:p,bodyData:u}[r];return o.jsxs(v,{children:[o.jsxs(i,{$shrinkable:!0,children:[o.jsx(w,{status:t.data.ws.status}),o.jsxs(I,{children:[t.data.ws.statusText," ",t.comfyUrl," ",JSON.stringify(t.data.ws.messageEvent)]})]}),o.jsxs(i,{children:[o.jsx(c,{href:"https://github.com/norgeous/ComfyUI-UI-Builder/",target:"_blank",children:o.jsx(C,{"aria-label":"Github"})}),o.jsx(c,{href:"https://norgeous.github.io/ComfyUI-UI-Builder/develop/storybook/",target:"_blank",children:o.jsx(k,{"aria-label":"Storybook"})}),o.jsx(j,{"aria-label":"Debug Data Options",options:b,children:o.jsx(h,{})}),r&&o.jsx(B,{onClick:()=>e(),data:x})]})]})},T=d;d.__docgenInfo={description:"",methods:[],displayName:"StatusBar"};export{T as c};
