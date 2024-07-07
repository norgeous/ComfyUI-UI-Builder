import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as a}from"./index-BwDkhjyp.js";import{C as i}from"./ComfyBridgeContext-CTMRF_Mz.js";import{F as x}from"./FormContext-BvePLfBF.js";import{C as y}from"./index-wo4bmeOh.js";import{G as C,c as k,B}from"./index-D91RuvaC.js";import{c as h}from"./index-DCdg15hX.js";import{c as j}from"./index-DOxmqhEU.js";import{c as w}from"./index-BK5_XIt8.js";import{p as r}from"./styled-components.browser.esm-Cm6OPFyG.js";const v=r.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  color: var(--fg-mute);
  background: var(--bg1);
  padding: 4px;
`,d=r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  overflow: hidden;
  flex-shrink: ${({$shrinkable:t})=>t?1:0};
`,S=r.div`
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,n=r.a`
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
`,c=()=>{const t=a.useContext(i),{formState:l}=a.useContext(x),{config:{baseWorkflow:f}}=a.useContext(y),{adapted:m,adaptedComfyWorkflow:p,bodyData:u}=a.useContext(i),[s,e]=a.useState(),b=[{label:"comfyBridge.data.ws",onClick:()=>e("comfyBridge.data.ws")},{label:"comfyBridge.data.objectInfo",onClick:()=>e("comfyBridge.data.objectInfo")},{label:"comfyBridge.data.prompt",onClick:()=>e("comfyBridge.data.prompt")},{label:"comfyBridge.data.queue",onClick:()=>e("comfyBridge.data.queue")},{label:"comfyBridge.data.queueSelected",onClick:()=>e("comfyBridge.data.queueSelected")},{label:"formState",onClick:()=>e("formState")},{label:"adapted",onClick:()=>e("adapted")},{label:"baseWorkflow",onClick:()=>e("baseWorkflow")},{label:"adaptedComfyWorkflow",onClick:()=>e("adaptedComfyWorkflow")},{label:"bodyData",onClick:()=>e("bodyData")}],g={"comfyBridge.data.ws":t.data.ws,"comfyBridge.data.objectInfo":t.data.objectInfo,"comfyBridge.data.prompt":t.data.prompt,"comfyBridge.data.queue":t.data.queue,"comfyBridge.data.queueSelected":t.data.queueSelected,formState:l,adapted:m,baseWorkflow:f,adaptedComfyWorkflow:p,bodyData:u}[s];return o.jsxs(v,{children:[o.jsxs(d,{$shrinkable:!0,children:[o.jsx(h,{status:t.data.ws.status}),o.jsx(S,{children:t.data.ws.statusText})]}),o.jsxs(d,{children:[o.jsx(n,{href:"https://github.com/norgeous/ComfyUI-UI-Builder/",target:"_blank",children:o.jsx(C,{"aria-label":"Github"})}),o.jsx(n,{href:"https://norgeous.github.io/ComfyUI-UI-Builder/develop/storybook/",target:"_blank",children:o.jsx(k,{"aria-label":"Storybook"})}),o.jsx(j,{"aria-label":"Debug Data Options",options:b,children:o.jsx(B,{})}),s&&o.jsx(w,{onClick:()=>e(),data:g})]})]})},F=c;c.__docgenInfo={description:"",methods:[],displayName:"StatusBar"};export{F as c};
