import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{r as e}from"./index-uCp2LrAq.js";import{C as y}from"./ComfyBridgeContext-Dy9XN-KW.js";import{W as j}from"./WsContext-9iT9ZgtG.js";import{F as k}from"./FormContext-7paO4gYw.js";import{C as h}from"./ConfigsContext-JqLhkqbA.js";import{O as I}from"./ObjectInfoContext-CYsF4dpo.js";import{A as B}from"./AppContext-DX1Wlwzv.js";import{G as v,d as w,B as D}from"./index-BiKVFdKX.js";import{c as S}from"./index-BBRnhhpC.js";import{c as W}from"./index-CZeGbJ5T.js";import{c as U}from"./index-Bs-Be9SB.js";import{p as a}from"./styled-components.browser.esm-Drpn4GzW.js";const O=a.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  color: var(--fg-mute);
  background: var(--bg0);
  padding: 4px;
`,_=a.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  overflow-x: auto;
`,n=a.a`
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
`,s=()=>{const i=e.useContext(y),{comfyUrl:c}=e.useContext(j),{formState:l}=e.useContext(k),{config:{baseWorkflow:f}}=e.useContext(h),{objectInfoLoading:m,objectInfoError:d,objectInfo:p}=e.useContext(I),{adapted:b,adaptedComfyWorkflow:x,bodyData:u}=e.useContext(B),[r,t]=e.useState("comfyBridge"),g=[{label:"comfyBridge",onClick:()=>t("comfyBridge")},{label:"formState",onClick:()=>t("formState")},{label:"adapted",onClick:()=>t("adapted")},{label:"baseWorkflow",onClick:()=>t("baseWorkflow")},{label:"objectInfo",onClick:()=>t("objectInfo")},{label:"adaptedComfyWorkflow",onClick:()=>t("adaptedComfyWorkflow")},{label:"bodyData",onClick:()=>t("bodyData")}],C={comfyBridge:i,formState:l,adapted:b,baseWorkflow:f,objectInfo:{objectInfoLoading:m,objectInfoError:d,objectInfo:p},adaptedComfyWorkflow:x,bodyData:u}[r];return o.jsxs(O,{children:[o.jsxs("div",{children:[o.jsx(S,{})," ",c]}),o.jsxs(_,{children:[o.jsx(n,{href:"https://github.com/norgeous/ComfyUI-UI-Builder/",target:"_blank",children:o.jsx(v,{"aria-label":"Github"})}),o.jsx(n,{href:"https://norgeous.github.io/ComfyUI-UI-Builder/develop/storybook/",target:"_blank",children:o.jsx(w,{"aria-label":"Storybook"})}),o.jsx(W,{"aria-label":"Debug Data Options",options:g,children:o.jsx(D,{})}),r&&o.jsx(U,{onClick:()=>t(),data:C})]})]})},K=s;s.__docgenInfo={description:"",methods:[],displayName:"StatusBar"};export{K as c};
