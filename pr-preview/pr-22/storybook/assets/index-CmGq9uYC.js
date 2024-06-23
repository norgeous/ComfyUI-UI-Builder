import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{r as e}from"./index-uCp2LrAq.js";import{W as C}from"./WsContext-9iT9ZgtG.js";import{F as j}from"./FormContext-7paO4gYw.js";import{C as k}from"./ConfigsContext-JqLhkqbA.js";import{O as y}from"./ObjectInfoContext-CYsF4dpo.js";import{A as h}from"./AppContext-DX1Wlwzv.js";import{G as I,d as v,B as w}from"./index-BiKVFdKX.js";import{c as D}from"./index-BBRnhhpC.js";import{c as S}from"./index-CZeGbJ5T.js";import{c as W}from"./index-Bs-Be9SB.js";import{p as a}from"./styled-components.browser.esm-Drpn4GzW.js";const B=a.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  color: var(--fg-mute);
  background: var(--bg0);
  padding: 4px;
`,U=a.div`
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
`,s=()=>{const{comfyUrl:i}=e.useContext(C),{formState:c}=e.useContext(j),{config:{baseWorkflow:l}}=e.useContext(k),{objectInfoLoading:f,objectInfoError:p,objectInfo:d}=e.useContext(y),{adapted:m,adaptedComfyWorkflow:b,bodyData:x}=e.useContext(h),[r,t]=e.useState(),u=[{label:"formState",onClick:()=>t("formState")},{label:"adapted",onClick:()=>t("adapted")},{label:"baseWorkflow",onClick:()=>t("baseWorkflow")},{label:"objectInfo",onClick:()=>t("objectInfo")},{label:"adaptedComfyWorkflow",onClick:()=>t("adaptedComfyWorkflow")},{label:"bodyData",onClick:()=>t("bodyData")}],g={formState:c,adapted:m,baseWorkflow:l,objectInfo:{objectInfoLoading:f,objectInfoError:p,objectInfo:d},adaptedComfyWorkflow:b,bodyData:x}[r];return o.jsxs(B,{children:[o.jsxs("div",{children:[o.jsx(D,{})," ",i]}),o.jsxs(U,{children:[o.jsx(n,{href:"https://github.com/norgeous/ComfyUI-UI-Builder/",target:"_blank",children:o.jsx(I,{"aria-label":"Github"})}),o.jsx(n,{href:"https://norgeous.github.io/ComfyUI-UI-Builder/develop/storybook/",target:"_blank",children:o.jsx(v,{"aria-label":"Storybook"})}),o.jsx(S,{"aria-label":"Debug Data Options",options:u,children:o.jsx(w,{})}),r&&o.jsx(W,{onClick:()=>t(),data:g})]})]})},z=s;s.__docgenInfo={description:"",methods:[],displayName:"StatusBar"};export{z as c};
