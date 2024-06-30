import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as a}from"./index-BwDkhjyp.js";import{C as n}from"./ComfyBridgeContext-CTMRF_Mz.js";import{F as g}from"./FormContext-BvePLfBF.js";import{C as y}from"./index-CXGN0Eu6.js";import{G as C,d as k,B as h}from"./index-VWZqVgFq.js";import{c as j}from"./index-CaJSGHS2.js";import{c as w}from"./index-BlyO9wlY.js";import{c as B}from"./index-BK5_XIt8.js";import{p as r}from"./styled-components.browser.esm-Cm6OPFyG.js";const v=r.div`
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
  flex-shrink: ${({$shrinkable:e})=>e?1:0};
`,I=r.div`
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,c=r.a`
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
`,d=()=>{const e=a.useContext(n),{formState:l}=a.useContext(g),{config:{baseWorkflow:f}}=a.useContext(y),{adapted:m,adaptedComfyWorkflow:p,bodyData:u}=a.useContext(n),[s,t]=a.useState(),b=[{label:"comfyBridge.data.ws",onClick:()=>t("comfyBridge.data.ws")},{label:"comfyBridge.data.objectInfo",onClick:()=>t("comfyBridge.data.objectInfo")},{label:"comfyBridge.data.queue",onClick:()=>t("comfyBridge.data.queue")},{label:"formState",onClick:()=>t("formState")},{label:"adapted",onClick:()=>t("adapted")},{label:"baseWorkflow",onClick:()=>t("baseWorkflow")},{label:"adaptedComfyWorkflow",onClick:()=>t("adaptedComfyWorkflow")},{label:"bodyData",onClick:()=>t("bodyData")}],x={"comfyBridge.data.ws":e.data.ws,"comfyBridge.data.objectInfo":e.data.objectInfo,"comfyBridge.data.queue":e.data.queue,formState:l,adapted:m,baseWorkflow:f,adaptedComfyWorkflow:p,bodyData:u}[s];return o.jsxs(v,{children:[o.jsxs(i,{$shrinkable:!0,children:[o.jsx(j,{status:e.data.ws.status}),o.jsxs(I,{children:[e.data.ws.statusText," ",e.comfyUrl]})]}),o.jsxs(i,{children:[o.jsx(c,{href:"https://github.com/norgeous/ComfyUI-UI-Builder/",target:"_blank",children:o.jsx(C,{"aria-label":"Github"})}),o.jsx(c,{href:"https://norgeous.github.io/ComfyUI-UI-Builder/develop/storybook/",target:"_blank",children:o.jsx(k,{"aria-label":"Storybook"})}),o.jsx(w,{"aria-label":"Debug Data Options",options:b,children:o.jsx(h,{})}),s&&o.jsx(B,{onClick:()=>t(),data:x})]})]})},F=d;d.__docgenInfo={description:"",methods:[],displayName:"StatusBar"};export{F as c};
