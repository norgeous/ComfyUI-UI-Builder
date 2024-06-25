import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{r as s}from"./index-uCp2LrAq.js";import{C}from"./ComfyBridgeContext-Dy9XN-KW.js";import{W as k}from"./WsContext-9iT9ZgtG.js";import{F as h}from"./FormContext-7paO4gYw.js";import{C as j}from"./index-BUFFlF7z.js";import{A as w}from"./AppContext-DX1Wlwzv.js";import{G as B,d as v,B as I}from"./index-BiKVFdKX.js";import{c as D}from"./index-0KXYed6g.js";import{c as S}from"./index-BC5bIBz4.js";import{c as W}from"./index-Bs-Be9SB.js";import{p as r}from"./styled-components.browser.esm-Drpn4GzW.js";const U=r.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  color: var(--fg-mute);
  background: var(--bg1);
  padding: 4px;
`,c=r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  overflow: hidden;
  flex-shrink: ${({$shrinkable:e})=>e?1:0};
`,$=r.div`
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,l=r.a`
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
`,f=()=>{var n,i;const e=s.useContext(C),{comfyUrl:d}=s.useContext(k),{formState:m}=s.useContext(h),{config:{baseWorkflow:p}}=s.useContext(j),{adapted:u,adaptedComfyWorkflow:x,bodyData:b}=s.useContext(w),[a,t]=s.useState(),g=[{label:"comfyBridge.ws",onClick:()=>t("comfyBridge.ws")},{label:"comfyBridge.objectInfo",onClick:()=>t("comfyBridge.objectInfo")},{label:"comfyBridge.queue",onClick:()=>t("comfyBridge.queue")},{label:"formState",onClick:()=>t("formState")},{label:"adapted",onClick:()=>t("adapted")},{label:"baseWorkflow",onClick:()=>t("baseWorkflow")},{label:"adaptedComfyWorkflow",onClick:()=>t("adaptedComfyWorkflow")},{label:"bodyData",onClick:()=>t("bodyData")}],y={"comfyBridge.ws":e.ws,"comfyBridge.objectInfo":e.objectInfo,"comfyBridge.queue":e.queue,formState:m,adapted:u,baseWorkflow:p,adaptedComfyWorkflow:x,bodyData:b}[a];return o.jsxs(U,{children:[o.jsxs(c,{$shrinkable:!0,children:[o.jsx(D,{status:(n=e.ws)==null?void 0:n.status}),o.jsxs($,{children:[(i=e.ws)==null?void 0:i.statusText," ",d]})]}),o.jsxs(c,{children:[o.jsx(l,{href:"https://github.com/norgeous/ComfyUI-UI-Builder/",target:"_blank",children:o.jsx(B,{"aria-label":"Github"})}),o.jsx(l,{href:"https://norgeous.github.io/ComfyUI-UI-Builder/develop/storybook/",target:"_blank",children:o.jsx(v,{"aria-label":"Storybook"})}),o.jsx(S,{"aria-label":"Debug Data Options",options:g,children:o.jsx(I,{})}),a&&o.jsx(W,{onClick:()=>t(),data:y})]})]})},H=f;f.__docgenInfo={description:"",methods:[],displayName:"StatusBar"};export{H as c};
