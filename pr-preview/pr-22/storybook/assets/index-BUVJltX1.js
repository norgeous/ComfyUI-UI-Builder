import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as a}from"./index-BwDkhjyp.js";import{C as s}from"./ComfyBridgeContext-CTMRF_Mz.js";import{F as x}from"./FormContext-BvePLfBF.js";import{C as y}from"./index-wo4bmeOh.js";import{G as k,c as C,B as h,d as B}from"./index-DH7zSrPd.js";import{c as j}from"./index-DCdg15hX.js";import{c as w}from"./index-DOxmqhEU.js";import{c as v}from"./index-BK5_XIt8.js";import{p as r}from"./styled-components.browser.esm-Cm6OPFyG.js";const S=r.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  color: var(--fg-mute);
  background: var(--bg1);
  padding: 4px;
`,n=r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  overflow: hidden;
  flex-shrink: ${({$shrinkable:t})=>t?1:0};
`,I=r.div`
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
`,D=r.button`
  cursor: pointer;
  display: block;
  background: transparent;
  font-size: inherit;
  border: none;
  color: var(--fg-mute);
  border-radius: var(--radius);
  margin: 0;
  padding: 0;
  &:hover {
    color: var(--fg0);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: -2px;
  }
`,c=()=>{const t=a.useContext(s),{formState:l}=a.useContext(x),{config:{baseWorkflow:f}}=a.useContext(y),{adapted:m,adaptedComfyWorkflow:p,bodyData:u}=a.useContext(s),[i,e]=a.useState(),b=[{label:"comfyBridge.data.ws",onClick:()=>e("comfyBridge.data.ws")},{label:"comfyBridge.data.objectInfo",onClick:()=>e("comfyBridge.data.objectInfo")},{label:"comfyBridge.data.prompt",onClick:()=>e("comfyBridge.data.prompt")},{label:"comfyBridge.data.queue",onClick:()=>e("comfyBridge.data.queue")},{label:"comfyBridge.data.queueSelected",onClick:()=>e("comfyBridge.data.queueSelected")},{label:"formState",onClick:()=>e("formState")},{label:"adapted",onClick:()=>e("adapted")},{label:"baseWorkflow",onClick:()=>e("baseWorkflow")},{label:"adaptedComfyWorkflow",onClick:()=>e("adaptedComfyWorkflow")},{label:"bodyData",onClick:()=>e("bodyData")}],g={"comfyBridge.data.ws":t.data.ws,"comfyBridge.data.objectInfo":t.data.objectInfo,"comfyBridge.data.prompt":t.data.prompt,"comfyBridge.data.queue":t.data.queue,"comfyBridge.data.queueSelected":t.data.queueSelected,formState:l,adapted:m,baseWorkflow:f,adaptedComfyWorkflow:p,bodyData:u}[i];return o.jsxs(S,{children:[o.jsxs(n,{$shrinkable:!0,children:[o.jsx(j,{status:t.data.ws.status}),o.jsx(I,{children:t.data.ws.statusText})]}),o.jsxs(n,{children:[o.jsx(d,{href:"https://github.com/norgeous/ComfyUI-UI-Builder/",target:"_blank",children:o.jsx(k,{"aria-label":"Github"})}),o.jsx(d,{href:"https://norgeous.github.io/ComfyUI-UI-Builder/develop/storybook/",target:"_blank",children:o.jsx(C,{"aria-label":"Storybook"})}),o.jsx(w,{"aria-label":"Debug Data Options",options:b,children:o.jsx(h,{})}),i&&o.jsx(v,{onClick:()=>e(),data:g}),o.jsx(D,{onClick:()=>alert("WIP"),children:o.jsx(B,{"aria-label":"Settings"})})]})]})},O=c;c.__docgenInfo={description:"",methods:[],displayName:"StatusBar"};export{O as c};
