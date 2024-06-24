import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{r as e}from"./index-uCp2LrAq.js";import{C as j}from"./ComfyBridgeContext-Dy9XN-KW.js";import{W as k,A as h}from"./AppContext-ZaKAIv11.js";import{F as I}from"./FormContext-7paO4gYw.js";import{C as w}from"./ConfigsContext-JqLhkqbA.js";import{O as B}from"./ObjectInfoContext-CYsF4dpo.js";import{G as v,d as D,B as S}from"./index-BiKVFdKX.js";import{c as W}from"./index-DdK_udeX.js";import{c as U}from"./index-DBnD2Hxc.js";import{c as O}from"./index-Bs-Be9SB.js";import{p as a}from"./styled-components.browser.esm-Drpn4GzW.js";const _=a.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  color: var(--fg-mute);
  background: var(--bg0);
  padding: 4px;
`,E=a.div`
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
`,s=()=>{const i=e.useContext(j),{wsStatus:c,comfyUrl:l}=e.useContext(k),{formState:f}=e.useContext(I),{config:{baseWorkflow:m}}=e.useContext(w),{objectInfoLoading:p,objectInfoError:d,objectInfo:b}=e.useContext(B),{adapted:x,adaptedComfyWorkflow:u,bodyData:C}=e.useContext(h),[r,t]=e.useState(),g=[{label:"comfyBridge",onClick:()=>t("comfyBridge")},{label:"formState",onClick:()=>t("formState")},{label:"adapted",onClick:()=>t("adapted")},{label:"baseWorkflow",onClick:()=>t("baseWorkflow")},{label:"objectInfo",onClick:()=>t("objectInfo")},{label:"adaptedComfyWorkflow",onClick:()=>t("adaptedComfyWorkflow")},{label:"bodyData",onClick:()=>t("bodyData")}],y={comfyBridge:i,formState:f,adapted:x,baseWorkflow:m,objectInfo:{objectInfoLoading:p,objectInfoError:d,objectInfo:b},adaptedComfyWorkflow:u,bodyData:C}[r];return o.jsxs(_,{children:[o.jsx(W,{status:c})," ",l,o.jsxs(E,{children:[o.jsx(n,{href:"https://github.com/norgeous/ComfyUI-UI-Builder/",target:"_blank",children:o.jsx(v,{"aria-label":"Github"})}),o.jsx(n,{href:"https://norgeous.github.io/ComfyUI-UI-Builder/develop/storybook/",target:"_blank",children:o.jsx(D,{"aria-label":"Storybook"})}),o.jsx(U,{"aria-label":"Debug Data Options",options:g,children:o.jsx(S,{})}),r&&o.jsx(O,{onClick:()=>t(),data:y})]})]})},K=s;s.__docgenInfo={description:"",methods:[],displayName:"StatusBar"};export{K as c};
