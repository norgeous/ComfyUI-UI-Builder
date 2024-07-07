import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as a}from"./index-BwDkhjyp.js";import{C as s}from"./ComfyBridgeContext-CTMRF_Mz.js";import{h,B as k,G as j,j as B}from"./index-FfAfuwOy.js";import{c as w}from"./index-CXO97U_O.js";import{c}from"./index-oNU6-43N.js";import{p as r}from"./styled-components.browser.esm-Cm6OPFyG.js";import{F as I}from"./FormContext-BvePLfBF.js";import{C as S}from"./index-wo4bmeOh.js";import{c as v}from"./index-BK5_XIt8.js";const l=()=>{const o=[{label:"op1",onClick:()=>alert("WIP")},{label:"op2",onClick:()=>alert("WIP")}];return e.jsx(c,{"aria-label":"View Debug Data",options:o,children:e.jsx(h,{"aria-label":"Settings"})})};l.__docgenInfo={description:"",methods:[],displayName:"SettingsMenu"};const D=r.div`
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
  flex-shrink: ${({$shrinkable:o})=>o?1:0};
`,q=r.div`
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
`,f=()=>{const o=a.useContext(s),{formState:p}=a.useContext(I),{config:{baseWorkflow:u}}=a.useContext(S),{adapted:g,adaptedComfyWorkflow:b,bodyData:x}=a.useContext(s),[n,t]=a.useState(),y=[{label:"comfyBridge.data.ws",onClick:()=>t("comfyBridge.data.ws")},{label:"comfyBridge.data.objectInfo",onClick:()=>t("comfyBridge.data.objectInfo")},{label:"comfyBridge.data.prompt",onClick:()=>t("comfyBridge.data.prompt")},{label:"comfyBridge.data.queue",onClick:()=>t("comfyBridge.data.queue")},{label:"comfyBridge.data.queueSelected",onClick:()=>t("comfyBridge.data.queueSelected")},{label:"formState",onClick:()=>t("formState")},{label:"adapted",onClick:()=>t("adapted")},{label:"baseWorkflow",onClick:()=>t("baseWorkflow")},{label:"adaptedComfyWorkflow",onClick:()=>t("adaptedComfyWorkflow")},{label:"bodyData",onClick:()=>t("bodyData")}],C={"comfyBridge.data.ws":o.data.ws,"comfyBridge.data.objectInfo":o.data.objectInfo,"comfyBridge.data.prompt":o.data.prompt,"comfyBridge.data.queue":o.data.queue,"comfyBridge.data.queueSelected":o.data.queueSelected,formState:p,adapted:g,baseWorkflow:u,adaptedComfyWorkflow:b,bodyData:x}[n];return e.jsxs(e.Fragment,{children:[e.jsx(c,{"aria-label":"View Debug Data",options:y,children:e.jsx(k,{})}),n&&e.jsx(v,{onClick:()=>t(),data:C})]})};f.__docgenInfo={description:"",methods:[],displayName:"DebugMenu"};const m=()=>{const o=a.useContext(s);return e.jsxs(D,{children:[e.jsxs(i,{$shrinkable:!0,children:[e.jsx(w,{status:o.data.ws.status}),e.jsx(q,{children:o.data.ws.statusText})]}),e.jsxs(i,{children:[e.jsx(d,{href:"https://github.com/norgeous/ComfyUI-UI-Builder/",target:"_blank","aria-label":"Github",children:e.jsx(j,{})}),e.jsx(d,{href:"https://norgeous.github.io/ComfyUI-UI-Builder/develop/storybook/",target:"_blank","aria-label":"Storybook",children:e.jsx(B,{})}),e.jsx(f,{}),e.jsx(l,{})]})]})},P=m;m.__docgenInfo={description:"",methods:[],displayName:"StatusBar"};export{P as c};
