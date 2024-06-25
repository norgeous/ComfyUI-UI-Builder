import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{r as a}from"./index-uCp2LrAq.js";import{C as g}from"./ComfyBridgeContext-Dy9XN-KW.js";import{W as y}from"./WsContext-9iT9ZgtG.js";import{F as C}from"./FormContext-7paO4gYw.js";import{C as k}from"./index-BUFFlF7z.js";import{A as h}from"./AppContext-DX1Wlwzv.js";import{G as j,d as w,B}from"./index-BiKVFdKX.js";import{c as v}from"./index-0KXYed6g.js";import{c as I}from"./index-BC5bIBz4.js";import{c as D}from"./index-Bs-Be9SB.js";import{p as s}from"./styled-components.browser.esm-Drpn4GzW.js";const S=s.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  color: var(--fg-mute);
  background: var(--bg1);
  padding: 4px;
`,n=s.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  overflow: hidden;
  flex-shrink: ${({$shrinkable:e})=>e?1:0};
`,W=s.div`
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,i=s.a`
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
`,c=()=>{const e=a.useContext(g),{comfyUrl:d}=a.useContext(y),{formState:l}=a.useContext(C),{config:{baseWorkflow:f}}=a.useContext(k),{adapted:m,adaptedComfyWorkflow:p,bodyData:u}=a.useContext(h),[r,t]=a.useState(),x=[{label:"comfyBridge.data.ws",onClick:()=>t("comfyBridge.data.ws")},{label:"comfyBridge.data.objectInfo",onClick:()=>t("comfyBridge.data.objectInfo")},{label:"comfyBridge.data.queue",onClick:()=>t("comfyBridge.data.queue")},{label:"formState",onClick:()=>t("formState")},{label:"adapted",onClick:()=>t("adapted")},{label:"baseWorkflow",onClick:()=>t("baseWorkflow")},{label:"adaptedComfyWorkflow",onClick:()=>t("adaptedComfyWorkflow")},{label:"bodyData",onClick:()=>t("bodyData")}],b={"comfyBridge.data.ws":e.data.ws,"comfyBridge.data.objectInfo":e.data.objectInfo,"comfyBridge.data.queue":e.data.queue,formState:l,adapted:m,baseWorkflow:f,adaptedComfyWorkflow:p,bodyData:u}[r];return o.jsxs(S,{children:[o.jsxs(n,{$shrinkable:!0,children:[o.jsx(v,{status:e.data.ws.status}),o.jsxs(W,{children:[e.data.ws.statusText," ",d]})]}),o.jsxs(n,{children:[o.jsx(i,{href:"https://github.com/norgeous/ComfyUI-UI-Builder/",target:"_blank",children:o.jsx(j,{"aria-label":"Github"})}),o.jsx(i,{href:"https://norgeous.github.io/ComfyUI-UI-Builder/develop/storybook/",target:"_blank",children:o.jsx(w,{"aria-label":"Storybook"})}),o.jsx(I,{"aria-label":"Debug Data Options",options:x,children:o.jsx(B,{})}),r&&o.jsx(D,{onClick:()=>t(),data:b})]})]})},N=c;c.__docgenInfo={description:"",methods:[],displayName:"StatusBar"};export{N as c};
