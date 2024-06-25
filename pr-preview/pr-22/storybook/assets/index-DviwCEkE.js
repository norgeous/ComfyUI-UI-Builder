import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{r as s}from"./index-uCp2LrAq.js";import{C}from"./ComfyBridgeContext-Dy9XN-KW.js";import{W as k,A as h}from"./AppContext-ZaKAIv11.js";import{F as j}from"./FormContext-7paO4gYw.js";import{C as w}from"./index-BUFFlF7z.js";import{G as B,d as v,B as I}from"./index-BiKVFdKX.js";import{c as D}from"./index-0KXYed6g.js";import{c as S}from"./index-BC5bIBz4.js";import{c as W}from"./index-Bs-Be9SB.js";import{p as a}from"./styled-components.browser.esm-Drpn4GzW.js";const U=a.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  color: var(--fg-mute);
  background: var(--bg1);
  padding: 4px;
`,c=a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  overflow: hidden;
  flex-shrink: ${({$shrinkable:t})=>t?1:0};
`,$=a.div`
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,l=a.a`
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
`,f=()=>{var n,i;const t=s.useContext(C),{comfyUrl:d}=s.useContext(k),{formState:m}=s.useContext(j),{config:{baseWorkflow:p}}=s.useContext(w),{adapted:u,adaptedComfyWorkflow:x,bodyData:b}=s.useContext(h),[r,e]=s.useState(),g=[{label:"comfyBridge.ws",onClick:()=>e("comfyBridge.ws")},{label:"comfyBridge.objectInfo",onClick:()=>e("comfyBridge.objectInfo")},{label:"comfyBridge.queue",onClick:()=>e("comfyBridge.queue")},{label:"formState",onClick:()=>e("formState")},{label:"adapted",onClick:()=>e("adapted")},{label:"baseWorkflow",onClick:()=>e("baseWorkflow")},{label:"adaptedComfyWorkflow",onClick:()=>e("adaptedComfyWorkflow")},{label:"bodyData",onClick:()=>e("bodyData")}],y={"comfyBridge.ws":t.ws,"comfyBridge.objectInfo":t.objectInfo,"comfyBridge.queue":t.queue,formState:m,adapted:u,baseWorkflow:p,adaptedComfyWorkflow:x,bodyData:b}[r];return o.jsxs(U,{children:[o.jsxs(c,{$shrinkable:!0,children:[o.jsx(D,{status:(n=t.ws)==null?void 0:n.status}),o.jsxs($,{children:[(i=t.ws)==null?void 0:i.statusText," ",d]})]}),o.jsxs(c,{children:[o.jsx(l,{href:"https://github.com/norgeous/ComfyUI-UI-Builder/",target:"_blank",children:o.jsx(B,{"aria-label":"Github"})}),o.jsx(l,{href:"https://norgeous.github.io/ComfyUI-UI-Builder/develop/storybook/",target:"_blank",children:o.jsx(v,{"aria-label":"Storybook"})}),o.jsx(S,{"aria-label":"Debug Data Options",options:g,children:o.jsx(I,{})}),r&&o.jsx(W,{onClick:()=>e(),data:y})]})]})},R=f;f.__docgenInfo={description:"",methods:[],displayName:"StatusBar"};export{R as c};
