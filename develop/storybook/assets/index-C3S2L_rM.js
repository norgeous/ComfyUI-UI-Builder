import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{r as e}from"./index-uCp2LrAq.js";import{W as y}from"./WsContext-9iT9ZgtG.js";import{F as h}from"./FormContext-7paO4gYw.js";import{C as I}from"./ConfigsContext-JqLhkqbA.js";import{O as v}from"./ObjectInfoContext-CYsF4dpo.js";import{A as w}from"./AppContext-DX1Wlwzv.js";import{G as D,d as W,B as S}from"./index-DizZy_GM.js";import{c as B}from"./index-BBRnhhpC.js";import{c as U}from"./index-CZeGbJ5T.js";import{c as G}from"./index-Bs-Be9SB.js";import{p as a}from"./styled-components.browser.esm-Drpn4GzW.js";const O=a.div`
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
`,s=()=>{const{comfyUrl:i,lastWsMessage:c,isGenerating:l,progress:f}=e.useContext(y),{formState:p}=e.useContext(h),{config:{baseWorkflow:d}}=e.useContext(I),{objectInfoLoading:m,objectInfoError:b,objectInfo:x}=e.useContext(v),{adapted:u,adaptedComfyWorkflow:g,bodyData:C}=e.useContext(w),[r,t]=e.useState(),j=[{label:"formState",onClick:()=>t("formState")},{label:"adapted",onClick:()=>t("adapted")},{label:"baseWorkflow",onClick:()=>t("baseWorkflow")},{label:"objectInfo",onClick:()=>t("objectInfo")},{label:"adaptedComfyWorkflow",onClick:()=>t("adaptedComfyWorkflow")},{label:"bodyData",onClick:()=>t("bodyData")}],k={formState:p,adapted:u,baseWorkflow:d,objectInfo:{objectInfoLoading:m,objectInfoError:b,objectInfo:x},adaptedComfyWorkflow:g,bodyData:C}[r];return o.jsxs(O,{children:[o.jsxs("div",{children:[o.jsx(B,{})," ",i," ",c," ",l&&`${Math.round(f*100)}%`]}),o.jsxs(_,{children:[o.jsx(n,{href:"https://github.com/norgeous/ComfyUI-UI-Builder/",target:"_blank",children:o.jsx(D,{"aria-label":"Github"})}),o.jsx(n,{href:"https://norgeous.github.io/ComfyUI-UI-Builder/develop/storybook/",target:"_blank",children:o.jsx(W,{"aria-label":"Storybook"})}),o.jsx(U,{"aria-label":"Debug Data Options",options:j,children:o.jsx(S,{})}),r&&o.jsx(G,{onClick:()=>t(),data:k})]})]})},J=s;s.__docgenInfo={description:"",methods:[],displayName:"StatusBar"};export{J as c};
